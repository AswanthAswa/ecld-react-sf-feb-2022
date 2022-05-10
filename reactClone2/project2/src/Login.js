import React, { useState } from 'react';
import "./Login.css";
import { Link, useNavigate} from "react-router-dom";
import { auth } from "./firebase";

function Login() {

    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const login = (event) => {
        event.preventDefault(); 
        //login logic
        auth
            .signInWithEmailAndPassword(email,password)
            .then((auth) => {
                navigate("/");
            })
            .catch((e) => alert(e.message));
    };

    const register = (event) => {
        event.preventDefault(); 
        //do the register logic

        auth
            .createUserWithEmailAndPassword(email, password)
            .then (auth => {
                //created a user and logged in redirect to homepage...
                navigate("/");
            })
            .catch((e) => alert(e.message));
    };

    return (
        <div className="login">
            <Link to="/">
                <img 
                    className="login__logo"
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png"
                    alt=""
                />
            </Link>
            <div className="login__container">
                <h1>Sign in</h1>
                <form>
                    <h5>E-mail</h5>
                    <input value={email} onChange={event => setEmail(event.target.value)} type="email"/>
                    <h5>Password</h5>
                    <input value={password} onChange={event => setPassword(event.target.value)} type="password"/>
                    <button onClick={login} type="submit" className="login__signInButton">sign in</button>
                </form>

                <p>
                by signing in you agree to amazon condition of use and sale.Please see our privacy notice, our cookies notice and our interest based ad notice.
                </p>
                <button onClick={register} className="login__registerButton">Create your Amazon account</button>
            </div>
        </div>
    );
}

export default Login;