import React, { Component } from "react";
import "./LoginPage.css";

export default class SignupPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fname: "",
      lname: "",
      email: "",
      password: "",
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    const { fname, lname, email, password } = this.state;
    console.log(fname, lname, email, password);
    fetch("http://localhost:5000/register" , {
        method: "POST",
        crossDomain:true,
        headers:{
            'Content-Type':"application/json",
            Accept:"application/json",
            "Access-Control-Allow-Origin":"",
        },
        body:JSON.stringify({
            fname,
            email,
            lname,
            password
        })
    }).then((res)=>res.json())
    .then((data) =>{
        console.log(data, "userRegister");
    })
  }
  render() {
    return (
      <>
        <div class="form-box">
          <form class="form" onSubmit={this.handleSubmit}>
            <span class="title">Sign up</span>
            <div class="form-container">
              <input
                type="text"
                class="input"
                placeholder="First Name"
                onChange={(e) => this.setState({ fname: e.target.value })}
              />

              <input
                type="text"
                class="input"
                placeholder="Last Name"
                onChange={(e) => this.setState({ lname: e.target.value })}
              />

              <input
                type="email"
                class="input"
                placeholder="Email"
                onChange={(e) => this.setState({ email: e.target.value })}
              />

              <input
                type="password"
                class="input"
                placeholder="Password"
                autoComplete="on"
                onChange={(e) => this.setState({ password: e.target.value })}
              />
            </div>

            <button>Sign up</button>
          </form>
          <div class="form-section">
            <p>
              Have an account? <a href="">Log in</a>{" "}
            </p>
          </div>
        </div>
      </>
    );
  }
}
