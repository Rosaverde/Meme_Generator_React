import React from "react";
import logo from "../images/TrollFace.png"

export default function Header() {
    return (
        <div className="header-container">
            <img className="header-logo" src={logo} alt="" />
            <h2 className="header-title">Meme Generator</h2>
            <p>React Course - Project 3</p>
        </div>
    )
}