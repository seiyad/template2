import React from 'react'
import Rating from "../assets/rating.png"
import pluse from "../assets/plussimple.png"
import "../Components/Card.css"

function Card(props) {
  return (
    <>
    <div className='component1'>
        <img src={props.image}  alt="" /><br/>
        <p>Chair</p><br/>
        <div className='details'>
          <h2>{props.name}</h2><br/>
        <img src={Rating} alt="" /><br/>
        <div className='small4'>
        <div><h4>{props.rate}</h4></div>
        <div><img src={pluse} alt="" /></div>
        </div>
        </div>
        
      </div>
    </>
  )
};

export default Card
