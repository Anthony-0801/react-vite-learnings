import React, { useState } from 'react'

export default function LevelFour() {

    let message;
    const display = false;
    const display2 = true;

    if (display) {
        message = <p className='font-serif mb-2'>I'm the truth!</p>
    } else {
        message = <p className='font-serif mb-2'>Am I a lie?</p>
    }

    


  return (
    <div>
        <h1 className='font-bold font-sans mb-2 border-b-2'>Level 4: In this level, we'll conditionally render a content or a component.</h1>

        <h2 className='font-medium font-sans mb-2'> The first message is setup as an if-else condition and it has a state of 'false', the other one is in a ternary operator with a state of 'true'.</h2>

        {message}
        {display2 ? <h2 className='font-serif mb-2'>I'm the truth!</h2> : <h2 className='font-serif mb-2'>Am I a lie?</h2>}
    </div>
  )
}
