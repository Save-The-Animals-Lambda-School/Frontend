import React from "react";
import {Link} from "react-router-dom"

const UserOrg = () => {
    return (
        <div className="userorg-container">

            <div>
            <h1>Want to be a user?</h1>
            <Link to="/sign-up"><button>Click Here!</button></Link>
            </div>

            <div>
                <h1>Want to start an Organization?</h1>
            <Link to="/org-signup"><button>Click Here!</button></Link>
            </div>

        </div>
    )
}

export default UserOrg;