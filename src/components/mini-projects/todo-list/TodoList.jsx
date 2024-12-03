import React, { useState } from 'react';

export default function TodoList() {

  const [task, setTask] = useState("");
  const [todo, setTodo] = useState([]);

  function handleSubmit(e) {
    e.preventDefault();
    setTodo([...todo, task]);
  }

  return (
    <div className='bg-base-200 h-screen p-4'>
      <h1 className='text-5xl font-bold font-mono tracking-wider mb-8 md:text-center'>Todo List</h1>
        <form
          className='md:flex md:justify-center md:gap-2'
          onSubmit={handleSubmit}
        >
        
            <input
              className='w-[75%] font-mono border-black border-2 p-2.5 outline-none shadow-[2px_2px_0px_rgba(0,0,0,1)] focus:bg-[#FFA6F6] tracking-wider'
              placeholder='Add new task ...'
              type='text'
              value={task}
              onChange={(e) => setTask(e.target.value)}
            />

            <button
              className='h-12 font-mono border-black border-2 p-2.5 shadow-[2px_2px_0px_rgba(0,0,0,1)] hover:bg-[#00E1EF]'
              type='submit'
            >
              Add
            </button>
            
        </form>
    </div>
  )
}
