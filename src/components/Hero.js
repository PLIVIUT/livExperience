import React from "react";
import HeroPics from "../images/photo-grid.png"


function Hero() {
    return (
        <div className="main-hero-div">
            <img className="hero-img" src={HeroPics}></img>
            <div className="text-hero-div">
                <h1 className="hero-h1">The best experiences from home</h1>
                <p className="hero-p">Join unique interactive activities led by one-of-a-kind hosts—all without leaving home.</p>
            </div>
        </div>

    )
}

export default Hero