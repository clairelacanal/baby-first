import React from 'react';
import './App.css';
import { Switch, Route } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import Home from './components/Homepage/Homepage';
import Login from './components/Auth/Login';
import Signup from './components/Auth/Signup';
import Profile from './components/Profile/Profile';
import ListEtiquette from './components/Etiquette/ListEtiquette';
import AddEtiquette from './components/Etiquette/AddEtiquette';
import DetailsEtiquette from './components/Etiquette/DetailsEtiquette';
import ModifyEtiquette from './components/Etiquette/ModifyEtiquette';
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

  componentDidMount(){
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
        <Route exact path="/profile/:id" render={(props) => <Profile {...props}/>}/>
        <Route exact path="/etiquette/ajout" render={() => <AddEtiquette user={this.state.loggedInUser}/>}/>
        <Route exact path="/etiquette/:id" render= {(props) => <DetailsEtiquette {...props} user={this.state.loggedInUser}/>} /> 
        <Route exact path="/etiquette/:id" render= {(props) => <DetailsEtiquette {...props} user={this.state.loggedInUser}/>} /> 
        <Route exact path="/modify-etiquette/:id" render={(props) => <ModifyEtiquette {...props} user={this.state.loggedInUser}/>}/>
        </Switch>
        <Footer/>
    </div>
    )
  }
}

export default App;
