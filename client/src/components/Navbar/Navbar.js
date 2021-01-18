import React from 'react';
import { Link } from 'react-router-dom';
import { Redirect } from 'react-router-dom/cjs/react-router-dom.min';
import {logout} from '../Auth/auth-service';
import './Navbar.css';


const Navbar = (props) => {
        return(
            <div id="navbar">
                <div className="section-navbar">
                    <ul>
                        <li><Link to="/">Baby First</Link></li>
                        <li><Link to="/login">Connexion</Link></li>
                    </ul>
                </div>
            </div>
        )   
}

export default Navbar;