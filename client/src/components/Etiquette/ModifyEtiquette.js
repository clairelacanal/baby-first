import React from 'react';
import {Link} from 'react-router-dom';
import service from '../Auth/auth-service';
import './Etiquette.css';

class ModifyEtiquette extends React.Component {
    render(){
        return(
            <div id="section-modify-etiquette">
                <div className="container-modify-etiquette">
                    <div className="image-modify-etiquette">

                    </div>
                    <div className="formulaire-modify-etiquette">
                        <form className="form-modify-etiquette">
                            <label>Titre:</label>
                            <label>Lieu:</label>
                            <label>Date:</label>
                            <label>Commentaire:</label>
                            <Link to="/profile">Validez les modifications</Link>
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}

export default ModifyEtiquette;