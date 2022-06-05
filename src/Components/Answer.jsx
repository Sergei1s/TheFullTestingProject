import React, { Component } from "react";
import { useState, useEffect } from 'react'
import { useParams } from "react-router-dom";
import "./Styles/answers.css";

// Цвета для выдления правильных и неправильных ответов
const correctStyle = "#A1FC77";
const incorrectStyle = "#FF633D";
const possibleCorrectStyle = "#FEEE6B";

// Компонент ответа на вопрос
export default function Answer({ testPassed, answer, ...props }) {

    // состояние selected: указал ли пользователь этот ответ
    const [selected, setSelected] = useState(false);

    // Выбераем цвет ответа в зависимости от его правильности, и возвращаем css:style
    const answerStyle = () => {
        if (testPassed) { //если тест пройден
            if (answer.isRightAnswer) { //если ответ правильный
                if (selected) { //если ответ выбран
                    return {backgroundColor: correctStyle}; //то зеленый цвет на фон
                }
                return {backgroundColor: possibleCorrectStyle};//то желтный цвет на фон
            }
            if (selected) {
                return {backgroundColor: incorrectStyle};// если ответ не правильный, и выбран, то красный цвет на фот
            }
        }
        // Если ответ не правильный и не выбран, то цвет будет белым (без стиля)
        return {};
    }

    // a == b - сравнение по ссылкам
    // a === b - сравнение по значению

    // обновляем состояние ответа
    const updateAnswerState = (e) => {
        if (!testPassed) {  // если тест не пройден, то
            const checked = e.target.checked; // Получаем состояния чекбкса (выбран ли нет) и сохранияем в локальную переменную
            setSelected(checked); // Меняем состояние ответа на выбранное/не выбранное, в зависимости от флага checked
            answer.correct = checked === answer.isRightAnswer;// Устанавливаем состояние правильности  ответа
            // (если ответ совпдает справильным то ответ правильный answer.correct = true)
        }
        // Если тест пройден, то никак не обрабатываем нажатие на чекбокс (после прохождения теста ответы нельзя менять)
    }

    return ( // форма чекбокс-ответ
        <div className=" pt-0 mt-0 mx-4 answer" style={answerStyle()}/*задаем стиль цвета фона формы */> 
            <div> 
                <div className="form-check"> 
                    <input name="answer" className="form-check-input" type="checkbox" checked = {selected} id="flexCheckDefault"
                        onChange={updateAnswerState} // При нажатии обрабатывем новое значение
                    />
                    <label name="answer" className="form-check-label" for="flexCheckDefault">
                        <h5>{answer.answerName}</h5>
                    </label>
                </div>
            </div>
        </div>
    );
}