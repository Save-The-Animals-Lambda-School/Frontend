import React from "react";
import {Link} from "react-router-dom";

class Navigation extends React.Component {
    render() {
        return (
            <div className="nav-container">
                <a href="https://pensive-bell-33a592.netlify.com/" className="atags">Home</a>
                <Link to ="/user-or-org" className="atags">Sign Up</Link>
                <Link to ="/login" className="atags">Sign In</Link>
                <Link to ="/protected" className="atags">Campaigns</Link>
            </div>
        )
    }
}

export default Navigation;