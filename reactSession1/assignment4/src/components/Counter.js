import React from 'react';
import './Counter.css';

class Counter extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        count: 0
      }}
  
  
    increment=()=> {
      this.setState({
        count: this.state.count + 1
      });
    }
    
    decrement=()=> {
      this.setState({
        count: this.state.count - 1
      });
    }
  
    reset=()=> {
      this.setState({
        count: 0
      });
    }
  

     render() {
      return (
  
     <div>
      <h1>Current Count: {this.state.count}</h1>
      <button className='inc' onClick={this.increment}>Increment</button>
      <button className='dec' onClick={this.decrement}>Decrement</button>
      <button className='reset' onClick={this.reset}>Reset</button>
      
    </div>
      );
    }
  }
export default Counter;