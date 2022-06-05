import React, { useState } from "react";
import { Button, InputGroup, FormControl } from 'react-bootstrap'
import { Link } from "react-router-dom";

// Компонент главной страницы
export default function StartPage() {

    // Соятояние isTestNumberDialogOpen - флаг открыт диалог с вводом номера или нет
    const [isTestNumberDialogOpen, setTestNumberDialogOpen] = useState(false)

    // Состояние введённого номера теста
    const [testID, setTestID] = useState("")

    // Компопнет диалогового окна для ввода номера теста
    const testNumberDialog = () => {
        return (
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
        )
    }

    return (
        <div>
            <div className="pt-5 pb-0 mb-0 text-center">
                <h1 className='text-center m-4'>Система тестирования МАК Вымпел</h1>
                <Link to="/create" >
                    <Button variant="primary" className="pr-4 mt-4 mr-4 mb-5" size="lg" >
                        Cоздать тест
                    </Button>
                </Link>

                <Button variant="success" className="pl-4 ml-4 mt-4  mb-5" size="lg" style={{ marginLeft: 30 + 'px' }}
                        onClick={e => setTestNumberDialogOpen(true)}>  {/* По нажатию на кнопку, показываем диалог (устанавливаем флаг isTestNumberDialogOpen в true)*/}
                    Пройти тест
                </Button>

                {/* Если пользователь открыл диалог, то показываем его. */}
                {isTestNumberDialogOpen && testNumberDialog()}
            </div>

        </div>
    );
};