import React from 'React';
import './Etiquette.css';

class ListEtiquette extends React.Component {
    state = {
        listOfEtiquettes = []
    }

    render(){
        const annoncePhrase = "Tu n'as pas encore d'étiquette";
        if(this.state.listOfEtiquettes.length === 0 ) {
            return annoncePhrase
        }
        return(
            <div className="listEtiquettes">
                
            </div>
        )
    }
}

export default ListEtiquette;