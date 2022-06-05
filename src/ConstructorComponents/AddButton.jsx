import React, { useState } from 'react';
//mport Button from "./Components/Button";
import { Button } from 'react-bootstrap';
import TestingCard from './TestingCard.jsx';
import { Container, Card, CardImg, CardProps, CardGroup, CarouselItem, Col, Row } from 'react-bootstrap';

const AddButton = ({ questions, addQuestion, ...props }) => {
    const questionsCards = () => {
        return questions.map(question => <TestingCard question={question}/>)
    }
    return (
        <div>
            {questionsCards()}
            <Container className='mt-4 mb-5 px-5 text-center '>
                <Button onClick={addQuestion} className="btn btn-primary btn-sm">Добавить вопрос</Button>
            </Container>
            
        </div>
    );
};

export default AddButton;