import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import { Tester } from './Pages/Tester';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import  Constructor  from './Pages/Constructor';
import StartPage from './Pages/StartPage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<StartPage/>} />
        <Route path="/create/" element={<Constructor/>} />
        <Route path="/:id/" element={<Tester/>} />
        
      </Routes>
    </BrowserRouter>
  );
}

export default App;
