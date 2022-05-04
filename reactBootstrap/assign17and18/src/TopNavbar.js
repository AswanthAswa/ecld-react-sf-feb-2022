import React from "react";
import { NavLink } from "react-router-dom";
import { Navbar, Nav, Container} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';


export const TopNavbar = () => {
  return (
    <div className="navbar-container">
    <Navbar bg="light" expand="lg">
    <Container>
       <div className="nav-img-container">
       <img className ="logoImg" src='skulLogo.jpg' alt=" "></img>
      </div>
      
      <Navbar.Toggle id='menu' aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="me-auto">
          <NavLink to="/">Home</NavLink>
          <NavLink to="/contact-us">Contact</NavLink>
          <NavLink to="/about">About</NavLink>
          <NavLink to="/students">Students</NavLink>
          <NavLink to="/login">Login</NavLink>
        </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>
  </div>

  );
};
