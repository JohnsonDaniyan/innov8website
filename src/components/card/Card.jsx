import React from 'react'
import './card.css'

function Card(props) {
  return (
    <div className="c"  >
        <div className="c-movable">{props.children}</div>
    </div>
  )
}

export default Card