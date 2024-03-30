import React, { memo, useEffect, useState } from 'react'
import axios from 'axios'
import { useRecoilValue } from "recoil"

import ToDoItemForm from './ToDoItemForm';
import { todos } from '../../store/atoms.jsx'

 const ToDoList = memo((props) => {

  const listOfTasks = useRecoilValue(todos)[`${props.listTitle}`];

  let renderTasks = listOfTasks.map((item) => {
    return <li key={`${props.listTitle}${item.taskName}`}>{item.taskName}</li>
  });

  return (
    <div className='border-4 border-orange-400 rounded-md p-3 h-64 overflow-auto grid-cols-1 space-y-2 text-center'>
        <h1 className='md:text-2xl'>{props.listTitle}</h1>
        <hr className='w-full' />
        <ToDoItemForm listName={props.listTitle}/>
        <hr className='w-full' />
        {renderTasks}
    </div>
  )
 }) 

export default ToDoList