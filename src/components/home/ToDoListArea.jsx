import React, { useEffect } from 'react'
import { useRecoilState, useSetRecoilState, useRecoilValue } from 'recoil';
import axios from 'axios';

import { todoListList, todos } from '../../store/atoms';
import ToDoList from './ToDoList'

export default function ToDoListArea() {

  let [taskList, setTaskList] = useRecoilState(todoListList); 
  let setTodos = useSetRecoilState(todos)

  async function retrieveTodoLists(){
    let token = localStorage.getItem(`todoer-user-token`)
    let response = await axios.get(`http://localhost:5000/todolists`, {
      headers : {
        authorization : token
      }
    });
    console.log(response.data)
    let arr = []
    let dict = {}
    response.data.forEach((item) => {
      let listName = item.todoListName;
      let listOfTasks = item.taskList;
      arr.push(item.todoListName);
      dict[listName] = listOfTasks
    })
    console.log(arr);
    console.log(dict);
    setTaskList(arr);
    setTodos(dict);
  }

  useEffect(()=>{
    retrieveTodoLists()
  }, [])

  const renderTaskLists = taskList.map((item) => {
      return <ToDoList listTitle={item} key={`${item}List`} />
  })

  return (
    <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 p-3'>
        {renderTaskLists}
    </div>
  )
}
