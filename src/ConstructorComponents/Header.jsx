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

            {/* <div class="pb-3 pt-0 mt-0">
                <div class="container">
                    <div class="w-75 p-2 mx-auto" >
                        <div class="form-group">
                            <label for="exampleInputDescription1">Описание</label>
                            <input type="text"
                                className="form-control form-control-sm"
                                id="exampleInputDescription1" placeholder="Введите описание теста" />
                        </div>
                    </div>
                </div>
            </div> */}
        </div>

    );


}