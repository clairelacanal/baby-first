import React from 'react';
import { Link } from 'react-router-dom';
import { Redirect } from 'react-router-dom/cjs/react-router-dom.min';
import {logout} from '../Auth/auth-service';
import {login} from '../Auth/auth-service'
import './Navbar.css';
import {GiBabyBottle} from 'react-icons/gi';
import {BsFillPersonFill} from 'react-icons/bs';


const Navbar = (props) => {
    if(props.updateUser === null){
        return <Redirect to="/"></Redirect>
    }
        return(
            <div id="navbar">
                <div className="section-navbar">
                    <ul>
                        <li>
                        <Link to="/">
                        <GiBabyBottle className="bottle"/>
                        Baby First
                        </Link>
                        </li>
                        {props.userInSession ? (
                        <div className="profile-account">
                            <div className="profile-name">
                                <Link to={`/profile/${props.userInSession._id}`}>
                                <BsFillPersonFill className="personn-connected"/></Link>
                            </div>
                            <div className="profile-logout">
                                <Link to="/">
                                <button onClick = {(e) => {
                                    logout()
                                    .then(() => props.updateUser(null))
                                }}>Me déconnecter</button>
                                </Link>
                            </div>
                        </div>
                    ) : (
                        <button className="button-login"><Link to="/login">Connexion</Link></button>  
                    )}
                    </ul>
                </div>
            </div>
        )   
}

export default Navbar;