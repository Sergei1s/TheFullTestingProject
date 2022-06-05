import React from "react";

// Компонент вопроса
export default function Answer({ answer, ...props }) {
    return (
        <div className="form">
            <div className="form-group" style={{position: "relative"}}>
                <input name="que" className="form-check-control" type="checkbox" value="" id="flexCheckDefault" style={{position:"absolute", top:"36px", left:"-20px"}}
                       onChange={e => { answer.isRightAnswer = e.target.checked }}
                />{/* При нажатии чек бокса меняем состояние ответа на "правильный" и наоборот */}
                <label name="que" className="form-check-label" for="flexCheckDefault" />
                <input type="Name" className="form-control date-picker" id="exampleInputText1" aria-describedby="TextHelp" placeholder="Введите ответ"
                       onChange={e => { answer.answerName = e.target.value }}
                /> {/* При изменении теста ответа меняем состояние на актульное */}

            </div>
        </div>
    );
};