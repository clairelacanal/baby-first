import React from 'react';
import { Redirect } from 'react-router-dom';
import service, { upload } from '../Auth/auth-service';
import './Etiquette.css';

class AddEtiquette extends React.Component {
    state = {
        title:"",
        lieu: "",
        date: new Date(),
        imageUrl: "",
        commentaire:"",
        redirect: false
    }

    //Function handleSubmit()
    handleSubmit = (event) => {
        event.preventDefault();
        const title = this.state.title;
        const lieu = this.state.lieu;
        const date = this.state.date;
        const imageUrl = this.state.imageUrl;
        const commentaire = this.state.commentaire;

        service.post('/etiquette', {title, lieu, date, imageUrl, commentaire})
        .then(() => {
            this.setState({title:"", lieu:"", date: new Date(), imageUrl:"", redirect:true});
        })
        .catch(err => console.log(err));
    }

    //Function handleChange()
    handleChange = (event) => {
        const {name, value} = event.target;
        this.setState({[name]:value});
    }

    //Function handleUpload()
    handleUpload = (event) => {
        let formData = new FormData();
        formData.append('imageUrl', event.target.files[0]);

        upload(formData)
            .then(response => this.setState({imageUrl: response.secure_url}))
            .catch(err => console.log(`l'image ne se charge pas`, err))
    }

    render(){
        
        return(
            <div id="section-add-etiquette">
                <div className="add-etiquette">
                    <h1>Créez votre étiquette</h1>
                    <div className="form-add-etiquette">
                        <form onSubmit={this.handleSubmit} className="form-add-etiquette">

                            <label>Ajouter un titre:</label>
                            <input type="text" name="title" value={this.state.title} onChange={event => this.handleChange(event)}/>

                            <label>Ajouter un lieu:</label>
                            <input type="text" name="lieu" value={this.state.lieu} onChange={event => this.handleChange(event)}/>

                            <label>Ajouter une date:</label>
                            <input type="date" name="date" value={this.state.date} onChange={event => this.handleChange(event)}/>

                            <label>Télécharger une image:</label>
                            <input type="file" name="imageUrl" value={this.state.imageUrl} onChange={event => this.handleChange(event)}/>

                            <label>Ajouter un commentaire:</label>
                            <textarea name="commentaire" value={this.state.commentaire} onChange={event => this.handleChange(event)}/>

                            <button className="button-add-etiquette">Publiez</button>

                        </form>
                    </div>
                </div>
            </div>
        )
    }
}

export default AddEtiquette;