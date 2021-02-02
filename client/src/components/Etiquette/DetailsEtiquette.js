import React from 'React';
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
        return()
    }
}

export default DetailsEtiquette;