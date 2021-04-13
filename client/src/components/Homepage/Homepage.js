import React from 'react';
import './Homepage.css';
import { Link} from 'react-router-dom';




class Home extends React.Component {

    render(){
        
        return(
            <div id="homepage">
                <div className="image-homepage">
                    
                </div>
                <div className="signup-homepage">
                    <div className="presentation-homepage">
                        <h1>Les premières fois de mon bébé</h1>
                        <p>Un album en ligne et personnalisé des premières fois de votre bébé</p>
                    </div>
                    <div className="signup-access">
                            <Link to={"/signup"}><button className="button-signup-access">Créez votre compte</button></Link>
                    </div>
                </div>
            </div>
        )
    }
}

export default Home;