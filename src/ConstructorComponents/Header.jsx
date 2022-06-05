import React, { Component } from "react";


export default function Header({ testName, setTestName, ...props }) {

    return (
        <div>
            <div class="pt-5 pb-0 mb-0">
                <div class="form-group">
                    <label for="exampleInputNamel1" style={{color:"rgb(33, 37, 41)", fontSize:"20px", fontWeight:500}}> Введите название теста</label>
                    <input type="text"
                           className="form-control form-control-lg"
                           id="exampleInputNamel1"
                           aria-describedby="NameHelp"
                           placeholder="Название теста"
                           onChange={e => setTestName(e.target.value)}
                           />
                </div>
            </div>

            
        </div>

    );


}