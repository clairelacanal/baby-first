import React from 'react';
import './App.css';
import { Switch, Route } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import Home from './components/Homepage/Homepage';
import Login from './components/Auth/Login';
import Signup from './components/Auth/Signup';
import Profile from './components/Profile/Profile';
import AddEtiquette from './components/Etiquette/AddEtiquette';
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
        <Navbar userInSession={this.state.loggedInUser} updateUser={this.updateLoggedInUser}/>
        <Switch>
        <Route exact path="/" component = {Home} />
        <Route exact path="/signup" render ={() => <Signup updateUser= {this.updateLoggedInUser}/>}/>
        <Route exact path="/login"  render ={() => <Login updateUser= {this.updateLoggedInUser} user={this.state.loggedInUser}/>}/>
        <Route exact path="/profile/:id" render={() => <Profile user={this.state.loggedInUser}/>}/>
        <Route exact path="/etiquette" render={() => <AddEtiquette/>}/>
        </Switch>
        <Footer/>
    </div>
    )
  }
}

export default App;
