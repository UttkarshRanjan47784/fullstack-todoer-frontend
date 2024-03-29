import React, { memo } from 'react'

 const TodoForm = memo(()=>{
  return (
    <div className='grid grid-cols-4 justify-center items-center bg-slate-500 p-1 gap-1'>
        <input className='text-center'
        type='text' placeholder='Task'></input>
        <input className='text-center'
        type='text' placeholder='Task List'></input>
        <input className='text-center'
        type='text' placeholder='Tags'></input>
        <button className='bg-orange-400 hover:bg-orange-500 py-1 px-3 rounded-full'>ADD</button>
    </div>
  )
 });

export default TodoForm