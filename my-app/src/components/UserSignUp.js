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

    userSignup = e => {
        e.preventDefault();
        if (window.confirm('Thank you for registering. Please login to your new account.'))
        axios
          .post("https://save-the-animals-be.herokuapp.com/api/auth/register/supporter", {
            email: this.state.user.email,
            username: this.state.user.username,
            password: this.state.user.password,
            first_name: this.state.user.first_name,
            last_name: this.state.user.last_name
        })
        .then(response => {
            console.log(response);
        })
        .catch( error => console.log("ERROR", error ))
    };

    render() {
        return (

            <div className="signup-container">
                <h1 className="s-h1">user sign up form</h1>
                <form onSubmit={this.userSignup}>
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
                    <div className="s-box">
                        <input 
                            type="text"
                            name="first_name"
                            value={this.state.user.first_name}
                            onChange={this.handleChange}
                            placeholder="Last Name"
                        />
                    </div>
                    <div className="s-box">
                        <input 
                            type="text"
                            name="last_name"
                            value={this.state.user.last_name}
                            onChange={this.handleChange}
                            placeholder="First Name"
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