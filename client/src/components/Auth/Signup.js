import React from 'react';
import './Auth.css';
import {signup} from './auth-service';
import { Link, Redirect } from 'react-router-dom';



class Signup extends React.Component {
    state = {
        username:"",
        email:"",
        password:"",
        confirmedPassword:"",
        redirect: false
    }

    // FUNCTION handleFormSubmit 
    handleFormSubmit = (event) => {
        event.preventDefault();
        const username = this.state.username;
        const email = this.state.email;
        const password = this.state.password;
        const confirmedPassword = this.state.confirmedPassword;

        signup(username, email, password, confirmedPassword)
        .then(response => {
            this.setState({
               username: "",
               email: "",
               password: "",
               confirmedPassword: "",
               redirect: true 
            });
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
                    <div className="container-image-signup">
                        <div className="images-container-signup">
                            <div className="image-one-signup"></div>
                            <div className="image-two-signup"></div>
                        </div>
                        <div className="container-titre-signup">
                            <h2><cite>"L'enfant qui se concentre est immensément heureux"</cite>&nbsp;&nbsp;<strong>Maria Montessori</strong></h2>
                        </div>
                    </div>
                    <div className="form-signup">
                        <h1>Créez votre compte</h1>
                        <p>La création d'un compte est libre et gratuite.<br/> Ce compte permet de commencer votre album sans aucun engagement.</p>
                        <form onSubmit={this.handleFormSubmit} className="formulaire-signup">
                            <label>Nom</label>
                            <input type="text" name="username" value={this.state.username} placeholder="Votre nom d'utilisateur" onChange={ event => this.handleChange(event)}/>

                            <label>Email</label>
                            <input type="email" name="email" value={this.state.email} placeholder="Votre email" onChange={ event => this.handleChange(event)}/>

                            <label>Mot de passe</label>
                            <input type="text" name="password" value={this.state.password} placeholder="Mot de passe" onChange={ event => this.handleChange(event)}/>

                            <label>Confirmation</label>
                            <input type="text" name="confirmedPassword" value={this.state.confirmedPassword} placeholder="Confirmer le mot de passe" onChange={ event => this.handleChange(event)}/>

                            <button className="button-signup">Créer le compte</button>
                        </form>
                        <p>
                            Vous avez déjà un compte ?
                            <Link to={"/login"}>&nbsp;&nbsp;Connectez-vous</Link>
                        </p>
                    </div>
                </div>
            </div>
            
        )
    }
}

export default Signup;