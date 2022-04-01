import React, { Component } from 'react';
import Todo from './Todo';
import './Login.css'

const defaultEmail='aswanthmohan97@gmail.com';
const defaultPassword= 'admin';

class Login extends Component {
    constructor(props) {
        super(props);
        this.state={
            email: '',
            password: '',
            isLoggedIn: false

        };
    }
     
    handleChange=(e)=>{
       const {name, value} = e.target;
       this.setState({
           [name]: value
       })
    }

    handleLogin=()=>{
        if(this.state.email===defaultEmail && this.state.password===defaultPassword){
            this.setState({
                isLoggedIn:true,
                email: '',
            password: ''
            })
        }else{
             alert('please enter a valid email and password')
        }
    }

    handleLogout=()=>{
        this.setState({
            isLoggedIn:false
        })
    }

    render() {

        return (
        <div className="login-container">
            {
                this.state.isLoggedIn ? (
                    <div>
                    <div className="todo">
                     <Todo/>
                    </div>
                    <button id='logout' onClick={this.handleLogout}>Logout</button>
                    </div>
                ):(
            <div id='login-body'>
            <h1 id='login-heading'>ToDo</h1>
            <div id='login-form'>
            <div id='login-icon'>
            <img src="loginImg.png" width="99" height="99" alt='loginIcon'/>
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