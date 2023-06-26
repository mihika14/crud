import React from "react";
import './Tasks.css'
import Task from "../Task/Task";

const Tasks = ({ tasks, onDelete, onEdit }) => {
  return (
    <>
      {
        tasks.map((task) => (
          <Task key={task.id} task={task} onDelete={onDelete} onEdit={onEdit} />
        ))
      }
    </>
    )
}
export default Tasks;