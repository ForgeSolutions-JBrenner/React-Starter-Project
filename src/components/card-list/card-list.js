import React from 'react'
import {Card} from '../card/card.js'
import './card-list.css'

//props is what we receive from our functional component

export const Cardlist = props => {
return(
<div className="card-list">
	{props.monsters.map(monster => (
<Card key={monster.id} monster={monster} />

))}
</div>
)
}