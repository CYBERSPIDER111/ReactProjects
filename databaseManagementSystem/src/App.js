import './App.css';
import Navbar from './Navbar';
import Home from './Pages/Home';
import Budget from './Pages/Budget';
import Employee from './Pages/Employee';
import Add from './Pages/Add';
import React, { useState, useEffect } from 'react';
import {Link, Route, Routes} from 'react-router-dom';

function App() {

  return (
    <>
    <Navbar/>
    
    <Routes>
        <Route path="/Budget" element={<Budget />}/>
        <Route path="/Employee" element={<Employee />}/>
        <Route path="/" element={<Home />}/>
        <Route path="/Add" element={<Add />}/>
    </Routes>
    </>
  );
  
}

export default App;
