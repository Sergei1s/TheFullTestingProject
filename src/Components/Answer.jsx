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
        if (testPassed) {
            if (answer.isRightAnswer) {
                if (selected) {
                    return {backgroundColor: correctStyle};
                }
                return {backgroundColor: possibleCorrectStyle};
            }
            if (selected) {
                return {backgroundColor: incorrectStyle};
            }
        }
        return {};
    }
    const updateAnswerState = (e) => {
        if (!testPassed) {
            const checked = e.target.checked;
            setSelected(checked);
            answer.correct = checked == answer.isRightAnswer;
        }
    }
    return (
        <div className=" pt-0 mt-0 mx-4 answer" style={answerStyle()}>
            <div>
                <div className="form-check">
                    <input name="answer" className="form-check-input" type="checkbox" checked={selected} id="flexCheckDefault "
                        onChange={updateAnswerState}
                    />
                    <label name="answer" className="form-check-label" for="flexCheckDefault">
                        <h5>{answer.answerName}</h5>
                    </label>
                </div>
            </div>
        </div>
    );
}