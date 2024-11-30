import React, { useState } from 'react'

export default function LevelSix() {

    const [firstName, setFirstName] = useState("Your first name here!");
    const [name, setName] = useState({firstName: 'First Name', lastName: 'Last Name'});
    const [address, setAddress] = useState ({municipality: '', province: '', country: ''});

    function handleSubmit(e) {
      e.preventDefault();
      console.log(address);
    }

  return (
    <div>
        <h1 className='font-bold text-lg font-sans mb-2 border-b-2'>Level 6: In this level, I'll handle catching form inputs.</h1>
        <h2 className='font-medium text-md font-sans mb-2'> In the first challenge, I'll only capture one input from a user and display it.</h2>

        <form className='mb-2 border-b-2'>
            <input onChange={(e) => setFirstName(e.target.value)} className='bg-base-200'></input>
            <p className='my-2 font-semibold'>Hello, {firstName}! 👋</p>
        </form>

        <h2 className='font-medium text-md font-sans mb-2'> In this challenge, I'll capture multiple inputs from a user and display it.</h2>
        <form>
            <input onChange={(e) => setName({...name, firstName : e.target.value})} className='bg-base-200 mr-2'></input>
            <input onChange={(e) => setName({...name, lastName: e.target.value})} className='bg-base-200'></input>
            <p className='my-2 font-semibold'>Hello, {name.firstName} {name.lastName}! 👋</p>
        </form>

        <h2 className='font-medium text-md font-sans mb-2 border-t-2'> In this challenge, I'll let a user and log it to the console.</h2>
        <form className='flex flex-col'>
          <label htmlFor="municipality">Municipality / City</label>
            <input onChange={(e) => setAddress({...address, municipality: e.target.value})} id='municipality' className='bg-base-200 mr-2'></input>
          <label htmlFor="province">Province</label>
            <input onChange={(e) => setAddress({...address, province: e.target.value})} className='bg-base-200 mr-2'></input>
          <label htmlFor="country">Country</label>
            <input onChange={(e) => setAddress({...address, country: e.target.value})} className='bg-base-200 mb-2'></input>

            <button onClick={(e)=> handleSubmit(e)} className='bg-gray-700 text-white'>Submit</button>
        </form>
    </div>
  )
}
