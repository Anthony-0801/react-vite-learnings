import React from 'react'
import { Navigate, useNavigate } from 'react-router-dom'

export const NavigateToTodoList = () => {
    const navigate = useNavigate();
  return (
    <div>
        <button 
            className='bg-blue-800 w-full p-2 mx-2 rounded-md text-white font-font-semibold'
            onClick={()=> navigate('/todo-list')}
        >
            Navigate to Todo List
        </button>
    </div>
  )
}
