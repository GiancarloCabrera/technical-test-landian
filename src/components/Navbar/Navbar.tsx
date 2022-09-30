import React from 'react';
import "./Navbar.css";
// import  Marvel_Logo from "../../assets/images/Marvel_Logo.svg.png";
// IMAGEN PENDIENTE POR RESOLVER
// import logo from '../../assets/images/marvel-logo.png';
export const Navbar = () => {
  return (
    <div>
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark main-navbar">
            {/* <img src='../../assets/images/Marvel_Logo.svg.png'/> */}
            {/* <img src={logo}/> */}      
            <div className="container-fluid">
                <a className='link' href=''>“I still believe in heroes.”</a>  
                <a className="navbar-brand" href="#">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b9/Marvel_Logo.svg/368px-Marvel_Logo.svg.png" alt="Logo" width="30" height="24" className="d-inline-block align-text-top logo-img"/>
                    App
                </a>
                <a className="nav-link link" href="https://developer.marvel.com/">About us</a>
            </div>
        </nav>
    </div>
  )
}
