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
        service.get(`/auth/profile/${params.id}`)
        .then(responseFromApi => {
            const theUser = responseFromApi.data;
            this.setState({user: theUser});
        })
        .catch((err) => {
            console.log(`Le user profile n'est pas le bon`, err);
        })
    }

    componentDidMount(){
        this.getUserProfile();
    }

        return(
            <div id="profile">
                <div className="section-profile">
                    
                </div>
            </div>
        )
    }


}

export default Profile;