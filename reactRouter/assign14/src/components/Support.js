import React from 'react';
import './Support.css';

function Contact() {
    return (
        <div>
        <div id='support-container'>
        <div id='left-div'>
        <h3 id='hSupport'>Support Portal<span className='pLang'> <p>English </p> <p> हिंदी</p></span></h3>
        <p id='pSearch'>Search for an answer or browse help topics to create a ticket</p>
        <input type='text' id='search' placeholder='Eg: how do I activate F&O, why is my order getting rejected...'></input> 
        <div id='imgDiv'><img src='searchImg.png' id='searchImg' alt='searchImg'></img></div>
        <div className='pFour'><p>Track account opening</p> <p> Track segment activation</p> <p> Intraday margins</p> <p> Kite user manual</p></div>
        </div>
        <div id='right-div'>
        <p id='pLogin'>Login with Kite</p>
        <h3 id='hFeatured'>Featured</h3>
        <ol>
        <li className='list'>Latest Intraday leverages - MIS & CO</li>
        <li className='list'>Offer for sale (OFS) - April 2022</li>
        </ol>
        </div>
        </div>
        <p id='pCreate'>To create a ticket, select a relevant topic</p>
        </div>
        
    )
}

export default Contact;
