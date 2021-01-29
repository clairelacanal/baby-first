import React from 'React';
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
        preventDefault(event);
        const title = this.state.title,
        const lieu = this.state.lieu,
        const date = this.state.date,
        const imageUrl = this.state.imageUrl,
        const commentaire = this.state.commentaire


    }

    render(){
        return(

        )
    }
}

export default AddEtiquette;