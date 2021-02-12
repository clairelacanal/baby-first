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
            <div id="listEtiquettes">
                <div className="section-listEtiquettes">
                    <div className="container-listEtiquettes">

                    </div>
                </div>
            </div>
        )
    }
}

export default ListEtiquette;