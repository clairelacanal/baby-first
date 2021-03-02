import React from 'react';
import './Etiquette.css';
import {Link} from 'react-router-dom';
import service from '../Auth/auth-service';

class ListEtiquette extends React.Component {
    state = {
        listOfEtiquettes : []
    }

    //Function getAllEtiquettes()

    getAllEtiquettes = () => {
        console.log("mon user :" + JSON.stringify(this.props.user))
        service.get(`/etiquette/byAuthor/${this.props.user._id}`)
        .then(responseFromApi => {
            this.setState({listOfEtiquettes: responseFromApi.data})
            console.log("liste d'etiquettes:" + this.state.listOfEtiquettes);
        })
        .catch(err => {
            console.log(err, "Les etiquettes ne s'affichent pas")
        })

    }

    componentDidMount(){
        this.getAllEtiquettes();
    }

    render(){
        const annoncePhrase = "Tu n'as pas encore d'étiquette";
        if(this.state.listOfEtiquettes.length === 0 ) {
            return annoncePhrase;       
        }
        return(
            <div id="listEtiquettes">
                <div className="section-listEtiquettes">
                    <div className="container-listEtiquettes">
                            {this.state.listOfEtiquettes.map(etiquette => 
                                <div className="etiquettes">
                                <div key={etiquette.id}>
                                <h4>{etiquette.title}</h4>
                                <img src={etiquette.imageUrl} alt=""/>
                                <button><Link to={`/etiquette/${etiquette._id}`}>Voir plus</Link></button>
                                </div>
                                </div>
                            )}
                        </div>
                </div>
            </div>
        )
    }
}

export default ListEtiquette;