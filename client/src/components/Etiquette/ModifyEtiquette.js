import React from 'react';
import {Link} from 'react-router-dom';
import service from '../Auth/auth-service';
import './Etiquette.css';

class ModifyEtiquette extends React.Component {
    state = {
        etiquette : {}
    }

     //Function get0neEtiquette

     getOneEtiquette = () => {
        const {params} = this.props.match
        service.get(`/etiquette/${params.id}`)
        .then(responseFromApi => {
            const theEtiquette = responseFromApi.data;
            this.setState({etiquette: theEtiquette})
        })
        .catch((err) => {
            console.log('erreur pour charger', err)
        })
    }
    //Function componentDiMount()

    componentDidMount(){
        this.getOneEtiquette()
    }
    //Function ModifyOneEtiquette()

    modifyOneEtiquette = () => {
        const {params} = this.props.match
        service.put(`/etiquette/${params.id}`)
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
        const title = this.state.etiquette.title;
        const lieu = this.state.etiquette.lieu;
        const date = this.state.etiquette.date;
        const imageUrl = this.state.etiquette.imageUrl;
        const commentaire = this.state.etiquette.commentaire

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

        let newEtiquette = Object.assign({}, this.state.etiquette);
        newEtiquette[inputName] = inputValue;
        this.setState({etiquette : newEtiquette})
    }

    render(){
        if (this.state.etiquette == null) {
            return null;
        } else {

        return(
            <div id="section-modify-etiquette">
                <div className="container-modify-etiquette">
                    <div className="formulaire-modify-etiquette">
                        <form onSubmit={this.handleFormSubmit} className="formulaire-modify-etiquette">
                        <label>Changez le titre:</label>
                            <input type="text" name="title" value={this.state.etiquette.title} onChange={element => this.handleChange(element)}/>

                            <label>Changez le lieu:</label>
                            <input type="text" name="lieu" value={this.state.etiquette.lieu} onChange={element => this.handleChange(element)}/>

                            <label>Changez la date:</label>
                            <input type="date" name="date" value={this.state.etiquette.date} onChange={element => this.handleChange(element)}/>

                            <label>Changez l'image:</label>
                            <input type="file" name="imageUrl" value={this.state.etiquette.imageUrl} onChange={element => this.handleChange(element)}/>

                            <label>Changez le commentaire:</label>
                            <textarea name="commentaire" value={this.state.etiquette.commentaire} onChange={element => this.handleChange(element)}/>

                            <button>Mettre à jour les modifications</button>
                        </form>
                    </div>
                </div>
            </div>
            )
        }
    }
}

export default ModifyEtiquette;