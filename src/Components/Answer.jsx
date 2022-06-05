import React, { Component } from "react";
import { useState, useEffect } from 'react'
import { useParams } from "react-router-dom";
import "./Styles/answers.css";
const correctStyle = "#A1FC77";
const incorrectStyle = "#FF633D";
const possibleCorrectStyle = "#FEEE6B";

export default function Answer({ testPassed, answer, ...props }) {
    const [selected, setSelected] = useState(false);
    const answerStyle = () => {
        if (testPassed) { //если тест пройден
            if (answer.isRightAnswer) { //если ответ правильный
                if (selected) { //если ответ выбран
                    return {backgroundColor: correctStyle}; //то зеленый цвет на фон
                }
                return {backgroundColor: possibleCorrectStyle};//то желтный цвет на фон
            }
            if (selected) {
                return {backgroundColor: incorrectStyle};// если ответ не правильный, и выбран, то красный цвет на фотн
            }
        }
        return {};
    }
    const updateAnswerState = (e) => { // обновляем состояние ответа
        if (!testPassed) {  //если тест не пройден, то  
            const checked = e.target.checked; //устанавливаем флаг, проверки на состония чекбокса(тру или фолз)
            setSelected(checked); //меняем состояние ответа на выбранное/не выбранное, в зависимости от флага checked
            answer.correct = checked == answer.isRightAnswer;// устанавливаем состояние правильности  ответа (если ответ совпдает справильным
            // то ответ правильный answer.correct = true)
        }
    }
    return (// форма чекбокс-ответ
        <div className=" pt-0 mt-0 mx-4 answer" style={answerStyle()}/*задаем стиль цвета фона формы */> 
            <div> 
                <div className="form-check"> 
                    <input name="answer" className="form-check-input" type="checkbox" checked={selected} id="flexCheckDefault "
                        onChange={updateAnswerState} // если у нас нажат чекбокс, то состояние овтета меняется на выбранное
                    />
                    <label name="answer" className="form-check-label" for="flexCheckDefault">
                        <h5>{answer.answerName}</h5>
                    </label>
                </div>
            </div>
        </div>
    );
}