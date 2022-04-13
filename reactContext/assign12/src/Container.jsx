import React , { Component } from 'react';
import {ThemeContext} from './context/ThemeContextProvider';
import Form from './Form';

export default class Container extends Component{
    render() {
        console.log(this.context);
        const {isDark,toggleTheme}= this.context;

        return (
            <div>
            <div id='btn-div'>
            <button id='toggleBtn' onClick={toggleTheme}>{isDark? 'Light Mode':'Dark Mode'}</button>
            </div>

            <div>
            <Form/>
            </div>
            
            </div>
        )
    }
}

Container.contextType= ThemeContext;