import React from 'react';
import {Link} from 'react-router-dom';
import service from '../Auth/auth-service';
import DetailsEtiquette from '../Etiquette/DetailsEtiquette';
import './Etiquette.css';

class ModifyEtiquette extends React.Component {
    state = {
        etiquette : {}
    }

    //Function ModifyOneEtiquette()

    ModifyOneEtiquette = () => {
        console.log("mon etiquette :" + JSON.stringify(this.props.etiquette))
        service.put(`/etiquette/${this.props.etiquette._id}`)
        .then(responseFromApi => {
            this.setState({etiquette: responseFromApi.data})
            console.log("Mon etiquette:" + this.state.etiquette);
        })
        .catch(err => {
            console.log(err, "L'étiquette ne s'affiche pas")
        })

    }

    //Function handleSubmit() pour soumettre le formulaire
    handleSubmit = (event) => {
        event.preventDefault()
        const title = this.state.title;
        const lieu = this.state.lieu;
        const date = this.state.date;
        const imageUrl = this.state.imageUrl;
        const commentaire = this.state.commentaire

        service.put('/etiquette', {title, lieu, date, imageUrl, commentaire})
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
                    <div className="formulaire-modify-etiquette">
                        <form onSubmit={this.handleFormSubmit} className="formulaire-modify-etiquette">
                          coucou
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}

export default ModifyEtiquette;