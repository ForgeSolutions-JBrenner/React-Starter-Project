import React from 'react'
import './card.css'

export const Card = props => (

	<div className="card-container">
		<img alt="monster" src={`${props.monster.img_url}`} width="100%" height="200px" />
		<h2> {props.monster.name} </h2>
		<p>{props.monster.Senses}</p>
	</div>

)