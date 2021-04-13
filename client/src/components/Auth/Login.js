import React from 'react';
import './Auth.css';
import {login} from './auth-service';
import { Link, Redirect } from 'react-router-dom';

class Login extends React.Component {
    state = {
        email:"",
        password:"",
        redirect: false
    }

    //function handleFormSubmit
    handleFormSubmit = (event) => {
        event.preventDefault();
        const email = this.state.email;
        const password = this.state.password;

        login(email,password)
        .then(response => {
            this.setState({
               email:"",
               password:"",
               redirect: true
            })
            this.props.updateUser(response);
        })
        .catch(err => console.log(err));
    }

    //function handleChange
    handleChange = (event) => {
        const {name, value} = event.target;
        this.setState({[name] : value});
    }
    
    //Les fonctions handleFormSubmit et handleChange dans notre formulaire
    render() {
        const {redirect} = this.state;
        if(this.props.user?._id){
            return <Redirect to={`/profile/${this.props.user._id}`}/>
        }
        return(
            <div id="login">
                <div className="section-login">
                    <div className="form-login">
                        <h1>Connectez-vous à vore compte</h1>
                        <form onSubmit={this.handleFormSubmit} className="form-login">
                            <label>Email</label>
                            <input type="email" name="email" value={this.state.email} onChange={event => this.handleChange(event)}/>

                            <label>Mot de passe</label>
                            <input type="password" name="password" value={this.state.password} onChange={event => this.handleChange(event)}/>
                        
                            <button className="login-button">Connexion</button>
                        </form>
                    <p>
                    <Link to={"/signup"}> Créez un compte gratuitement</Link>
                    </p>
                    </div>
                    <div className="container-images-login">
                        <div className="images-container-login">
                            <div className="image-one-login"></div>
                            <div className="image-two-login"></div>
                        </div>
                        <div className="container-titre-login">
                            <h2><cite>"L'essence de l'indépendance est de pouvoir faire quelque chose pour soi-même."</cite>&nbsp;&nbsp;<strong>Maria Montessori</strong></h2>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Login;