import React from 'react';
import './Signup.css'

function Login() {
    return (
        <div id='signup-container'>
        <div >
        <img src='signup1.png' id='signupImg' alt='signupImg' ></img>
        <div id='signup-box'>
        <h1 id='hSignup'>Signup now</h1>
        <p id='pTrack'>Or track your existing application.</p>
        <label for='input' id='inputLabel'>Mobile number</label>
        <input type='text' id='input'  value='+91  '></input>
        <p id='pOtp'>You will receive an OTP on your number</p><br></br>
        <button id='continueBtn' >Continue</button><br></br>
        <p id='pBlue'>Want to open an NRI account?</p>
        
        </div>
        </div>
       <p id= 'pBottom'> By submitting your contact details, you authorise Zerodha to call or text you for the purpose of account opening even though you may be registered on DND.</p>
        </div>
    )
}

export default Login;