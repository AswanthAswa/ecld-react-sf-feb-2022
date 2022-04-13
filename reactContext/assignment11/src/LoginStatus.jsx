import React from 'react';
import {AuthContext} from './context/AuthContextProvider';
import './LoginStatus.css'

export default function LoginStatus(){
return(
    <AuthContext.Consumer>
    {(context)=>{
        //console.log(context);
        if(context.isAuth){
            return(
                <div className="loginStatus">
                <h2>Login Status</h2>
                <h3>Loggedin user :{context.email}</h3>
                <h4>Token : {context.token}</h4>
                </div>
            )
        }
    }

    }
    
    </AuthContext.Consumer>
)
}
