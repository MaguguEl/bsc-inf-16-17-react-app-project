import React from 'react';
import './Hero.css';

const Hero = props =>  {
    return(
        <div className="hero_container">
            <img src="asset/img/8.jpg" />
                <h1>
                    WELCOME!
                </h1>
                <h2>ARE YOU READY?!</h2>
                <p>Alright, guys! Before we get started I just wanted to say that I am glad you have come to this site, 
                    where you can read my blogs and look at my photo gallery in my portfolio. I promise you you have come to the right 
                    place. Enjoy Your adventure. whoop-de-doo!</p>

                    <a href="/">GET STARTED</a>
                
        </div>
    )
}

export default Hero;