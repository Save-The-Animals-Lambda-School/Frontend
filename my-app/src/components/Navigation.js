import React from "react";
import {Link} from "react-router-dom";

class Navigation extends React.Component {
    render() {
        return (
            <div className="nav-container">
                <Link to ="#" className="atags">Home</Link>
                <Link to ="#" className="atags">About</Link>
                <Link to ="#" className="atags">Contact</Link>
                <Link to ="/user-or-org" className="atags">Sign Up</Link>
                <Link to ="/sign-in" className="atags">Sign In</Link>
                <Link to ="/" className="atags">Campaigns</Link>
            </div>
        )
    }
}

export default Navigation;