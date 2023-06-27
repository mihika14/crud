import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./LoginPage.css";
import Swal from "sweetalert2";
import { Link } from "react-router-dom";

const LoginPage = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(email, password);
    fetch("http://localhost:5000/loginuser", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        "Access-Control-Allow-Origin": "*",
      },
      body: JSON.stringify({
        email,
        password,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data, "userRegister");
        if (data.status === "ok") {
          window.localStorage.setItem("token", data.data);
          navigate("/homepage");
          Swal.fire({
            icon: "success",
            text: "You have succesfully logged in",
          });
        }
      });
  };

  return (
    <>
      <div className="form-box">
        <form className="form" onSubmit={handleSubmit}>
          <span className="title">Log in</span>
          <div className="form-container">
            <input
              type="email"
              className="input"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />

            <input
              type="password"
              className="input"
              placeholder="Password"
              autoComplete="on"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <button type="submit">Login</button>
        </form>
        <div className="form-section">
          <p>
            Don't have an account? <Link to="/signuppage">Sign Up</Link>
          </p>
        </div>
      </div>
    </>
  );
};

export default LoginPage;
