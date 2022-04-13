import React, { Component } from "react";
import "./Form.css";
import { ThemeContext } from "./context/ThemeContextProvider";

export default class Form extends Component {
  render() {
    console.log(this.context);

    return (
        <div className={this.context.button?'True' : 'False'}>
      <div id="form-container">
        
          <h2>Form</h2>
          <form>
            <label className="form-label">Name: </label>
            <input id='name' type="text"></input>
            <br></br>
            <label className="form-label">Email: </label>
            <input id='email' type="email"></input>
            <br></br>
            <label className="form-label">Gender: </label>
            
            <label for="male"> Male</label>
            <input type="radio"></input>
            
            <label for="female"> Female</label>
            <input type="radio"></input>
            
            <label for="others"> others</label>
            <input type="radio"></input>
            <br></br>
            <label className="form-label">Qualification: </label>
            
            <select>
              <option>choose</option>
              <option>10th</option>
              <option>+2</option>
              <option>UG</option>
              <option>PG</option>
            </select>
            <br></br>
            <label className="form-label">Skills: </label>
            
            <label>HTML</label>
            <input type="checkbox"></input>
            <label>CSS</label>
            <input type="checkbox"></input>
            <label>Javascript</label>
            <input type="checkbox"></input>
            <br></br>
            <input id='submit' type="submit" value="Submit"></input>
          </form>
        </div>
      </div>
    );
  }
}

Form.contextType = ThemeContext;
