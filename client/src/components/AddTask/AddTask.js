import React, { useState } from "react";
import Swal from "sweetalert2";
import "./AddTask.css";

const AddTask = ({ onSave }) => {
  const [text, setText] = useState("");
  const [day, setDay] = useState("");

  const onSubmit = (e) => {
    e.preventDefault();

    // sends a message if any of the details are missing
    if (!text && !day) {
      Swal.fire({
        icon: "error",
        text: "ADD TASK AND DAY",
      });
    } else if (!text && day) {
      Swal.fire({
        icon: "error",
        text: "ADD TASK",
      });
    } else if (text && !day) {
      Swal.fire({
        icon: "error",
        text: "ADD DAY",
      });
    } else {
      onSave({ text, day });
    }

    setText("");
    setDay("");
  };

  return (
    <form className="add-form" onSubmit={onSubmit}>
      <div className="form-control">
        {/* takes input for task */}
        <label>Task</label>
        <input
          type="text"
          placeholder="add task"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
      </div>
      <div className="form-control">
        {/* takes input for the day and time of when to do it  */}
        <label>Day & Time</label>
        <input
          type="text"
          placeholder="add day & time"
          value={day}
          onChange={(e) => setDay(e.target.value)}
        />
      </div>
      <input type="submit" className="btn btn-block" value="Save Task" />
    </form>
  );
};

export default AddTask;
