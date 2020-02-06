import React from "react";
import axios from "axios";

class Login extends React.Component {
    state = {
        credentials: {
            email: '',
            password: ''
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
        e.preventDefault();
        axios
          .post("https://save-the-animals-be.herokuapp.com/api/auth/login", {
            email: this.state.credentials.email,
            password: this.state.credentials.password
        })
        .then(response => {
            console.log(response.data.token);
            localStorage.setItem("token", response.data.token);
            this.props.history.push("/protected")
        })
        .catch( error => console.log("ERROR", error ))
    };

    render() {
        return (
            <div className="login-container">
                <h1>Log In here</h1>
                <form onSubmit={this.login}>
                    <div className="login-box">
                    <input
                        type="text"
                        name="email"
                        value={this.state.credentials.email}
                        onChange={this.handleChange}
                        placeholder="Enter email"
                    />
                    </div>
                    <div className="login-box">
                    <input 
                        type="password"
                        name="password"
                        value={this.state.credentials.password}
                        onChange={this.handleChange}
                        placeholder="Enter Password"
                    />
                    </div>
                    <button className="login-button">Log In!</button>
                </form>
            </div>
        );
    };
};

export default Login;