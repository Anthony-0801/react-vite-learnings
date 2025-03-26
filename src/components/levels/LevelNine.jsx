import React from 'react'
import { useNavigate } from 'react-router-dom'

export const LevelNine = () => {
    const navigate = useNavigate();
  return (
    <div>
        <button 
            className='bg-blue-800 w-full p-2 mx-2 rounded-md text-white font-font-semibold'
            onClick={()=> navigate('/useContext')}
        >
            Navigate to using useContext
        </button>
    </div>
  )
}
