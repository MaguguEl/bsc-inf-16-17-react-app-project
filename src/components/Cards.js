import React from 'react'
import './Cards.css'


const Cards = props => {
    return (
        <div className="cards">
            <div className="card">
                <img src="/asset/img/6.jpg" className="card_img" />
                    <div className="card_header">
                    <h3>Photography</h3>
                    </div>
                    <div class="card_content">
                <p>
                    The first thing that comes into my mind when I go home is a Photography.
                    Yes, photography. I like doing photography when I go outdoor at home. You 
                    know why? Because it where I learn the aspect of life outside home. The focus
                     and composure  I get from capturing good moments and some weird moments gives me thrill...
                </p>
            </div>
            <div className="card_bar">
            <a href="/" class="card_article">Read More</a>
            </div>
            </div>
            <div className="card">
                <img src="/asset/img/3.jpg" className="card_img" />
                    <div className="card_header">
                    <h3>Dig</h3>
                    </div>
                    <div class="card_content">
                <p>
                FIND IT. Somewhere in your soul, the last bit of strength 
                that will take you on home.Just find it. Somewhere in your heart, 
                to put the past in the past and go back to the start. Selfish. Prideful.
                Come get an eyeful. An ugly dark stain on a once wonderful resumé. Leisurely 
                strolls down the road of perdition. Leaves a man wishing for his old position...
                </p>
            </div>
            <div className="card_bar">
            <a href="/" class="card_article">Read More</a>
            </div>
            </div>
            <div className="card">
                <img src="/asset/img/4.jpg" className="card_img" />
                    <div className="card_header">
                    <h3>Childhood Memories</h3>
                    </div>
                    <div class="card_content">
                <p>
                    I remember when I was old enough to ask what I needed for 
                    the period of my juvenile. When I get tired of wearing the 
                    same shoes I would intentionally wear my flip-flops to church 
                    under impression that my dad would notice and say, “Oh, it appears 
                    that my child doesn’t have some nice shoes. I got to buy him new ones.” 
                    But he didn't...
                </p>
            </div>
            <div className="card_bar">
            <a href="/" class="card_article">Read More</a>
            </div>
            </div>
            <div className="card">
                <img src="/asset/img/5.jpg" className="card_img" />
                    <div className="card_header">
                    <h3>Smile</h3>
                    </div>
                    <div class="card_content">
                <p>
                    "Always makes sure you show your smile to the world. Even if it  seems to
                    start crushing down and gives you scars, remember to smile 
                    nevertheless."
                    These words keep ringing louder in my thoughts.
                    who said these words? Oh, everyone said them. Yes! Everyone is going through 
                    everything joyful or painful has at least said them. Oh Yout think I'm lying? 
                    Okay. Maybe you just don't realize it yet...
                </p>
            </div>
            <div className="card_bar">
            <a href="/" class="card_article">Read More</a>
            </div>
            </div>
        </div>
        
    );
            
}

export default Cards;

