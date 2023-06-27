import React from "react";
import { FaPencilAlt, FaTimes } from "react-icons/fa";
import Button from "../Button.js/Button";
import "./Task.css";

const Task = ({ task, onDelete, onEdit }) => {
  return (
    <div>
      <div className="task">
        <div>
          <p className="taskName">
            <span className="textBold">Task Name:</span> {task.text}
          </p>
          <p className="taskDate">
            <span className="textBold">Date of Completion:</span> {task.day}
          </p>
        </div>
        <div>
          <p>
            {/* the items get deleted  */}
            <FaTimes onClick={() => onDelete(task.id)} className="delIcon" />
          </p>
          <p>
            {/* for editing the existing task */}
            <FaPencilAlt onClick={() => onEdit(task.id)} className="editIcon" />
          </p>
        </div>
      </div>
    </div>
  );
};

export default Task;