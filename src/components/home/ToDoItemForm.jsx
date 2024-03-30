import React, { memo, useEffect, useState } from 'react'
import axios from "axios"
import { useRecoilState } from "recoil"

import { todos } from '../../store/atoms.jsx'

const ToDoItemForm = memo((props) => {

  const [newTask, setNewTask] = useState(``);
  const [superList, setSuperList] = useRecoilState(todos);
  
  let handleChange = (event) => { setNewTask(event.target.value) }

  let handleNewTask = (event) => {
      event.preventDefault();
      if (newTask.length == 0){
          alert(`Enter Task List Title`);
          return;
      }
      //frontend update (Optimistic Rendering)
      let listOfTasks = superList[`${props.listName}`]
      if (listOfTasks.find((item) => { return item.taskName == newTask }) != undefined){
        alert("Duplicate Tasks not allowed!");
        return;
      }
      let newList = [...listOfTasks, { taskName : newTask, taskStatus : false }]
      setSuperList((prev) => {
        let temp = {...prev};
        console.log(temp[props.listName])
        temp[props.listName] = [...newList];
        console.log(temp);
        return temp;
      })

  }

  return (
    <form className='grid grid-cols-5 px-3 gap-2'>
          <input className='text-center col-span-4'
          type='text' placeholder='New Task' onChange={handleChange}></input>
          <button className='bg-orange-400 hover:bg-orange-500 py-1 px-3 rounded-full col-span-1'
          onClick={handleNewTask} type='submit'>ADD</button>
    </form>
  )
});

export default ToDoItemForm
