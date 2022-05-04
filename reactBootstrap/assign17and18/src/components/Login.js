import { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { useAuth } from "../components/Auth";
import './Login.css';
import {Form} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';


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
    <Form>
  <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label>Username</Form.Label>
    <Form.Control type="email" id='username' placeholder="Enter Username" onChange={(e) => setUser(e.target.value)} required/>
  </Form.Group>

  <Form.Group className="mb-3" controlId="formBasicPassword">
    <Form.Label>Password</Form.Label>
    <Form.Control type="password" id='password' placeholder="Password" onChange={(e) => setUser(e.target.value)} required/>
  </Form.Group>
  
  <button id="login" onClick={handleLogin}>Login</button>
</Form>
    </div>
    </div>
  
  
  );
};