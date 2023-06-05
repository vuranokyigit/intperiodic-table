import React from "react";
import "./navBar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faUser } from "@fortawesome/free-solid-svg-icons";
import { faGamepad } from "@fortawesome/free-solid-svg-icons";



export const NavBar = () => {
    return (
        <nav id="navbar">
        <div class="container">
            <div class="row">
                <div id="navbar_left" class="col-6">
                    <button className="navbar-left-button">
                    <FontAwesomeIcon icon={faUser} spin size="lg" style={{color: "#e6e9ef",}} />
                    </button>
                </div>
                <div id="navbar_right" class="col-6">
                <button className="navbar-right-button">
                <FontAwesomeIcon icon={faGamepad} spin spinReverse size="lg" style={{color: "#e6e9ef",}} />
                </button>

                </div>
            </div>
        </div>
    </nav>
    )
}







export default NavBar;