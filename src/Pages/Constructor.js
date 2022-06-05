import 'bootstrap/dist/css/bootstrap.min.css'
import Header from '../ConstructorComponents/Header';
import { Container, Card, CardImg, CardProps, CardGroup, CarouselItem, Col, Row } from 'react-bootstrap';
import AddButton from '../ConstructorComponents/AddButton';
import { useState } from 'react';
import { Button } from 'react-bootstrap'
import { Link } from "react-router-dom";
import { host } from "../API"

const Constructor = () => {
    const [testId, setTestId] = useState("");
    const [testName, setTestName] = useState("Тест");
    const [questions, setQuestions] = useState(initialQuestionsState());
    const sendTest = () => {
        fetch(host + "createTest", {
            method: "POST",
            headers: {
                'Content-Type': "application/json",
            },
            body: JSON.stringify({
                testName: testName,
                questions: questions
            })
        }).then(resp => {
            if (resp.ok) {
                resp.text().then(id => {
                    setTestId(id);
                });
            } else {
                console.log("Error")
            }
        }).catch(e => {
            console.log(e);
        })
    }
    if (testId) {
        return (
            <div class="text-center mt-4 mb-5 px-5">
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
            <div class="mx-auto">
                <Container className='mt-4 mb-5 px-5  '>
                    <div className='text-center pt-5'>
                        <h1>
                            Конструктор теста
                        </h1>
                    </div>

                    
                    <div class="mx-auto">
                        <div className="mt-0  pt-3 mx-auto" style={{ width: 30 + '%', minWidth: "880px" }}>
                            <Header testName={testName} setTestName={setTestName} />
                        </div>
                        {/* <InputAPI/> */}
                        <AddButton questions={questions} addQuestion={e =>
                            setQuestions([...questions, {
                                questionName: "",
                                answers: [
                                    { answerName: "", isRightAnswer: false },
                                    { answerName: "", isRightAnswer: false },
                                    { answerName: "", isRightAnswer: false },
                                    { answerName: "", isRightAnswer: false }
                                ]
                            }])
                        } />
                    </div>
                    <Container className='mt-4 mb-5 px-5 text-center '>
                        <button
                            type="button"
                            onClick={sendTest}
                            class="btn btn-success ">
                            <text>Тест готов</text>
                        </button>
                    </Container>
                </Container>



                {/* <div class="text-center mt-4  mb-5"> */}
                {/* <Button variant="primary" className="mt-4  mb-5" size="lg"> */}
                {/* Завершить работу */}
                {/* </Button>{' '} */}
                {/* </div> */}


            </div>
        </Container>

    )
};

function initialQuestionsState() {
    return [{
        questionName: "",
        answers: [
            { answerName: "", isRightAnswer: false },
            { answerName: "", isRightAnswer: false },
            { answerName: "", isRightAnswer: false },
            { answerName: "", isRightAnswer: false }
        ]
    }];
}

export default Constructor;
