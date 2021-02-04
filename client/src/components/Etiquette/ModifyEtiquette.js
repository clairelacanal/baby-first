import React from 'react';
import {Link} from 'react-router-dom';
import service from '../Auth/auth-service';
import './Etiquette.css';

class ModifyEtiquette extends React.Component {
    state = {
        etiquette : {
            title: '',
            lieu: '',
            date: new Date(),
            imageUrl: '',
            commentaire: '',
            redirect: false
        }
    }

    //Function handleSubmit() pour soumettre le formulaire
    handleSubmit = (event) => {
        preventDefault(event);
        const title = this.state.title,
        const lieu = this.state.lieu,
        const date = this.state.date,
        const imageUrl = this.state.imageUrl,
        const commentaire = this.state.commentaire

        service.post('/etiquette', {title, lieu, date, imageUrl, commentaire})
        .then(() => {
            this.setState({title, lieu, date, imageUrl, redirect:true});
        })
        .catch(err => console.log(err));
    }

    //function handleChange pour changer l'ancienne valeur en nouvelle valeur

    handleChange(element) {
        let inputName = element.target.name;
        let inputValue = element.target.value;

        let newEtiquette = Object.assign({},this.state);
        newEtiquette.etiquette[inputName].value = inputValue;
    }

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