/* eslint-disable react/jsx-no-duplicate-props */
// import logo from './logo.svg';
// import './drag.js'

import React from 'react';
import './App.css';
import Nav from './components/Nav';
// import Footer from './components/Footer';
// import ItemCard from './components/ItemCard';
import { BrowserRouter as Router, Routes, Route}
    from 'react-router-dom';
import Home from './pages/Home';
import Dashboard from './pages/Dashboard';
import Console from './pages/Console';
import Games from './pages/Games';
import Login from './pages/Login';
import ItemPage from './pages/ItemPage';


function App() {
  return (
    <Router>
    <Nav />
    <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/Dashboard' element={<Dashboard/>} />
        <Route path='/Console' element={<Console/>} />
        <Route path='/Games' element={<Games/>} />
        <Route path='/Login' element={<Login/>} />
        <Route path='/ItemPage' element={<ItemPage/>} />
    </Routes>
    {/* <Footer /> */}
    </Router>
  );
}

export default App;
