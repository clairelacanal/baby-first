import React from 'react';
import {Link} from 'react-router-dom';
import service from '../Auth/auth-service';
import './Etiquette.css';

class DetailsEtiquette extends React.Component{
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

    componentDiMount(){
        this.getOneEtiquette()
    }

    //Function deleteEtiquette()
    deleteEtiquette = () => {
        const {params} = this.props.match
        service.delete(`/etiquette/${params.id}`)
        .then(() => {
            this.props.history.push(`/profile/${params.id}`); //Quand ça deletera, le user sera redirigé sur le profil 
        })
        .catch((err) => {
            console.log(`il y a une erreur dans la suppression de l'etiquette`, err);
        })
    }



    render(){
        return(
            <div id="section-details-etiquette">
                <div className="container-details-etiquette">
                    <div className="details-etiquette">
                        <div className="image">
                            <img src={this.state.etiquette.imageUrl} alt="image de l'étiquette"/>
                        </div>
                        <div className="details">
                            <h1>{this.state.etiquette.title}</h1>
                            <p><span>Lieu: {this.state.etiquette.lieu}</span></p>
                            <p><span>Date: {this.state.etiquette.date}</span></p>
                            <p><span>Commentaire: {this.state.etiquette.commentaire}</span></p>
                        </div>
                        <div className="differents-buttons">
                            <div className="button-modified">
                                <Link to={'/modify-etiquette'}>Modifier</Link>
                            </div>
                            <div className="button-delete">
                                <p className="deleteButton" onClick={() => this.deleteEtiquette()}>Supprimer</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default DetailsEtiquette;