import React, { Component } from 'react';

export const ThemeContext=React.createContext();


class ThemeContextProvider extends Component {
    constructor(props) {
        super(props);
        this.state = {
          isDark: false,
          button: false
        };
    }

 
    toggleTheme=()=>{
        
        this.setState({
            isDark: !this.state.isDark,
            button: !this.state.button
             })
    }

    render() {
        const { isDark ,button} = this.state;
        const {toggleTheme } = this;
        
        return (
            <ThemeContext.Provider value={{ isDark,button,toggleTheme}}>
             {this.props.children}
            </ThemeContext.Provider>
        )
    }
}
export default ThemeContextProvider;
