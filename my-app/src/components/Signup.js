import React from "react";
import axios from "axios";

class Login extends React.Component {
    state = {
        credentials: {
            email: "",
            username: "",
            password: "",
            role: []
        }
    };

    handleChange = e => {
        this.setState({
            credentials: {
                ...this.state.credentials,
                [e.target.name]: e.target.value
            }
        });
    };

    login = e => {
        // e.preventDefault();
        axios
          .post("https://save-the-animals-be.herokuapp.com/api/auth/register", {
            email: this.state.credentials.email,
            username: this.state.credentials.username,
            password: this.state.credentials.password,
            role: this.state.credentials.role
        })
        .then(response => {
            localStorage.setItem("token", response.data.payload)
        })
        .catch( error => console.log("ERROR", error ))
    };

    handleCheckedBoxes = e => {
        this.setState({
            credentials: {
                ...this.state.credentials,
            }
        })
    }

    render() {
        return (
            <div className="signup-container">
                <h1 className="s-h1">Sign Up Here</h1>
                <form onSubmit={this.login}>
                    <div className="s-box">
                        <input 
                            type="text"
                            name="email"
                            value={this.state.credentials.email}
                            onChange={this.handleChange}
                            placeholder="Enter Email..."
                        />
                    </div>

                    <div className="s-box">
                        <input
                            type="text"
                            name="username"
                            value={this.state.credentials.username}
                            onChange={this.handleChange}
                            placeholder="Enter Username"
                        />
                    </div>

                    <div className="s-box">
                        <input 
                            type="password"
                            name="password"
                            value={this.state.credentials.password}
                            onChange={this.handleChange}
                            placeholder="Enter Password"
                        />
                    </div>

                    <div className="s-box">
                        <input 
                            className="checkbox"
                            type="checkbox"
                            name="role"
                            value={this.state.credentials.role}
                        /> Organization
                    <span className="span"></span>
                        <input 
                                className="checkbox"
                                type="checkbox"
                                name="role"
                                value={this.state.credentials.role}
                        /> Supporter
                    </div>
                    <button>Submit</button>
                </form>
            </div>
        )
    }
}

export default Login;