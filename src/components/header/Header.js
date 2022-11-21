import React from "react";
import '../header/css/header.css'


export const Header = () => {
    return (
        <div id="header" style={{
            boxShadow: '0px 0px 154px 54px  #03494E',
            position:'relative',
            zIndex: '3',
            background: '#03494E'
            }}>
            <div className="container">
                <div className="header">
                <h1 className="logo">LOGO</h1>
                <nav className="menu">
                    <a href="#">Home</a>
                    <a href="#">About Us</a>
                    <a href="#">Services</a>
                    <a href="#">Contact</a>
                </nav>
                </div>
            </div>
        </div>
    )
}