import React, { Component } from 'react';
import axios from 'axios';

export const AuthContext=React.createContext();


class AuthContextProvider extends Component {
    constructor(props) {
        super(props);
        this.state = {
          email:'',
          password: '',
          token: '',
          isAuth: false,

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
          //console.log(res,'response');
          this.setState({
              token: res.data.token,
              isAuth: true
          })
      })
      .catch(err=>{
          //console.log(err)
          alert('enter a valid email and password', err)
          this.setState({
              password:'',
              email: ''
          });
        });
    }

    handleLogout=()=>{
        this.setState({
            token: '',
            isAuth: false
        })
    }

    toggleAuth=()=>{
        this.setState({
            isAuth: !this.state.isAuth
        })
    }

    render() {
        const { isAuth, email, password,token } = this.state;
        const {handleChange,handleLogin,handleLogout,toggleAuth } = this;
        
        return (
            <AuthContext.Provider value={{isAuth ,email, password,token ,handleChange,handleLogin,handleLogout, toggleAuth}}>
             {this.props.children}
            </AuthContext.Provider>
        )
    }
}
export default AuthContextProvider;