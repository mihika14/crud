import React from "react";
import TableCrud from "./components/TableCrud";
import LoginPage from "./components/LoginPage";
import SignupPage from "./components/SignupPage";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";

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

    <SignupPage/>
    <LoginPage/>
    </>
  );
}

export default App;
