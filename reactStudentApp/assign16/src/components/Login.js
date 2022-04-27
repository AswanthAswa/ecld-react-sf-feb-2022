import { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { useAuth } from "../components/Auth";
import './Login.css';

export const Login = () => {
    const [ user, setUser] = useState('');
    const auth = useAuth();
    const navigate = useNavigate();
    const location = useLocation();

    const redirect = location.state?.path || '/Students'

    const handleLogin = () =>{
       auth.login(user);
       navigate(redirect, { replace: true});
    }
 
  return (
      
      
    <div className="login-container">
     
    <div id='login-body'>
    <h1 id='login-heading'>Login</h1>
    <div id='login-form'>
    <input type="email" id="username" placeholder="username"  onChange={(e) => setUser(e.target.value)} required></input>
    <input type="password" id="password" placeholder="password" onChange={(e) => setUser(e.target.value)} required></input>
    <button id="login" onClick={handleLogin}>Login</button>
    </div>
    </div>
    </div>
  
  
  );
};