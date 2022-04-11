import React, { Component }from "react";
import './GitHubApp.css';
import axios from "axios";
//import { v4 as uuidv4 } from 'uuid';

class GitHubApp extends Component{
    constructor(props){
        super(props);
        this.state = {
            name: '',
            data: [],
            details: [],
        isVisible: false,
        
        };
 }

handleChange=(e)=>{
    this.setState({
        name: e.target.value

    });
}

handleSearch=()=>{
    axios.get('https://api.github.com/search/users?',{params: {q:this.state.name}})
     .then((res)=>{
        console.log(res.data.items);
         this.setState({
             data: res.data.items
         })
     })
     .catch((err)=>{
         console.log(err);
     })
    //console.log(this.state.name);
}
componentDidMount(){
    axios.get('https://api.github.com/search/users?q=')
     .then((res)=>{
         //console.log(res.data.items);
         this.setState({
             data: res.data.items
         })
     })
     .catch((err)=>{
         console.log(err);
     })
}

handleDetails=(login)=>{
   axios.get('https://api.github.com/users/'+login)
   .then ((res)=>{
    //console.log(res.data);
       this.setState({
        details:res.data,
        isVisible: true
        
        
    })
   })
   .catch((err)=>{
    console.log(err);
})
   
 
    }

    render(){
        //console.log('data', this.state.data)
        return (
            <div id="container">
            <div id='input-container'>
            <label id='searchLabel'for="searchName">Search Name: </label>
            <input type="text" id='searchName' placeholder="enter a name" onChange={this.handleChange} ></input>
            <button id="searchBtn" onClick={this.handleSearch}>Search</button>
            </div>
         {
             (this.state.isVisible)?
             (<div id="deatailsTable">
                <table>
                <tr>
                <th>Created Date</th>
                <th>Followers</th>
                <th>Public Repos</th>
                </tr>
                
                 <tr id='trDetails'>
                   <td><p>{this.state.details.created_at}</p></td>
                   <td><p>{this.state.details.followers}</p></td>
                   <td><p>{this.state.details.public_repos}</p></td>
                 </tr>
                    
                
                </table>    
            </div>):
            (<div></div>)
             
        }
               
            <div id='mainTable'>
            <table>
            <tr id='trHead'>
                  <th>Username</th>
                  <th>Profile Picture</th>
                  <th>Details</th>
                </tr>
             {this.state.data && this.state.data.map((item)=>{
                
             return (
                   
             <tr id='trBody'>
               <td><p id='username'>{item.login}</p></td>
               <td><img id='proPic' width='100' height='100' src={item.avatar_url} alt='img'></img></td>
               <td><button id='detailsBtn' onClick={()=>this.handleDetails(item.login)}>More Details</button></td>
             </tr>
                )
             })}
            </table> 
            </div>
                
            </div>
        )
    }

}
export default GitHubApp;