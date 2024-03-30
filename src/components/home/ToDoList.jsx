import React, { memo } from 'react'

 const ToDoList = memo((props) => {

  return (
    <div className='border-4 border-orange-400 rounded-md p-3 h-64 overflow-auto grid-cols-1 text-center'>
        <h1>{props.listTitle}</h1>
    </div>
  )
 }) 

export default ToDoList
