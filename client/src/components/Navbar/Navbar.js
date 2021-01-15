import React from 'react';
import { Link } from 'react-router-dom';
import { Redirect } from 'react-router-dom/cjs/react-router-dom.min';
import {logout} from '../Auth/auth-service';
import './Navbar.css';


const Navbar = (props) => {
        return(
            <div id="navbar">
                <div className="section-navbar">
                    <Link to="/homepage">Baby First</Link>
                    <Link to="/login">Connexion</Link>
                </div>
            </div>
        )
    
}

export default Navbar;