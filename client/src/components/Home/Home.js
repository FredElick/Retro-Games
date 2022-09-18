import React from 'react';
import './Hero.css';

const Hero = () => {

    return (
        <section className="hero-sec">
        <div className="selections-container">

            {/* <!-- Console selection --> */}
            <div className="selection-div">
                <div className="title-bar">
                    consoles image and info
                </div>
                <div className="featured-thumbnail" >

                </div>
                <div className="featured-info">
                    <button>link to consoles page</button>
                </div>

            </div>

            {/* <!-- Games selection --> */}
            <div className="selection-div">
                <div className="title-bar">
                    games image and info
                </div>
                <div className="featured-thumbnail" >

                </div>
                <div className="featured-info">
                    <button>link to games page</button>
                </div>
            </div>
        </div>
    </section>
    );
};

export default Hero;