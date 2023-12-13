import { useState } from 'react'
import './App.css'
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Navbar from './layout/Navbar'
import Home from './pages/home';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AddUser from './Users/AddUser';

function App() {
 

  return  <div className='APP'>
    <Router>
    <Navbar/>
    
    <Routes>
      <Route exact path="/" element={<Home/>}/>
      <Route exact path="/add" element={<AddUser/>}/>
    </Routes>
    
    </Router>   
      </div>
      
   
  
}

export default App
