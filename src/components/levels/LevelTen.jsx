import React from 'react'
import DisplayMessages from '../hooks/DisplayMessages';

export const LevelTen = () => {

    const [messages] = DisplayMessages();

  return (
    <div>
        <h1 className='font-bold text-lg font-sans mb-2 border-b-2'>Level 10: In this level, I'll just pass a state from a custom hook and display it.</h1>
        <h2 className='text-blue-600'>➡️ {messages}</h2>
    </div>
  )
}
