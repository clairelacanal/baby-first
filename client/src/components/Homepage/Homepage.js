import React from 'react';
import './Homepage.css';


class Home extends React.Component {
    render(){
        return(
            <div id="homepage">
                <div className="image-homepage">
                    <p>image</p>
                </div>
                <div className="signup-homepage">
                    <p>signup</p>
                </div>
            </div>
        )
    }
}

export default Home;