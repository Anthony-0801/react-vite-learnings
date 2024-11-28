import React from 'react'

export default function LevelOne({name, emoji}) {

  return (
    <div>
        <h1 className='font-bold text-lg font-sans mb-2 border-b-2'>Level 1: In this level, I'll just pass a prop to the App component and display it.</h1>
        <h2>Hello, {name} {emoji}</h2>
    </div>
  )
}
