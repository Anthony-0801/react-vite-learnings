import React from 'react'

export default function LevelTwo() {

const fruits = ["Apple", "Mango", "Banana", "Orange", "Pineapple"];

  return (
    <div>
        <h1 className='font-bold font-sans mb-2'>Level 2: In this level, we'll map an array list of fruits and display it.</h1>
        <ul className='list-disc'>
            {
                fruits.map((fruit) => (
                    <li key={fruit}>{fruit}</li>
                    ))
            }
        </ul>
    </div>
  )
}
