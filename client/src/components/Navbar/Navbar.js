import React from 'react';
import { Link } from 'react-router-dom';
import { Redirect } from 'react-router-dom/cjs/react-router-dom.min';
import {logout} from '../Auth/auth-service';
import './Navbar.css';
import {GiBabyBottle} from 'react-icons/gi';


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
                        <button className="button-login"><Link to="/login">Connexion</Link></button>
                    </ul>
                </div>
            </div>
        )   
}

export default Navbar;