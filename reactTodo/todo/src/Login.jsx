import React, { Component } from 'react';
import Todo from './Todo';
import Signup from './Signup';
import './Login.css'



class Login extends Component {
    constructor(props) {
        super(props);
        this.state={
            email: '',
            password: '',
            isLoggedIn: false,
            isSignUp: true

        };
    }
     
    handleChange=(e)=>{
       const {name, value} = e.target;
       this.setState({
           [name]: value
       })
    }

    handleLogin=()=>{
        let signUpData = JSON.parse(localStorage.getItem('signUpArr'))
        let currentEmail=this.state.email;
        let currentPassword= this.state.password;
        //console.log(defaultEmail);
        //console.log(defaultPassword);
         console.log(signUpData)
         if(!this.state.isLoggedIn){
            alert('Please enter a valid email and password')
            this.setState({
                isLoggedIn:false
                
            })
        }
         signUpData.forEach(element=>{
            if(currentEmail ===element.email && currentPassword===element.password){

                this.setState({
                    isLoggedIn:true,
                    isSignUp: true,
                    email: '',
                password: ''
                })
            }
            

        }) 
       
        
    }

    handleLogout=()=>{
        this.setState({
            isLoggedIn:false,
            isSignUp:true
        })
    }
    goToSignup=()=>{
        this.setState({
            isLoggedIn:false,
            isSignUp:false
        })
    }

    render() {
        if( this.state.isSignUp===false ) {
            return( <div >
             <Signup/>
            </div>) }

        return (
        <div className="login-container">
            {
                

               this.state.isLoggedIn ?(
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
            <p id='or'>or</p>
            <button id='goToSignup' onClick={this.goToSignup}>Create New Account</button>
            </div>
            </div>
        )
                
            }
            
        </div>
       

        )
    }
}

export default Login;