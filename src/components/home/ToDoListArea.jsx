import React, { useEffect } from 'react'
import { useRecoilState, useSetRecoilState, useRecoilValue } from 'recoil';
import axios from 'axios';

import { todoListList } from '../../store/atoms';
import ToDoList from './ToDoList'

export default function ToDoListArea() {
  

  async function retrieveTodoLists(){
    let token = localStorage.getItem(`todoer-user-token`)
    let response = await axios.get(`http://localhost:5000/todolists`, {
      headers : {
        authorization : token
      }
    });
    let arr = response.data.map((item) => { return item.todoListName})
    console.log(arr)
    setTaskList(arr);
  }

  useEffect(()=>{
    retrieveTodoLists()
  }, [])

  let [taskList, setTaskList] = useRecoilState(todoListList);

  const renderTaskLists = taskList.map((item) => {
      return <ToDoList listTitle={item} key={`${item}List`} />
  })

  return (
    <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 p-3'>
        {renderTaskLists}
    </div>
  )
}
