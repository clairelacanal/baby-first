import React from 'react';
import { Link } from 'react-router-dom';
import { Redirect } from 'react-router-dom/cjs/react-router-dom.min';
import {logout} from '../Auth/auth-service';
import {login} from '../Auth/auth-service'
import './Navbar.css';
import {GiBabyBottle} from 'react-icons/gi';
import {IoPersonCircle} from 'react-icons/io';


const Navbar = (props) => {
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
                    </ul>

                    {props.userInSession ? (
                        <div className="profile-account">
                            <div className="profile-name">
                                {props.userInSession.username}
                            </div>
                            <div className="profile-avatar">
                                <IoPersonCircle className="personn-connected"/>
                            </div>
                        </div>
                    ) : (
                        <button className="button-login"><Link to="/login">Connexion</Link></button>  
                    )}
                </div>
            </div>
        )   
}

export default Navbar;