import React, { Component, useState } from "react";
import { Button, InputGroup, FormControl } from 'react-bootstrap'
import Image from 'react-bootstrap/Image'
import { Link } from "react-router-dom";
//import logo from './logo.png';\


export default function StartPage() {
    const [testNumberDialogOpen, setTestNumberDialogOpen] = useState(false)
    const [testID, setTestID] = useState("")

    return (
        <div>
            {/* <img src={logo} alt="logo" /> */}
            <div className="pt-5 pb-0 mb-0 text-center">
                <h1 className='text-center m-4'>Система тестирования МАК Вымпел</h1>
                <Link to="/create" >
                    <Button variant="primary" className="pr-4 mt-4 mr-4 mb-5" size="lg" >
                        Cоздать тест
                    </Button>
                </Link>

                <Button variant="success" className="pl-4 ml-4 mt-4  mb-5" size="lg" onClick={e => setTestNumberDialogOpen(true)} style={{ marginLeft: 30 + 'px' }}>
                    Пройти тест
                </Button>

                {testNumberDialogOpen ? (

                    <div className="mt-4  pt-5 mx-auto" style={{ width: 30 + '%', minWidth: "400px" }}>
                        <InputGroup className="mb-3">
                            <InputGroup.Text>Номер теста</InputGroup.Text>
                            <FormControl aria-label="Номер теста" onChange={e => { setTestID(e.target.value) }} />
                            <Link to={"/"+testID}>
                                <Button variant="success" className="pl-4 " size="lg" onClick={e => { }}>
                                    Начать
                                </Button>
                            </Link>
                        </InputGroup>
                    </div>
                ) : null

                }



            </div>

        </div>
    );
};