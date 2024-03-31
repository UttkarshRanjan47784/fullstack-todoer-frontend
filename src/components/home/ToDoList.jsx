import React, { memo, useEffect, useState } from 'react'
import { useRecoilValue } from "recoil"

import ToDoItemForm from './ToDoItemForm';
import { todos } from '../../store/atoms.jsx'
import ToDoItem from './ToDoItem.jsx';

 const ToDoList = memo((props) => {

  const listOfTasks = useRecoilValue(todos)[`${props.listTitle}`];

  let renderTasks = listOfTasks.map((item) => {
    return <ToDoItem key={`${props.listTitle}${item.taskName}`} listName={props.listTitle}  taskName={item.taskName} stat={item.taskStatus}/>
  });

  return (
    <div className='border-4 border-orange-400 rounded-md p-3 h-96 overflow-auto grid-cols-1 space-y-2 text-center'>
        <h1 className='md:text-3xl text-white bg-gray-800 py-3'>{props.listTitle}</h1>
        <hr className='w-full' />
        <ToDoItemForm listName={props.listTitle}/>
        <hr className='w-full' />
        {renderTasks}
    </div>
  )
 }) 

export default ToDoList