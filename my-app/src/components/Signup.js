import React from "react";
import axios from "axios";

class Login extends React.Component {
    state = {
        credentials: {
            email: "",
            username: "",
            password: "",
            role: [
                organization,
                supporter
            ]
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

    render() {
        return (
            <div>
                <h1>Sign Up Here</h1>
                <form>
                    <input 
                        type="text"
                        name="email"
                        value={this.state.credentials.email}
                        onChange={this.handleChange}
                        placeholder="Enter Email..."
                    />
                    <input
                        type="text"
                        name="username"
                        value={this.state.credentials.username}
                        onChange={this.handleChange}
                        placeholder="Enter Username"
                    />
                    <input 
                        type="password"
                        name="password"
                        value={this.state.credentials.password}
                        onChange={this.handleChange}
                        placeholder="Enter Password"
                    />
                    <input 
                        type="checkbox"
                        name="role"
                        value={this.state.credentials.role}
                    /> Organization
                    <input 
                            type="checkbox"
                            name="role"
                            value={this.state.credentials.role}
                    /> Supporter
                </form>
            </div>
        )
    }
}