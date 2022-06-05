import 'bootstrap/dist/css/bootstrap.min.css'
import { Button } from 'react-bootstrap'
import TestingCard from '../Components/TestingCard';
import Header from '../Components/Header';
import { Container, Card, CardImg, CardProps, CardGroup, CarouselItem, Col, Row } from 'react-bootstrap';
import { useState, useEffect } from 'react'
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import { host } from "../API"


const modifySignature = (questions) => {
    questions.forEach(question => {
        question.answers.forEach(answer => {
            answer.correct = !answer.isRightAnswer;
        })
    });
    return questions;
    // return questions.map(question => {
    //     return {
    //         ...question, answers: question.answers.map(answer => {
    //             return {
    //                 ...answer,
    //                 isRightAnswer: false
    //             }
    //         })
    //     }
    // });
}

export const Tester = ({ testId, ...props }) => {

    const [testPassed, setTestPassed] = useState(false);
    const [testResult, setTestResult] = useState("");
    const [testName, setTestName] = useState("Loading...");
    const [questions, setQuestions] = useState([]);
    const [error, setError] = useState(undefined);
    const { id } = useParams();

    const checkAnswers = () => {
        let correctlyAnswers = 0;
        questions.forEach(question => {
            let correctly = true;
            question.answers.forEach(answer => { correctly &= answer.correct });
            if (correctly) correctlyAnswers++;
        });
        return correctlyAnswers;
    }

    // Загружаем тест через fetch запрос к api
    useEffect(() => {
        fetch(host + "passageTest/" + id)
            .then(resp => {
                if (resp.ok) {
                    resp.json().then(test => {
                        setTestName(test.testName);
                        setQuestions(modifySignature(test.questions));
                        setError(undefined);


                    });
                } else {
                    setError("Test not found.")

                }
            })
            .catch(err => {
                setError("Api error.3");
                console.log(err);
            })
    }, []);

    // Получаем резульаты теста через запрос к api
    const submitTest = () => {
        console.log(questions);
        const correctlyAnswers = checkAnswers();
        const totalQuestons = questions.length;
        setTestResult("Вы правильно ответили на " + correctlyAnswers + " из " + totalQuestons);
        setTestPassed(true);
    }
    if (error) {
        return (
            // TODO: Decorate
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

                <TestingCard testPassed={testPassed} questions={questions} setQuestions={setQuestions} />
                {testPassed && testResultElement()}
                {!testPassed && submitTestElement()}
            </div>
        </Container >

    )
}