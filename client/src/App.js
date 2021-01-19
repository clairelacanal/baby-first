import React from 'react';
import './App.css';
import { Switch, Route } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import Home from './components/Homepage/Homepage';
import Login from './components/Auth/Login';
import Signup from './components/Auth/Signup';

function App() {
  return (
    <div className="App">

      <Navbar/>
      <Switch>
      <Route exact path="/" component = {Home} />
      <Route exact path="/signup" component = {Signup} />
      <Route exact path="/login" component = {Login} />
      </Switch>
      <Footer/>
    </div>
  );
}

export default App;
