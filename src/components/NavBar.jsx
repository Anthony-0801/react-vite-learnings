import React from 'react'

export default function NavBar() {
  return (
    <header className='p-5 flex bg-slate-300 border-r-black mb-4'>
        <ul className='flex flex-row justify-around w-[100%] text-lg font-sans font-bold'>
            <li>About</li>
            <li>Levels</li>
            <li>Random</li>
        </ul>
    </header>
  )
}
