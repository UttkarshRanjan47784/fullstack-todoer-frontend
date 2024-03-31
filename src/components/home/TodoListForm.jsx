import React, { memo, useState } from 'react';
import { useRecoilState } from 'recoil';
import axios from 'axios';

import { todos } from '../../store/atoms';

 const TodoListForm = memo(()=>{

  const [taskListTitle, setTaskListTitle] = useState(``);
  const [superList, setSuperList] = useRecoilState(todos);

  const handleTaskListTitle = (event) => { setTaskListTitle(event.target.value) }

  const handleAdd = async (event) => {

    event.preventDefault();
    if (taskListTitle.length == 0){
      alert(`Enter Task List Title`);
      return;
    }
    //saving old value
    let oldValue = {...superList};
    if (taskListTitle in superList){
      alert(`Duplicate Task List Names not allowed`);
      return;
    }
    //frontend update (Optimistic Rendering)
    setSuperList((prev) => {
      let temp = {...prev};
      temp[taskListTitle] = [];
      return {...temp}
    })
    try {
      //backend update
      let token = localStorage.getItem(`todoer-user-token`);
      await axios.post(`http://localhost:5000/addtodolist`, {
          todoListName : taskListTitle,
          taskList : []
        },{
        headers : {
          authorization : token
        }
      });
    } catch (error) {
      //rollback frontend change
      console.log(error.message);
      alert(`Operation Failed`);
      setSuperList(oldValue);
    }
    setTaskListTitle(``)
  }

  const handleDelete = async (event) => {
    event.preventDefault();
    if (taskListTitle.length == 0){
      alert(`Enter Task List Title`);
      return;
    }
    //saving old value
    let oldValue = {...superList};
    console.log(oldValue);
    if (!(taskListTitle in superList)){
      alert(`Task List does not exist`);
      return;
    }
    //frontend update (Optimistic Rendering)
    setSuperList((prev) => {
      let temp = {...prev}
      delete temp[`${taskListTitle}`];
      return {...temp}
    })
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
      setSuperList(oldValue);
    }
    setTaskListTitle(``)
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