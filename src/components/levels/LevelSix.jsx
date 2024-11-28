import React, { useState } from 'react'

export default function LevelSix() {

    const [firstName, setFirstName] = useState("'Your name here!'");

  return (
    <div>
        <h1 className='font-bold text-lg font-sans mb-2 border-b-2'>Level 6: In this level, I'll handle catching form inputs.</h1>
        <h2 className='font-medium text-md font-sans mb-2'> In the first challenge, I'll only capture one input from a user and display it.</h2>

        <form className='mb-2 border-b-2'>
            <input onChange={(e) => setFirstName(e.target.value)} className='bg-base-200'></input>
            <p className='my-2 font-semibold'>Hello, {firstName}! 👋</p>

        </form>

    </div>
  )
}
