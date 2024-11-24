import React from 'react'

export default function ({title, emoji, description, index}) {
  return (
    <div key={index} className="mb-2">
        <h3>{title} {emoji}</h3> 
        <p>{description}</p> 
    </div> 
  )
}
