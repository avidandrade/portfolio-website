import React, {useState} from "react";

function Header() {
    return (
        <div className = 'header'>
            <h1>Avid Andrade Trejo</h1>

            <nav className = 'navbar'>

                <a href="#about"> About Me</a>
                <a href="#Projects"> Projects</a>
                <a href="#Socials"> Contact Me</a>
                
            </nav>
        </div>
    );
}

export default Header