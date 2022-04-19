import React, { Component } from "react";
import {Link} from "react-router-dom";
import "./Navbar.css";


export default class Navbar extends Component {
  render() {
    return (
      <div id='navbar'>
        <div id="logo-div">
          <Link  to="/">
            <img src="logoZero.jpg" alt='zerodha' width='150px' ></img>
          </Link>
        </div>
        <div className="links">
          <Link to="/signup">
             <button className="linkBtn">Signup</button>
          </Link>
        </div>
        <div className="links">
          <Link  to="/about">
          <button className="linkBtn">About</button>
          </Link>
        </div>
        <div className="links">
          <Link  to="/products">
          <button className="linkBtn">Products</button>
          </Link>
        </div>

        <div className="links">
          <Link  to="/pricing">
          <button className="linkBtn">Pricing</button>
          </Link>
        </div>

        <div className="links">
        <Link  to="/support">
        <button className="linkBtn">Support</button>
        </Link>
      </div>
      <div class="menu">
      <div class="bar1"></div>
      <div class="bar2"></div>
      <div class="bar3"></div>
    </div>
      </div>
    );
  }
}
