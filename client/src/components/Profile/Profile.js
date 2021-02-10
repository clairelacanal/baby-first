import React from 'react';
import service from '../Auth/auth-service';
import {Redirect} from 'react-router-dom';
import './Profile.css';

class Profile extends React.Component {
    state = {
        user : {}
    }

    getUserProfile = () => {
        const params = this.props.match.params;
        service.get(`/auth/profile/${params.id}`)
        .then(responseFromApi => {
            const theUser = responseFromApi.data;
            this.setState({user: theUser});
        })
        .catch((err) => {
            console.log(`Le user profile n'est pas le bon`, err);
        })
    }

    //Function componentDiMount()

    componentDiMount(){
        this.getUserProfile()
    }

    render(){
        return(
            <div id="profile">
                <div className="section-profile">
                    <div className="profile-presentation">
                        <h1>Bienvenue {this.state.user.username}</h1>
                        <h2>Ajoutez les premières fois de votre enfant</h2>
                        <button className="profile-add">Ajouter une nouvelle étiquette</button>
                    </div>
                </div>
            </div>
        )
    }


}

export default Profile;