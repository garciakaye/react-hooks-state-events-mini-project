import React, { useState } from "react";
import { v4 as uuid } from "uuid";
import Task from "./Task"

function TaskList({ tasksData }) {
  const [displayedTasks, setDisplayedTasks] = useState(tasksData)

  function handleDeleteInParent(text){
    const filteredArr = displayedTasks.filter((task) => task.text !== text)
    setDisplayedTasks(filteredArr)
  }

  const taskArr = displayedTasks.map((task) => {
    return <Task key={uuid()} text={task.text} category={task.category} handleDelete={handleDeleteInParent}/>
  });
  
  return (
    <div className="tasks">
      {taskArr}
    </div>
  );
}

export default TaskList;
