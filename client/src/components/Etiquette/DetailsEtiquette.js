import React from 'React';
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

    componentDiMount(){
        this.getOneEtiquette()
    }

    render(){
        return()
    }
}

export default DetailsEtiquette;