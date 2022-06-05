import 'bootstrap/dist/css/bootstrap.min.css'
import { Tester } from './Pages/Tester';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import  Constructor  from './Pages/Constructor';
import StartPage from './Pages/StartPage';
import React from "react";

// Главный компонет приложения
function App() {
  return (
    // Страницы сайта
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<StartPage/>} />           { /* Стартовая страциа сайта */ }
        <Route path="/create/" element={<Constructor/>} />  { /* Страница конструктора тестов */ }
        <Route path="/:id/" element={<Tester/>} />          { /* Страница прохождения теста */ }
      </Routes>
    </BrowserRouter>
  );
}

export default App;
