import 'bootstrap/dist/css/bootstrap.min.css';
import Header from '../ConstructorComponents/Header';
import AddButton from '../ConstructorComponents/AddButton';
import { Container, Button } from 'react-bootstrap';
import { useState } from 'react';
import { Link } from "react-router-dom";
import { host } from "../Api/API";

// Страница констркутора сайтов
const Constructor = () => {

    // Состояния компонента
    const [testId, setTestId] = useState(""); // Номер теста
    const [testName, setTestName] = useState("Тест"); // Название теста
    const [questions, setQuestions] = useState([createNewQuestion()]); // Вопросы теста

    // Обработчик собитыя для нажатия на кнопку "создать тест"
    const sendTest = () => {
        // Отправка запроса к api на создание теста
        fetch(host + "createTest", {
            method: "POST",
            headers: {
                'Content-Type': "application/json", // Тип оправляемых данным на api: json
            },
            // Создание текствого представления обьекта в формате json
            body: JSON.stringify({
                testName: testName,
                questions: questions
            })
        }).then(resp => {
            // Обработка ответа от api
            if (resp.ok) {
                // Устанавливаем новое состояние для номера теста
                resp.text().then(id => {
                    setTestId(id);
                });
            } else {
                // При получении ошибки от api
                console.log("Error: Bad response code.")
            }
        }).catch(e => {
            // При ошибке отправки ответа
            console.log(e);
        })
    }

    // Добавляет новый пустой вопрос к уже имеющимся
    const addNewQuestion = () => {
        // Создаём новый вопрос с 4 ответами
        const newQuestion = createNewQuestion();
        // Устанавливаем новое состяние вопросов: массив содержащий имющиеся вопросы и новый вопрос
        setQuestions([...questions, newQuestion])
    }

    // Если тест создан (при создании меняется состояние testId),
    // то показываем сообщение о успешном создании теста
    if (testId) {
        return (
            <div className="text-center mt-4 mb-5 px-5">
                <h1>
                    Тест успешно создан.
                </h1>
                <h2>
                    Номер вашего теста: {testId}
                </h2>
                <Link to="/" >
                    <Button variant="primary" className="mt-4  mb-5" size="lg" >
                        Вернуться
                    </Button>
                </Link>
            </div>
        );
    }

    return (
        <Container>
            <div className="mx-auto">
                <Container className='mt-4 mb-5 px-5  '>
                    <div className='text-center pt-5'>
                        <h1> Конструктор теста </h1>
                    </div>
                    <div className="mx-auto">
                        <div className="mt-0  pt-3 mx-auto" style={{ width: 30 + '%', minWidth: "880px" }}>
                            {/* Название теста */}
                            <Header setTestName={setTestName} />
                        </div>
                        <AddButton questions={questions} addQuestion={addNewQuestion} />
                    </div>
                    <Container className='mt-4 mb-5 px-5 text-center '>
                        <button
                            type="button"
                            onClick={sendTest}
                            className="btn btn-success ">
                            <text>Тест готов</text>
                        </button>
                    </Container>
                </Container>
            </div>
        </Container>
    )
};

// Создаёт обьект вопроса c 4 ответами
// Текст вопроса и текста ответов отсудствуют
function createNewQuestion() {
    return {
        questionName: "",
        answers: [
            { answerName: "", isRightAnswer: false },
            { answerName: "", isRightAnswer: false },
            { answerName: "", isRightAnswer: false },
            { answerName: "", isRightAnswer: false }
        ]
    };
}

export default Constructor;
