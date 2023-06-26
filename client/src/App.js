import React from "react";
import TableCrud from "./components/TableCrud";
import LoginPage from "./components/LoginPage/LoginPage";
import SignupPage from "./components/SignupPage/SignupPage";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import HomePage from "./components/HomePage/HomePage";

function App() {
  return (
    // <Router>
    //   <SignupPage />
    //   <div className="App">
    //     {/* <Routes>
    //       <Route exact path="/" element={<LoginPage />} />
    //       <Route path="/signin" element={<SignupPage />} />
    //       <Route path="/table" element={<TableCrud />} />
    //     </Routes> */}
    //   </div>
    // </Router>
    <>

    {/* <SignupPage/>
    <LoginPage/> */}
    <HomePage/>
    </>
  );
}

export default App;
