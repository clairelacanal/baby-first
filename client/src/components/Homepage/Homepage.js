import React from 'react';
import './Homepage.css';



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
                </div>
            </div>
        )
    }
}

export default Home;