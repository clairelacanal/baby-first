import React from 'react';
import './App.css';
import { Switch, Route } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import Home from './components/Homepage/Homepage';
import Login from './components/Auth/Login';
import Signup from './components/Auth/Signup';
import { loggedin } from './components/Auth/auth-service';

class App extends React.Component {
  state = {
    loggedInUser: null
  }

  fetchUser = () => {
    if(this.state.loggedInUser === null) {
      loggedin()
      .then(response => {
        this.setState({loggedInUser: response})
      })
      .catch(err => {
        this.setState({loggedInUser: false})
      })
    }
  }

  componentDiMount(){
    this.fetchUser();
  }

  updateLoggedInUser = (userObj) => {
    this.setState({ loggedInUser: userObj})
  }
  
  render () {
    return(
      <div className="App">
        <Navbar/>
        <Switch>
        <Route exact path="/" component = {Home} />
        <Route exact path="/signup" render ={() => <Signup updateUser = {this.updateLoggedInUser}/>}/>
        <Route exact path="/login" component = {Login} />
        </Switch>
        <Footer/>
    </div>
    )
  }
}

export default App;
