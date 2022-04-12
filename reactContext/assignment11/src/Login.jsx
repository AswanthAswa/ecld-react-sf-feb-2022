import React, { Component } from 'react';
//import LoginStatus from './LoginStatus';
import './Login.css';
//import axios from 'axios';
import {AuthContext} from './context/AuthContextProvider';

class Login extends Component {
   
    render() {
          //console.log(this.context);
          const { isAuth , email, password,token ,handleChange,handleLogin,handleLogout, toggleAuth} =this.context;

        return (
            <div>
            <div id='header-div'>
            <button id='logout' onClick={toggleAuth}>{isAuth ?'Logout' : 'Login'}</button>
            </div>
            <div className="login-container">
            {
              isAuth? (
                    <div>
                    <i><strong>{email} </strong></i><span id='success'>Successfully Logged in</span>
                    </div>
                ):(
            <div id='login-body'>
            <h1 id='login-heading'>Context API</h1>
            <div id='login-form'>
            <div id='login-icon'>
            <img src="loginIcon.jpg" width="120" height="120" alt='loginIcon'/>
            </div>
            <input type="text" id="email" placeholder="email" name="email" value={email} onChange={handleChange}></input>
            <input type="password" id="password" placeholder="password" name="password" value={password} onChange={handleChange}></input>
            <button id="login" onClick={handleLogin}>Login</button>
            </div>
            </div>
                )
            }
            
        </div>

        </div>


        )
    }
}

Login.contextType= AuthContext;

export default Login;