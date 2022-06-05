import { Container, Card, CardImg, CardProps, CardGroup, CarouselItem, Col, Row, FormGroup } from 'react-bootstrap';
import Answer from './Answer';


const TestingCard = ({testPassed, questions, setQuestions, testResultCallBack/*получаем результат из карточки по этому параметру*/, ...props }) => { 
    const questionCards = questions.map((question, index) => { //сопоставляем каждому вопросы индекс
        const answerCards = question.answers.map(answer => { //сопоставляем каждому вопросу ответ
            return (
                <Answer testPassed={testPassed} answer={answer} ></Answer> // формируем ответ включая параметры testPassed и answer
            );
        });
        return (
            <Card key={index}>  {/*Порядковый номер вопроса */}
                <Card.Body>
                    <div class="mx-3 pt-3 mb-4">
                        <div className="px-4 pt-1">
                            <Card.Title>
                                <h3 className="mb-3 ">Вопрос {index + 1}</h3> {/* Задается номер вопроса - "Вопрос номер 1"*/}
                            </Card.Title>
                        </div>

                        <div className="pt-4 mx-4">
                            <Card.Text className='blockquote' value>
                                {question.questionName} {/*Текст вопроса */}
                            </Card.Text>
                            {answerCards} {/*Список ответов */}
                        </div>
                    </div>
                </Card.Body>
            </Card>
        )
    });
    return (
        <Container >
            <div className="d-block w-75 mx-auto mt-4">
                {questionCards} {/*карточки вопросов: вопрос - ответы*/}
            </div>
        </Container>

    );
}

export default TestingCard;

