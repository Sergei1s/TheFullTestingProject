import { Carousel } from 'bootstrap';
import { Container, Card, CardImg, CardProps, CardGroup, CarouselItem, Col, Row, FormGroup } from 'react-bootstrap';
import Slider from './Slider';
import Answer from './Answer';




const TestingCard = ({questions, setQuestions, testResultCallBack, ...props }) => {
    const questionCards = questions.map((question, index) => {
        const answerCards = question.answers.map(answer => {
            return (
                <Answer answer={answer} answerName={answer.answerName} isRightAnswer={answer.isRightAnswer}></Answer>
            );
        });
        return (
            <Card key={index}>
                <Card.Body>
                    <div class="mx-3 pt-3 mb-4">
                        <div className="px-4 pt-1">
                            <Card.Title>
                                <h3 className="mb-3 ">Вопрос {index + 1}</h3>
                            </Card.Title>

                            {/* <Slider /> */}
                        </div>

                        <div className="pt-4 mx-4">
                            <Card.Text className='blockquote' value>
                                {question.questionName}
                            </Card.Text>
                            {answerCards}
                        </div>
                    </div>
                </Card.Body>
            </Card>
        )
    });
    return (
        <Container >
            <div className="d-block w-75 mx-auto mt-4">
                {questionCards}
            </div>
        </Container>

    );
}

export default TestingCard;