import React, { useState } from 'react';

export default function TodoList() {

  const [task, setTask] = useState("");
  const [todo, setTodo] = useState([]);

  function handleSubmit(e) {
    e.preventDefault();
    setTodo([...todo, task]);
  }

  return (
    <div className='box-border w-full bg-base-200 h-screen p-4'>
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

        <div className='bg-white flex w-full lg:flex-row h-[90%] lg:flex-wrap justify-center gap-4 flex-col'>
          {
            todo.map(item => 
              <div className='w-[90%] lg:w-[22%] flex lg:box-border lg:h-[35%] justify-center m-2 items-center border-black border-2 rounded-md shadow-[8px_8px_0px_rgba(0,0,0,1)] bg-white'>
                {item}
              </div>
            )
          }
        </div>

    </div>
  )
}
