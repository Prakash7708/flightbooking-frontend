// import logo from './logo.svg';
 import './App.css';
 import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './Home/home';
import Admin from './admin/admin';
import Userslogin from './Login/Login';
import Register from './Login/Register';
import Book from './Home/Book';
import Advancebook from './Home/Advancebook';


function App() {
  
  return (
    
    <BrowserRouter>
    <Routes>
    <Route path="/" element={<Userslogin/>} />
    <Route path="/Register" element={<Register/>} />
     <Route path="/home" element={<Home/>} />
     <Route path="/admin" element={<Admin/>} />
     <Route path="/book/:id" element={<Book/>} />
     <Route path="/Advancebook/:id" element={<Advancebook/>} />
         
    </Routes>
  </BrowserRouter>
  );
}

export default App;
