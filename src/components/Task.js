import React from "react";

function Task({ text, category, onDeleteTask }) {
  // console.log({handleDelete})

  // function handleDelete(){

  // }
  function handleClick() {
    onDeleteTask(text)
  }

  return (
    <div className="task">
      <div className="label">{category}</div>
      <div className="text">{text}</div>
      <button className="delete" onClick={handleClick}>X</button>
    </div>
  );
}

export default Task;
