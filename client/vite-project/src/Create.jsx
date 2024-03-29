import React from 'react'
import { useState } from 'react'
import axios from 'axios';

const Create = () => {
  
  const [task, settask] = useState()
  const handleAdd = () =>{
    axios.post('http://localhost:3001/add',{task:task})
    .then(result=>console.log(result))
    .catch(err=>console.log(err))
  }

  return (
    <div>
        <form className='create-form'>
        <input type='text' placeholder='Enter Task' id='input' onChange={(e)=>settask(e.target.value)} />
        <button type='button' onClick={handleAdd}>Add</button>
        </form>
        
    </div>
  )
}

export default Create