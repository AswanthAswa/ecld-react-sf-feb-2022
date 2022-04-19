import React from 'react';
import './Pricing.css';

function Pricing() {
    return (
      <div id='pricing-container'>
        <div id='topDiv'>
        <h1 id='pricing-title'>Pricing</h1>
        <p id='pPricing'>Free equity investments and flat ₹20 intraday and F&O trades</p>
        </div>
        <div id='priceImgDiv'>
        <img src='price.png'  alt='priceImg' width='90%'></img>
        </div>
      </div>
    );
  }
  
  export default Pricing;