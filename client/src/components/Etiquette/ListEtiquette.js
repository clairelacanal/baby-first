import React from 'React';
import './Etiquette.css';
import service from '../Auth/auth-service';

class ListEtiquette extends React.Component {
    state = {
        listOfEtiquettes : []
    }

    //Function getAllEtiquettes()

    getAllEtiquettes = () => {
        service.get('/etiquette')
        .then(responseFromApi => {
            this.setState({listOfEtiquettes: responseFromApi.data})
        })
        .catch(err => {
            console.log(err, "Les etiquettes ne s'affichent pas")
        })

    }

    componentDiMount(){
        this.getAllEtiquettes();
    }

    render(){
        const annoncePhrase = "Tu n'as pas encore d'étiquette";
        if(this.state.listOfEtiquettes.length === 0 ) {
            return annoncePhrase
        }

        return(
            <div id="listEtiquettes">
                <div className="section-listEtiquettes">
                    <div className="container-listEtiquettes">
                            {this.state.listOfEtiquettes.map(etiquette => 
                                <div key={etiquette.id}>
                                <h4>{etiquette.title}</h4>
                                <img src={etiquette.imageUrl} alt=""/>
                                <Link to={`/etiquette/${etiquette._id}`}>Voir plus</Link>
                                </div>
                            )}
                    </div>
                </div>
            </div>
        )
    }
}

export default ListEtiquette;