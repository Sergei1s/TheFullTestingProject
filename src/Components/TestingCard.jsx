import { Container, Card } from 'react-bootstrap';
import Answer from './Answer';

// Карточки с вопросами
const TestingCard = ({testPassed, questions, ...props }) => {
    // Создаем карточку для каждого вопроса
    const questionComponents = questions.map((question, index) => { // сопоставляем каждому вопросу компонент карточки
        // Создаем карточку для каждого ответа
        const answerComponents = question.answers.map(answer => { // сопоставляем каждому вопросу компонент с ответами
            return (
                <Answer testPassed={testPassed} answer={answer} /> // формируем ответ включая параметры testPassed и answer
            );
        });
        return (
            <Card key={index}>  {/*Порядковый номер вопроса начиная с 0. */}
                <Card.Body>
                    <div className="mx-3 pt-3 mb-4">
                        <div className="px-4 pt-1">
                            <Card.Title>
                                <h3 className="mb-3 ">Вопрос {index + 1}</h3> {/* Задается номер вопроса - "Вопрос номер 1"*/}
                            </Card.Title>
                        </div>
                        <div className="pt-4 mx-4">
                            <Card.Text className='blockquote' value>
                                {question.questionName} {/*Текст вопроса */}
                            </Card.Text>
                            {answerComponents} {/*Список ответов */}
                        </div>
                    </div>
                </Card.Body>
            </Card>
        )
    });
    return (
        <Container >
            <div className="d-block w-75 mx-auto mt-4">
                {questionComponents} {/*карточки вопросов: вопрос - ответы*/}
            </div>
        </Container>

    );
}

export default TestingCard;

