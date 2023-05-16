import React from "react";
import logo from "./images/nav-logo.png"

function Navbar() {
    return (
        <nav className="nav-exp">
            <div className="nav-logo-text">
                <img className="nav-logo" src={logo}></img>
                <p className="nav-text">livExperience</p>
            </div>
        </nav>
    )
}

export default Navbar