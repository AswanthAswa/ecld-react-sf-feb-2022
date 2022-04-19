import React from 'react';
import './Home.css';

function Home() {
    return (
      <div id='home-container'>
      <img src='homeImg.png' id='homeImg' alt='homeImg' ></img>
        <h1 id='hInvest'>Invest in everything</h1>
        <h5>Online platform to invest in stocks, derivatives, mutual funds, and more</h5>
        <button id='homeSignupBtn' >Sign up now</button>
      </div>
    );
  }
  
  export default Home;