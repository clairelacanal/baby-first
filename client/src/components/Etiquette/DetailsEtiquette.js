import React from 'react';
import {Link} from 'react-router-dom';
import { Redirect } from 'react-router-dom';
import {destroyImageCloudinary} from '../Auth/auth-service';
import service from '../Auth/auth-service';
import defaultImg from '../images/game.jpeg';
import './Etiquette.css';



class DetailsEtiquette extends React.Component{
    state = {
        etiquette : {},
        formattedDate : ""
    }

    //Function get0neEtiquette

    getOneEtiquette = () => {
        const {params} = this.props.match
        service.get(`/etiquette/${params.id}`)
        .then(responseFromApi => {
            const theEtiquette = responseFromApi.data;
            this.setState({etiquette: theEtiquette});
            let date = new Date(this.state.etiquette.date)
            let dateAsString = date.toLocaleString('fr-FR',{
                    weekday: 'long',
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric',
                    hour: 'numeric',
                    minute: 'numeric'
                });
            this.setState({formattedDate: dateAsString});
            })
        .catch((err) => {
            console.log('erreur pour charger', err)
        })
    }


    //Function componentDiMount()

    componentDidMount(){
        this.getOneEtiquette();
    }

    //Function deleteEtiquette()
    deleteEtiquette = () => {
        const {params} = this.props.match
        service.delete(`/etiquette/${params.id}`)
        .then(() => {
            this.props.history.push(`/login`); //Quand ça deletera, le user sera redirigé sur le profil 
        })
        .catch((err) => {
            console.log(`il y a une erreur dans la suppression de l'etiquette`, err);
        })
        console.log("client image detruite:" + this.state.etiquette.imageUrl)

        destroyImageCloudinary(this.state.etiquette.imageUrl)
        .then(response => console.log('Ok, image supprimée de Cloudinary'))
        .catch(err => console.log(err));
    }


    render(){

        return(
            <div id="section-details-etiquette">
                <div className="container-details-etiquette">
                    <div className="detail-etiquette-page">
                        <div className="image">
                            <img src={this.state.etiquette.imageUrl || defaultImg} className="image-url" alt="image de l'étiquette"/>
                        </div>
                        <div className="details">
                            <h1>{this.state.etiquette.title}</h1>
                            <p><span>Lieu : </span>{this.state.etiquette.lieu}</p>
                            <p><span>Date : </span>{this.state.formattedDate}</p>
                            <p><span>Commentaire : </span>{this.state.etiquette.commentaire}</p>
                            
                            <div className="differents-buttons">
                                <div className="button-modified">
                                    <button><Link to={`/modify-etiquette/${this.state.etiquette._id}`}>Modifier</Link></button>
                                </div>
                                <div className="button-delete">
                                    <button className="deleted" onClick={() => this.deleteEtiquette()}>Supprimer</button> 
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default DetailsEtiquette;