import React, { Component } from "react";
import "./LoginPage.css";

export default class LoginPagePage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    const { email, password } = this.state;
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
      });
  }

  render() {
    return (
      <>
        <div className="form-box">
          <form className="form" onSubmit={this.handleSubmit}>
            <span className="title">Sign up</span>
            <div className="form-container">
              <input
                type="email"
                className="input"
                placeholder="Email"
                onChange={(e) => this.setState({ email: e.target.value })}
              />

              <input
                type="password"
                className="input"
                placeholder="Password"
                autoComplete="on"
                onChange={(e) => this.setState({ password: e.target.value })}
              />
            </div>

            <button>Login</button>
          </form>
          <div className="form-section">
            <p>
              Don't have an account? <a href="">Sign up</a>{" "}
            </p>
          </div>
        </div>
      </>
    );
  }
}
