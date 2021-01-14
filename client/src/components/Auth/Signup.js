import React from 'react';
import './Auth.css';
import {signup} from './auth-service';
import { Link, Redirect } from 'react-router-dom';


class Signup extends React.Component {
    state = {
        username:"",
        email:"",
        password:"",
        redirect: false
    }

    // FUNCTION handleFormSubmit 
    handleFormSubmit = (event) => {
        event.preventDefault();
        const username = this.state.username;
        const email = this.state.email;
        const password = this.state.password;

        signup(username, email, password)
        .then(response => {
            this.setState({
               username: "",
               email: "",
               password: "",
               redirect: true 
            })
            this.props.updateUser(response)
        })
        .catch(error => console.log(error))
    }

    //FUNCTION handleChange
    handleChange = (event) => {
        const {name,value} = event.target;
        this.setState({[name] : value});
    }

    //handleFormSubmit et handleChange seront rendus lors de la soumission du formulaire

    render() {
        if(this.state.redirect){ //Si c'est vrai, redirigé l'utilisateur sur la page du login
            return <Redirect to="/login"/>
        }
        return(
            <div id="signup">
                <div className="section-signup">
                    <div className="form-signup">
                        <h1>Créez votre compte</h1>
                        <form onSubmit={this.handleFormSubmit} className="form-signup">
                            <label>Nom :</label>
                            <input type="text" name="username" value={this.state.username} onChange={ event => this.handleChange(event)}/>

                            <label>Email :</label>
                            <input type="email" name="email" value={this.state.username} onChange={ event => this.handleChange(event)}/>
                        </form>

                    </div>
                </div>
            </div>
        )
    }
}