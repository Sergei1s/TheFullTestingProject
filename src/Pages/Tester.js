import 'bootstrap/dist/css/bootstrap.min.css'
import { Button, Container } from 'react-bootstrap'
import TestingCard from '../Components/TestingCard';
import Header from '../Components/Header';
import { useState, useEffect } from 'react'
import { Link, useParams } from "react-router-dom";
import { host } from "../Api/API"

// Добвляет к каждому ответу флаг correct
// correct := (answerSelected == isRightAnswer)
// Корректный ответ это правильный выбранный или неправильный невыбранный ответ.
// Правильный ответ это ответ указанный автором теста.
// Выбранный ответ это ответ указанный пользователем.
const withCorrectFlag = (questions) => {
    questions.forEach(question => {
        question.answers.forEach(answer => {
            // По умолчанию ни один ответ не выбран
            // По этому для невыбранных ответов будут корректны неправильные
            answer.correct = !answer.isRightAnswer;
        })
    });
    return questions;
}

// Страница прохождения теста
export const Tester = ({ testId, ...props }) => {

    // Сотояния компонета
    const [testPassed, setTestPassed] = useState(false);
    const [testResult, setTestResult] = useState("");
    const [testName, setTestName] = useState("Loading...");
    const [questions, setQuestions] = useState([]);
    const [error, setError] = useState(undefined); // Ошибки при загрузке теста

    // Параметр указанный в url страницы (номер теста)
    const { id } = useParams();

    // Загружаем тест через fetch запрос к api при открытии страницы
    useEffect(() => {
        // Отправка запроса к api для получения теста по номеру
        fetch(host + "passageTest/" + id)
            .then(resp => {
                // Обработка ответа от api
                if (resp.ok) { // Если код ответа от api: 200 OK
                    resp.json().then(testResponse => {
                        // Устанавливаем новые состояния для теста
                        setTestName(testResponse.testName);
                        setQuestions(withCorrectFlag(testResponse.questions));
                        setError(undefined); // Очищаем ошибки
                    });
                } else {
                    // Теста с таким номером не существует в базе данных
                    setError("Test not found.");
                }
            })
            .catch(err => {
                // При возникновении ошибка в api
                setError("Api error.");
                console.log(err);
            })
    }, []);

    // В случе ошибки показываем сообщение с её текстом
    if (error) {
        return (
            <div className="text-center mt-4 pt-5  mb-5">
                <h1>{error}</h1>
                <Link to="/" >
                    <Button variant="primary" className="mt-4  mb-5" size="lg" >
                        Вернуться
                    </Button>
                </Link>
            </div>
        );
    }

    // Возвращяет число вопросов, на которые были даны правильные ответы
    const checkAnswers = () => {
        let correctlyAnswers = 0;
        questions.forEach(question => {
            let correctly = true;
            question.answers.forEach(answer => { correctly &= answer.correct });
            if (correctly) correctlyAnswers++;
        });
        return correctlyAnswers;
    }

    // Провека теста
    const submitTest = () => {
        const correctlyAnswersCount = checkAnswers();
        const totalQuestionsCount = questions.length;
        setTestResult("Вы правильно ответили на " + correctlyAnswersCount + " из " + totalQuestionsCount);
        setTestPassed(true);
    }

    // Компонент реузльтатов теста
    const testResultElement = () => {
        return (
            <div className="text-center mt-4 pt-5  mb-5">
                <h1>{testResult}</h1>
                <Link to="/" >
                    <Button variant="primary" className="mt-4  mb-5" size="lg" >
                        Вернуться
                    </Button>
                </Link>
            </div>
        );
    }

    // Кнопка "Завершить работу"
    const submitTestElement = () => {
        return (
            <div className="text-center mt-4  mb-5">
                <Button variant="primary" className="mt-4  mb-5" size="lg" onClick={submitTest}>
                    Завершить работу
                </Button>{' '}
            </div>
        );
    }

    return (
        < Container >
            <div className="mx-auto">
                <Header testName={testName} />
                <TestingCard testPassed={testPassed} questions={questions} />
                {/* Если тест не закончен, тогда показывем кнопку завершения теста */}
                {!testPassed && submitTestElement()}
                {/* Если тест закончен, тогда показывем результат прохождения теста */}
                {testPassed && testResultElement()}
            </div>
        </Container >
    )
}