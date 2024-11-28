import React, { useState } from 'react'

export default function LevelFive() {

    const [count, setCount] = useState(0);
    const [num, setNum] = useState(0);
    const [increment, setIncrement] = useState(1);

  return (
    <div>
        <h1 className='font-bold text-lg font-sans mb-2 border-b-2'>Level 5: In this level, I'll practice event handling by showing a message through a click done in a button.</h1>
        <h2 className='font-medium text-md font-sans mb-2'> When any of the button is clicked, it will show a message and show the number of times you clicked the button whether you increment it or not.</h2>
        
        <p className='my-2 font-semibold'>Count value is: {count}</p>

        <button 
            className='bg-blue-800 w-1/5 p-2 mx-2 rounded-md text-white font-semibold'
            onClick={()=> {setCount(count + 1)}}
        >
            Increment
        </button>

        <button 
            className='bg-blue-800 w-1/5 p-2 mx-2 rounded-md text-white font-semibold'
            onClick={()=> {setCount(count - 1)}}
        >
            Decrement
        </button>


        <h2 className='font-medium text-md font-sans mt-4 mb-2 border-t-2'> In this next output, I'll adjust the increment number by your preference and it will display the output by tapping the 'Increment' or 'Decrement' button.</h2>
         <p className='my-2 font-semibold'>Count value is: {num}</p>

        <button 
            className='bg-blue-800 w-1/5 p-2 mx-2 rounded-md text-white font-semibold'
            onClick={()=> {setNum(num + increment)}}
        >
            Increment
        </button>

        <button 
            className='bg-blue-800 w-1/5 p-2 mx-2 rounded-md text-white font-semibold'
            onClick={()=> {setNum(num - increment)}}
        >
            Decrement
        </button>

        <p className='my-2 font-semibold'>Set the increment/decrement value by: {increment}</p>

        <button 
            className='bg-blue-800 w-[45%] p-2 mr-2 rounded-md text-white font-semibold'
            onClick={()=> {setIncrement(increment + 1)}}
        >
            Increase Increment Value
        </button>

        <button 
            className='bg-blue-800 w-1/2 p-2 my-2 rounded-md text-white font-semibold'
            onClick={()=> {setIncrement(increment - 1)}}
        >
            Decrease Increment Value
        </button>
    </div>
  )
}
