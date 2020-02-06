import React from "react";
import axios from "axios";

class OrgSignUp extends React.Component {
  state = {
    organization: {
      email: "",
      username: "",
      password: "",
      org_name: "",
      org_description: ""
    }
  };

  handleChange = e => {
    this.setState({
      organization: {
        ...this.state.organization,
        [e.target.name]: e.target.value
      }
    });
  };

  orgSignUp = e => {
    e.preventDefault();
    if (window.confirm('Thank you for registering. Please login to your new account.'))
    axios
      .post("https://save-the-animals-be.herokuapp.com/api/auth/register/organization", {
        email: this.state.organization.email,
        username: this.state.organization.username,
        password: this.state.organization.password,
        org_name: this.state.organization.org_name,
        org_description: this.state.organization.org_description
    })
    .then(response => {
        console.log(response)
    })
    .catch( error => console.log("ERROR", error ))
};

  render() {
    return (
      <div className="signup-container">
        <h1>Register An Organization</h1>
        <form onSubmit={this.orgSignUp}>
        <div className="s-box">
          <input
            type="text"
            name="email"
            value={this.state.organization.email}
            onChange={this.handleChange}
            placeholder="Email"
          />
        </div>

        <div className="s-box">
          <input
            type="text"
            name="username"
            value={this.state.organization.username}
            onChange={this.handleChange}
            placeholder="Username"
          />
        </div>

        <div className="s-box">
          <input
            type="password"
            name="password"
            value={this.state.organization.password}
            onChange={this.handleChange}
            placeholder="Password"
          />
        </div>

        <div>
          <input
            type="text"
            name="org_name"
            value={this.state.organization.org_name}
            onChange={this.handleChange}
            placeholder="Organization Name"
          />
        </div>
        <div>
          <input
            type="text"
            name="org_description"
            value={this.state.organization.org_description}
            onChange={this.handleChange}
            placeholder="Description"
          />
        </div>
        <button>Submit</button>
        </form>
      </div>
    );
  }
}

export default OrgSignUp;
