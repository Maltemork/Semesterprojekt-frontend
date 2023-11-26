import React from 'react';
import logo from "./logo/periamma-logo_200px.png";
import '../App.css';
import "../styling/Header.css";

function Header() {
    return (
        <div className="Header">
           <img src={logo} alt="logo-200px"/>
        </div>
    )
}

export default Header;