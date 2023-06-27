import React from "react";
import { Link } from "react-router-dom";
import './MainPage.css'
import Spline from '@splinetool/react-spline'

const MainPage = () => {
  return (
    <div className="mainpage">
    <div className="mainpagebtn">
    <Link to="/loginpage">
      <button className="loginbtn">LOGIN</button>
    </Link>
    <Link to="/signuppage">
      <button className="loginbtn">SIGN UP</button>
    </Link>
    </div>
    {/* used for the animation */}
    <Spline scene="https://prod.spline.design/wCXlOKxnagJioFMr/scene.splinecode"/>  
    </div>
  );
};

export default MainPage;