import React from "react";
import axios from "axios";
import {Link} from "react-router-dom";

class UserSignUp extends React.Component {
    state = {
        user: {
            email: "",
            username: "",
            password: "",
            first_name: "",
            last_name: ""
        }
    };

    handleChange = e => {
        this.setState({
            user: {
                ...this.state.user,
                [e.target.name]: e.target.value
            }
        })
    };

    userLogin = e => {
        axios
          .post("https://save-the-animals-be.herokuapp.com/api/auth/register/supporter", {
            email: this.state.user.email,
            username: this.state.user.username,
            password: this.state.user.password,
        })
        .then(response => {
            localStorage.setItem("token", response.data.payload)
        })
        .catch( error => console.log("ERROR", error ))
    };

    render() {
        return (

            <div className="signup-container">
                <h1 className="s-h1">user sign up form</h1>
                <form onSubmit={this.userLogin}>
                    <div className="s-box">
                        <input 
                            type="text"
                            name="email"
                            value={this.state.user.email}
                            onChange={this.handleChange}
                            placeholder="Enter Email..."
                        />
                    </div>

                    <div className="s-box">
                        <input
                            type="text"
                            name="username"
                            value={this.state.user.username}
                            onChange={this.handleChange}
                            placeholder="Enter Username"
                        />
                    </div>

                    <div className="s-box">
                        <input 
                            type="password"
                            name="password"
                            value={this.state.user.password}
                            onChange={this.handleChange}
                            placeholder="Enter Password"
                        />
                    </div>
                    <button>Submit</button>
                    <div>
                        <p>Want to be an organization? Click <Link to="/org-signup"><button>here</button></Link></p>
                    </div>
                </form>
            </div>
        )
    }
}

export default UserSignUp;