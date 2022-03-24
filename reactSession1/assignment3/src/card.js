import React from 'react';
import './card.css';
function Card(props) {
    return(
        <div>
       <div class="row">
       <div class="column">
       <img src={props.src} alt="" />
       <h2>{props.name}</h2>
       <p>{props.food} </p>
       <p >{props.rating}⭐</p>
       </div>
       </div>
        
        </div>
    )
}

export default Card
