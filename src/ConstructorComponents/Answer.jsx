import React, { Component } from "react";

export default function Answer({ answer, ...props }) {
    return (
        <div className="form">
            
            <div class="form-group" style={{position: "relative"}}>
               
                <input name="que" class="form-check-control" type="checkbox" value="" id="flexCheckDefault" style={{position:"absolute", top:"36px", left:"-20px"}}
                    onClick={e => { answer.isRightAnswer = e.target.checked }}
                />
                <label name="que" class="form-check-label" for="flexCheckDefault" ></label>
                <input type="Name" class="form-control date-picker" id="exampleInputText1" aria-describedby="TextHelp" placeholder="Введите ответ"
                    onChange={e => { answer.answerName = e.target.value }}
                />

            </div>
        </div>
    );
};