import React from 'React';
import './Etiquette.css';

class ListEtiquette extends React.Component {
    state = {
        listOfEtiquettes = []
    }

    render(){
        if(this.state.listOfEtiquettes.length === 0 ) {
            return "Tu n'as pas encore d'étiquette"
        }
        return()
    }
}

export default ListEtiquette;