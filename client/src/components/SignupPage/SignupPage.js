import React, { Component } from "react";
import "./SignupPage.css";
import { Link } from "react-router-dom";

export default class SignupPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fname: "",
      lname: "",
      email: "",
      password: "",
    };
    this.handleSubmit = this.handleSubmit.bind(this); // ensure that the this context within the handleSubmit function refers to the component instance.
  }

  // function is responsible for handling form submission and making a POST request to the server.
  handleSubmit(e) {
    e.preventDefault();
    const { fname, lname, email, password } = this.state;
    console.log(fname, lname, email, password);
    fetch("http://localhost:5000/register" , {
        method: "POST",
        crossDomain:true,   //to ensure that the server allows cross-origin requests.
        headers:{
            'Content-Type':"application/json",
            Accept:"application/json",
            "Access-Control-Allow-Origin":"https://localhost:3000",
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
                onChange={(e) => this.setState({ fname: e.target.value })} // updates the fname with the new value entered by the user.
              />

              <input
                type="text"
                class="input"
                placeholder="Last Name"
                onChange={(e) => this.setState({ lname: e.target.value })} // updates the lname with the new value entered by the user.
              />

              <input
                type="email"
                class="input"
                placeholder="Email"
                onChange={(e) => this.setState({ email: e.target.value })} // updates the email with the new value entered by the user.
              />

              <input
                type="password"
                class="input"
                placeholder="Password"
                autoComplete="on"
                onChange={(e) => this.setState({ password: e.target.value })} // updates the password with the new value entered by the user.
              />
            </div>

            <button>Sign up</button>
          </form>
          <div class="form-section">
            <p>
              Have an account? <Link to ='/loginpage'>Log in</Link>
            </p>
          </div>
        </div>
      </>
    );
  }
}
