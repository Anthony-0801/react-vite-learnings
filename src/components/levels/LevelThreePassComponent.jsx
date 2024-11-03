import React from 'react'

export default function ({title, emoji, description, index}) {
  return (
    <div key={index} className="time-entry">
        <h3>{title} {emoji}</h3> 
        <p>{description}</p> 
    </div> 
  )
}
