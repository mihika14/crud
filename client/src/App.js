import React from "react";
import LoginPage from "./components/LoginPage/LoginPage";
import SignupPage from "./components/SignupPage/SignupPage";
import {Route , Routes } from 'react-router-dom'
import HomePage from "./components/HomePage/HomePage";
import MainPage from "./components/MainPage/MainPage";

function App() {
  return (
  <>
    <Routes>
      <Route path="/"  element={<MainPage/>} />
      <Route path="/loginpage" element={<LoginPage/>} />
      <Route path="/signuppage" element={<SignupPage/>}/>
      <Route path="/homepage" element={<HomePage />} />
    </Routes>

    </>
  );
}

export default App;
