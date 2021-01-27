import React from 'react';
import service from '../Auth/auth-service';
import {Redirect} from 'react-router-dom';
import './Profile.css';

class Profile extends React.Component {
    state = {
        user : {}
    }

    render(){
    
    getUserProfile = () => {
        const params = this.props.match.params;
        .then(responseFromApi => {
            const theUser = params.id;
            this.setState({user: theUser});
        })
        .catch(err => {
            console.log(`Le user profile n'est pas le bon`);
        })
    }
        return(

        )
    }


}

export default Profile;