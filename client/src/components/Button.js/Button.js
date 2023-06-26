import React from "react";
import "./Button.css";

const Button = ({ color, onClick, text }) => {
  return (
    <button onClick={onClick} style={{ backgroundColor: color }} className="btn">
      {text}
    </button>
  );
};

export default Button;