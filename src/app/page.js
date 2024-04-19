"use client";

import { useState, useEffect, useInsertionEffect } from "react";

export default function Home() {

  const [tasks, setTasks] = useState([]);
  const [addTaskFormVisibility, setAddTaskFormVisibility] = useState(Boolean);
  const [taskInputValue, setTaskInputValue] = useState("");

  // get tasks from local storage
  const getTasks = () => {
    const stor = localStorage.getItem('tasks');

    if(stor){
      return JSON.parse(stor);
    }

    return [];
  }

  // add task button
  const addTask = () => {
    if(addTaskFormVisibility){
      setAddTaskFormVisibility(false);
    }
    else{
      setAddTaskFormVisibility(true);
    }
  }

  // add task form button
  const submitAddTask = (event) => {
    event.preventDefault(); // prevent page from refreshing

    // check input validity
    const input = taskInputValue;

    if(input.length <= 0 || input == null){
      alert("You entered nothing");
    }
    else{
      alert("You entered: " + input);
    }

    //TODO: finish
  }

  // mount when component loads, reads tasks from local components 
  useEffect(() => {
    setTasks(getTasks()); // read tasks from local storage
    setAddTaskFormVisibility(true); // hide the add task form 
  }, []);

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="container mx-auto p-4">
        {/* title*/}
        <h1 className="text-4xl font-bold text-left text-yellow-600">
            Demo todo app
        </h1>
        <hr className="my-4 border-t border-yellow-400"></hr>

        {/* display all tasks */}
        <div className="task-list mt-4">
          {tasks.length > 0 ? (
            tasks.map((task, index) => (
              <Task key={index} task={task} />
            ))
          ) : (
            <p>You have no tasks</p>
          )}

        {/* add an todo item */}
        <button onClick={addTask} className="mb-4 mr-4 mt-4 px-4 py-2 bg-yellow-500 hover:bg-yellow-600 text-white font-semibold rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-yellow-300">
          +
        </button>

        {/* add task field */}
        <form onSubmit={submitAddTask} hidden={addTaskFormVisibility} className=" px-5 rounded-lg border-2 border-yellow-600">
          <input value={taskInputValue} onChange={(event) => setTaskInputValue(event.target.value)} type="text" placeholder="Todo item..." className="mb-4 mr-4 mt-4 px-4 py-2 bg-white text-yellow-500 font-semibold rounded-lg shadow-md "></input>
          <input type="submit" className="mb-4 mr-4 mt-4 px-4 py-2 bg-yellow-500 hover:bg-yellow-600 text-white font-semibold rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-yellow-300"></input>
        </form>
        </div>
      </div>
    </main>
  );
}

// todo task component
export function Task({task}){
  return (
    <p>{task}</p>
  )
}
