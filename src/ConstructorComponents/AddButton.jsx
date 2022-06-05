import React from 'react';
import { Container, Button } from 'react-bootstrap';
import TestingCard from './TestingCard.jsx';

// Компонент кнопки для добавленя вопросов
const AddButton = ({ questions, /* Callback функция для добавления вопроса */ addQuestion, ...props }) => {
    // Преобразуем данные о вопросах в компоненты
    const questionsCards = () => {
        return questions.map(question => <TestingCard question={question}/>)
    }
    return (
        <div>
            {questionsCards()}
            <Container className='mt-4 mb-5 px-5 text-center '>
                <Button className="btn btn-primary btn-sm"
                        onClick={addQuestion} >
                            {/*При нажатии кнопки вызываем callback функцию для добавления вопроса*/}
                    Добавить вопрос
                </Button>
            </Container>

        </div>
    );
};

export default AddButton;