import React from 'react';

export default function TodoList() {
  return (
    <div>
        <form>
        
            <input
              className='w-full max-w-[270px] h-[60px] p-12 text-[18px] font-mono text-black bg-base-100 border-4 outline-none transition-all ease-in shadow-md'
              placeholder='Add new task ...'
            />

        </form>
    </div>
  )
}
