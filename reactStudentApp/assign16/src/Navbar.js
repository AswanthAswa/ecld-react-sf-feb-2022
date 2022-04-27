import React from "react";
import { NavLink } from "react-router-dom";

export const Navbar = () => {
  return (
    <nav className="nav-bar">
      <div className="nav-img-container">
        <img className ="logoImg" src='skulLogo.jpg' alt=" "></img>
      </div>
      <div className="nav-container">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/contact-us">Contact</NavLink>
        <NavLink to="/about">About</NavLink>
        <NavLink to="/students">Students</NavLink>
        <NavLink to="/login">Login</NavLink>
      </div>
    </nav>
  );
};
