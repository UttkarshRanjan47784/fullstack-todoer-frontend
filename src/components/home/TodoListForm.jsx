import React, { memo, useState } from 'react';
import { useRecoilState, useSetRecoilState } from 'recoil';
import axios from 'axios';

import { todoListList } from '../../store/atoms';

 const TodoListForm = memo(()=>{

  const [taskListTitle, setTaskListTitle] = useState(``);

  const [taskList, setTaskList] = useRecoilState(todoListList);

  const handleTaskListTitle = (event) => { setTaskListTitle(event.target.value) }

  const handleAdd = async (event) => {
    event.preventDefault();
    if (taskListTitle.length == 0){
      alert(`Enter Task List Title`);
      return;
    }
    if (taskList.filter((item)=>{ return (item == taskListTitle) }).length == 0){
      //frontend update (Optimistic Rendering)
      setTaskList((prev) => {
        let arr = prev;
        arr = [...arr, taskListTitle];
        return [...arr]
      });
      try {
        //backend update
        let token = localStorage.getItem(`todoer-user-token`)
        let response = await axios.post(`http://localhost:5000/addtodolist`, {
            todoListName : taskListTitle
          },{
          headers : {
            authorization : token
          }
        });
        console.log(response.data)
      } catch (error) {
        //rollback frontend change
        console.log(error.message);
        alert(`Operation Failed`);
        setTaskList((prev) => {
          let arr = prev;
          arr = arr.filter((item) => {
            return item != taskListTitle
          });
          return [...arr]
        });
      }
    }
  }

  const handleDelete = async (event) => {
    event.preventDefault();
    if (taskListTitle.length == 0){
      alert(`Enter Task List Title`);
      return;
    }
    if (taskList.filter((item)=>{ return (item == taskListTitle) }).length != 0){
      //frontend update (Optimistic Rendering)
      setTaskList((prev) => {
        let arr = prev;
        arr = arr.filter((item) => { return item != taskListTitle })
        return [...arr]
      });
      try {
        //backend update
        let token = localStorage.getItem(`todoer-user-token`)
        let response = await axios.post(`http://localhost:5000/deletetodolist`, {
            todoListName : taskListTitle
          },{
          headers : {
            authorization : token
          }
        });
      } catch (error) {
        //rollback frontend change
        console.log(error.message);
        alert(`Operation Failed`);
        setTaskList((prev) => {
          let arr = prev;
          arr = [...arr, taskListTitle];
          return [...arr]
        });
      }
    }
  }

  return (
    <form className='grid grid-cols-5 justify-center items-center bg-slate-500 p-1 gap-1'>
        <input className='text-center col-span-3'
        type='text' placeholder='Task List' value={taskListTitle} onChange={handleTaskListTitle}></input>
        <button type='submit' className='bg-orange-400 hover:bg-orange-500 py-1 px-3 rounded-full'
        onClick={handleAdd}>ADD</button>
        <button className='bg-orange-400 hover:bg-orange-500 py-1 px-3 rounded-full'
        onClick={handleDelete}>DELETE</button>
    </form>
  )
 });

export default TodoListForm;