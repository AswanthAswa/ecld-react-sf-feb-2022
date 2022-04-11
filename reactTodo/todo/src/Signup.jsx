import React, { Component } from 'react';
import Login from './Login';
import './Signup.css';


class Signup extends Component {
    constructor(props) {
        super(props);
        this.state={
            email: '',
            password: '',
            fullName: '',
            age: '',
            address: '',
            isSignedUp: false

        };
    }
     
    handleChange=(e)=>{
       const {name, value} = e.target;
       this.setState({
           [name]: value
       })

    }

    handleSignUp=(e)=>{
        e.preventDefault();
        let signUpArr=[];
        let signUpObj= this.state;
        signUpArr.push(signUpObj);
        localStorage.setItem('signUpArr',JSON.stringify(signUpArr))
        //console.log(localStorage.getItem('signUpArr'))
        alert('Account Created Successfully.! Now Login')
        
            this.setState({
                email: '',
                password: '',
                fullName: '',
                age: '',
                address: '',
                isSignedUp: true
                
            })
        }

    goToLogin=()=>{
        this.setState({
            isSignedUp:true
        })
    }

    render() {

        return (
        <div className="Signup-container">
            {
                this.state.isSignedUp ? (
                
                    <div className="">
                     <Login/>
                    </div>
                    
                ):(
            <div id='signup-body'>
            <h1 id='signup-heading'>Sign Up</h1>
            <div id='signup-form'>
            <form id='form'>
            <input type="text" id='fullName' placeholder='Full Name' name='fullName' onChange={this.handleChange} required/><br></br>
            <input type="number" id='age' placeholder='Age' name='age'onChange={this.handleChange} required/><br></br>
            <textarea type="text" id='address' placeholder='Address' name='address' onChange={this.handleChange} required/><br></br>
            <label id='department'>Department:</label>
            <select id='select-department' required>
                <option>choose</option>
                <option>IT</option>
                <option>Finance</option>
                <option>Marketing</option>
                <option>HR</option>
                <option>Student</option>
                <option>Others</option>
            </select><br></br>
            <label className='gender'>Gender:</label>
        
        <label for="male"> Male</label>
        <input type="radio"></input>
        <label for="female">Female</label>
        <input type="radio"></input>
        <label for="others">others</label>
        <input type="radio"></input><br></br>
            <input type="text" id="Email" placeholder="Email" name="email" onChange={this.handleChange} required></input><br></br>
            <input type="password" id="Password" placeholder="Password" name="password" onChange={this.handleChange} required></input><br></br>
            <input type="password" id="cnfPassword" placeholder="confirm password" name="cnfPassword" onChange={this.handleChange} required></input>
        </form>
        <p >By creating an account you agree to our <span id='terms'>Terms & Privacy</span></p>
            <button id="Sign-Up" onClick={this.handleSignUp}>Sign Up</button>
            <p>Already have an account? <button id='signupLogin' onClick={this.goToLogin}>Login</button></p>
            </div>
            </div>
                )
            }
            
        </div>

        )
    }
}

export default Signup;