import React, { Component } from "react";
import {Link} from "react-router-dom";
import "./Navbar.css";


export default class Navbar extends Component {
  render() {
    return (
      <ul>
        <li>
          <Link className="a" to="/">
            Home
          </Link>
        </li>
        <li>
          <Link className="a" to="/contact">
            Contact
          </Link>
        </li>
        <li>
          <Link className="a" to="/about">
            About
          </Link>
        </li>
        <li>
          <Link className="a" to="/services">
            Services
          </Link>
        </li>

        <li style={{ float: "right" }}>
          <Link className="active a" to="/login">
            Login
          </Link>
        </li>
      </ul>
    );
  }
}