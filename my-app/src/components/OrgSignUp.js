import React from "react";

class OrgSignUp extends React.Component {
  state = {
    oragnization: {
      email: "",
      username: "",
      password: "",
      org_name: "",
      org_description: ""
    }
  };

  handleChange = e => {
    this.setState({
      oragnization: {
        ...this.state.oragnization,
        [e.target.name]: e.target.value
      }
    });
  };

  render() {
    return (
      <div className="signup-container">
        <h1>Register An Organization</h1>
        <div className="s-box">
          <input
            type="text"
            name="email"
            value={this.state.oragnization.email}
            onChange={this.handleChange}
            placeholder="Email"
          />
        </div>

        <div className="s-box">
          <input
            type="text"
            name="username"
            value={this.state.oragnization.username}
            onChange={this.handleChange}
            placeholder="Username"
          />
        </div>

        <div className="s-box">
          <input
            type="password"
            name="password"
            value={this.state.oragnization.password}
            onChange={this.handleChange}
            placeholder="Password"
          />
        </div>

        <div>
          <input
            type="text"
            name="org_name"
            value={this.state.oragnization.org_name}
            onChange={this.handleChange}
            placeholder="Organization Name"
          />
        </div>
        <div>
          <input
            type="text"
            name="org_description"
            value={this.state.oragnization.org_description}
            onChange={this.handleChange}
            placeholder="Description"
          />
        </div>
        <button>Submit</button>
      </div>
    );
  }
}

export default OrgSignUp;
