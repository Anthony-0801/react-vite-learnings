import React from 'react'
import { Navigate, useNavigate } from 'react-router-dom'

export const NavigateToTodoList = () => {
    const navigate = useNavigate();
  return (
    <div>
        <h1 className='text-2xl my-2 font-semibold'>Reminder 🚨</h1>
        <p className='text-md my-2 font-semibold'>Please change the URL link to '/' only or just put any words in the link to navigate back home</p>
        <button 
            className='bg-blue-800 w-full p-2 mx-2 rounded-md text-white font-font-semibold'
            onClick={()=> navigate('/todo-list')}
        >
            Navigate to Todo List
        </button>
    </div>
  )
}
