import React from "react";
import Button from "../Button.js/Button";
import "./Header.css";

const Header = ({ showForm, changeTextAndColor }) => {
  return (
    <>
    <header className="header">
      <h2 className="app-header">Stay Organized, Accomplish More!</h2>
      <Button
        onClick={showForm}
        color={changeTextAndColor ? "red" : "green"}
        text={changeTextAndColor ? "Close" : "Add"}
      />
    </header>
    <h5 className="app-content">START ADDING TASKS</h5>
    </>
  );
};

export default Header;