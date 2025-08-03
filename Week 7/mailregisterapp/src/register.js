import React, { Component } from "react";

const validEmailRegex = RegExp(
  /^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/i
);

class Register extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fullName: null,
      email: null,
      password: null,
      errors: {
        fullName: "",
        email: "",
        password: "",
      },
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  validateForm = (errors) => {
    let valid = true;
    Object.values(errors).forEach((val) => val.length > 0 && (valid = false));
    return valid;
  };

  handleChange = (event) => {
    event.preventDefault();
    const { name, value } = event.target;
    let errors = this.state.errors;

    switch (name) {
      case "fullName":
        errors.fullName =
          value.length < 5 ? "Full Name must be 5 characters long!" : "";
        break;
      case "email":
        errors.email = validEmailRegex.test(value) ? "" : "Email is not valid!";
        break;
      case "password":
        errors.password =
          value.length < 8 ? "Password must be 8 characters long!" : "";
        break;
      default:
        break;
    }

    this.setState({ errors, [name]: value });
  };

  handleSubmit = (event) => {
    event.preventDefault();

    if (this.validateForm(this.state.errors)) {
      alert("Valid Form");
    } else {
      if (this.state.errors.fullName !== "") {
        alert(this.state.errors.fullName);
      }
      if (this.state.errors.email !== "") {
        alert(this.state.errors.email);
      }
      if (this.state.errors.password !== "") {
        alert(this.state.errors.password);
      }
    }
  };

  render() {
    const { errors } = this.state;
    return (
      <div style={{ textAlign: "center", fontFamily: "sans-serif" }}>
        <h1 style={{ color: "red" }}>Register Here!!!</h1>
        <form onSubmit={this.handleSubmit} noValidate>
          <div style={{ marginBottom: "10px" }}>
            <label style={{ marginRight: "10px" }}>Name:</label>
            <input
              type="text"
              name="fullName"
              onChange={this.handleChange}
              noValidate
            />
          </div>
          <div style={{ marginBottom: "10px" }}>
            <label style={{ marginRight: "10px" }}>Email:</label>
            <input
              type="email"
              name="email"
              onChange={this.handleChange}
              noValidate
            />
          </div>
          <div style={{ marginBottom: "20px" }}>
            <label style={{ marginRight: "10px" }}>Password:</label>
            <input
              type="password"
              name="password"
              onChange={this.handleChange}
              noValidate
            />
          </div>
          <div>
            <button type="submit">Submit</button>
          </div>
        </form>
      </div>
    );
  }
}

export default Register;