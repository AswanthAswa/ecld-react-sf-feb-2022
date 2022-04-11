import React, { Component } from 'react';
import GitHubApp from './GitHubApp';
import './Login.css'
import axios from 'axios'

class Login extends Component {
    constructor(props) {
        super(props);
        this.state={
            email: '',
            password: '',
            token: ''

        };
    }
     
    handleChange=(e)=>{
       const {name, value} = e.target;
       this.setState({
           [name]: value
       })
    }

    handleLogin=()=>{
      axios.post('https://reqres.in/api/login',{
          email: this.state.email,
          password: this.state.password
      })
      .then(res=>{
          console.log(res,'response');
          this.setState({
              token: res.data.token
          })
      })
      .catch(err=>console.log(err))
    }

    handleLogout=()=>{
        this.setState({
            token: ''
        })
    }

    render() {
        return (
        <div className="login-container">
            {
                this.state.token ? (
                    <div>
                    <button id='logout' onClick={this.handleLogout}>Logout</button>
                    <div className="githubApp">
                     <GitHubApp/>
                    </div>
                    
                    </div>
                ):(
            <div id='login-body'>
            <h1 id='login-heading'>GitHub App</h1>
            <div id='login-form'>
            <div id='login-icon'>
            <img src="loginIcon.jpg" width="120" height="120" alt='loginIcon'/>
            </div>
            <input type="text" id="email" placeholder="email" name="email" onChange={this.handleChange}></input>
            <input type="password" id="password" placeholder="password" name="password" onChange={this.handleChange}></input>
            <button id="login" onClick={this.handleLogin}>Login</button>
            </div>
            </div>
                )
            }
            
        </div>

        )
    }
}

export default Login;