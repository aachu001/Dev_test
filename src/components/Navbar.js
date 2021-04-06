import React, { Component } from 'react';
import '../css/mystyle.css';
import logo from '../assets/abc_logo.svg';
import { NavLink } from 'react-router-dom';

class Navbar extends Component{
    render(){
        return(
            <div className="navbar">
                <div className="nav-content col pad-top">                  
                        <img src={logo} alt="ABC" />
                        <NavLink className="menu-item" to="/industries">Industries</NavLink>
                        <NavLink className="menu-item" to="/services">Services</NavLink>
                        <NavLink className="menu-item" to="/about">About Us</NavLink>                   
                </div>
                <div className="contact-btn">Contact Us</div>
            </div>
        );
    }
}

export default Navbar;