import React from 'React';
import service, { upload } from '../Auth/auth-service';
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

        service.post('/etiquette', {title, lieu, date, imageUrl, commentaire})
        .then(() => {
            this.setState({title:"", lieu:"", date: new Date(), imageUrl:"", redirect:true});
        })
        .catch(err => console.log(err));
    }

    //Function handleChange()
    handleChange = (event) => {
        const {name, value} = event.target;
        this.setState({[name]:value});
    }

    //Function handleUpload()
    handleUpload = (event) => {
        let formData = new FormData();
        formData.append('imageUrl', event.target.files[0]);

        upload(formData)
            .then(response => this.setState({imageUrl: response.secure_url}))
            .catch(err => console.log(`l'image ne se charge pas`, err))
    }

    render(){
        return(

        )
    }
}

export default AddEtiquette;