import React from "react";
import { Link } from 'react-router-dom';

class Mainpage extends React.Component{

    constructor(props){
        super(props);
    }

    render(){
        return(
            <>
            <div className="main">

            <div className="main-nav">
                <div className="logo">ANIFLIX</div>
                <Link to="/loginUser" className="login-button">Sign In</Link>
            </div>


            <div className="aniflixpic"></div>
            
            <main className="center">
                <section className="main-info">
                    <h1>Unlimited movies, TV shows, and more!</h1>
                    <h2>Watch any Anime, anywhere, anytime.</h2>
                </section>
            </main>

            </div>
            </>
        )
    }

}

export default Mainpage;