import React from "react";
import {Link} from "react-router-dom";

class Navigation extends React.Component {
    render() {
        return (
            <div className="nav-container">
                <a className="atags"  href="#">Home</a>
                <a className="atags"  href="#">About</a>
                <a className="atags"  href="#">Contact</a>
                <a className="atags"  href="/user-or-org">Sign Up</a>
                <a className="atags"  href="/sign-in">Sign In</a>
                <a className="atags"  href="list-campaigns">Campaigns</a>
            </div>
        )
    }
}

export default Navigation;