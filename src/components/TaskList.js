import React from "react";
import { v4 as uuid } from "uuid";
import Task from "./Task"

function TaskList({ onDeleteTask, tasks }) {

  const taskArr = tasks.map((task) => (
    <Task 
    key={uuid()} 
    text={task.text} 
    category={task.category} 
    onDeleteTask={onDeleteTask}/>
  ));
  
  return (
    <div className="tasks">
      {taskArr}
    </div>
  );
}

export default TaskList;
