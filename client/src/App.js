import React from 'react';
import './App.css';
import { Switch, Route } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import Home from './components/Homepage/Homepage';
import Login from './components/Auth/Login';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Home/>
      <Footer/>
    </div>
  );
}

export default App;
