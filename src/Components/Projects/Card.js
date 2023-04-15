import React from 'react'
import './card.css'
import Icons from '../../assets/Icons.png'
function Card(props) {
  return (
    <div  className="card-one">
      <div>  
      
      <img src={props.image} className="avatar"/></div>
        <div className="title">{props.title}</div>
        <div className="desc">{props.desc}</div>
       
    </div>
  )
}

export default Card