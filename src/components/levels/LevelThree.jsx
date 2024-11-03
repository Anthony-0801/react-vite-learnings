import React from 'react'

export default function LevelThree(title, description, emoji) {
  return (
    <div>
        <div>
            <h1 className='font-bold font-sans'>Level 3: In this level, we'll map an array list of times of day but we'll pass some props in the LevelThreePassComponent component's props and display it here at this section.</h1>
            <ul className='list-disc'>
                {
                    fruits.map((fruit) => (
                        <li key={fruit}>{fruit}</li>
                        ))
                }
            </ul>
        </div>
    </div>
  )
}
