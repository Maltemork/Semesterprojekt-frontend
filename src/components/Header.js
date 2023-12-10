import React from 'react';
import logo from "./logo/periamma-logo_200px.png";
import '../App.css';
import "../styling/Header.css";

function Header() {
    return (
        <div className="Header" key="header" onClick={() => window.location.href = "https://periamma.org"}>
           <img src={logo} alt="logo-200px" key="HeaderLogo"/>
        </div>
    )
}

export default Header;