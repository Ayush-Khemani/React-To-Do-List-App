import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Task from './components/Task'

function App() {

  const [tasks, setTasks] = useState([])
  const [newTask, setNewTask] = useState("");
  const [newDate, setNewDate] = useState("");

  const addNewTask = () => {
    const newTaskObj = {
      task : newTask,
      date: newDate
    };

    setTasks([...tasks, newTaskObj]);
    setNewTask('');
    setNewDate('')
  }


  return (
    <>
      <div className=' w-full h-screen bg-slate-400 outline-none'>
        <h1 className='pt-5 text-center text-3xl text-black'>To Do List</h1>

        <div className='flex justify-center items-center gap-2'>
          <input
            type="text"
            placeholder='Enter the Task'
            className='px-3 py-2 rounded-xl mt-10'
            value={newTask}
            onChange={(e) => setNewTask(e.target.value)}
          />

          <input 
          type="date"
          className='px-3 py-2 rounded-xl mt-10'
          value={newDate}
          onChange={(e) => setNewDate(e.target.value)}

          />

          <button 
          className='px-3 py-2 bg-green-400 cursor-pointer rounded-xl mt-10'
          onClick={addNewTask}
          >
            Add
          </button>

        </div>

        <div className='outline-none flex flex-col gap-5 justify-center items-center flex-wrap mt-10'>
          {tasks.map((obj, index) => (
            <Task idx ={index} taskName={obj.task} date={obj.date} taskList={tasks} setTaskList={setTasks}/>
          ))}
        </div>


      </div>
    </>
  )
}

export default App
