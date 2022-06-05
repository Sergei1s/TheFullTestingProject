import {Container, Card, CardImg, CardProps, CardGroup, CarouselItem, Col, Row, FormGroup} from 'react-bootstrap';
import Answer from './Answer';

// Карточка с шаблонами вопросов
const TestingCard = ({question, ...props}) => {

    // Кадому ответу из вопроса сопоставляем компонент с вводом ответа
    const answersCards = () => question.answers.map(ans => <Answer answer={ans}/>);

    return (
        <Container>
            <div className="d-block w-75 mx-auto mt-4">
                <Card>
                    <Card.Body>
                        <div className="mx-3 pt-3 mb-4">
                            <div className="px-4 pt-1">
                                <Card.Title>
                                    <div className="form-group">
                                        <label for="exampleInputQueNamel1"> Введите текст вопроса</label>
                                        <input type="Name"
                                               className="form-control"
                                               id="exampleInputQueNamel1"
                                               aria-describedby="QueHelp"
                                               placeholder="Текст вопроса"
                                               
                                               onChange={e => question.questionName = e.target.value}
                                        />
                                        {/* При изменении теста вопроса обновляем состояние на актульное */}
                                    </div>
                                </Card.Title>
                            </div>
                            <div className="pt-4 mx-4">
                                {answersCards()}
                            </div>
                        </div>
                    </Card.Body>
                </Card>
            </div>
        </Container>
    );
}

export default TestingCard;


