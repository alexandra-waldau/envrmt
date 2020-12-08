import React, {useState} from "react";
import { forgotPassword } from "./../../../Firebase/firebaseAuth";
import "./../../../Components/Log-in/Forgot-password/forgot-password.css"
import { Link } from "react-router-dom";

const onSubmit = (event, email) => { 
    event.preventDefault();
    forgotPassword(email);
};


const ResetPassword = () => {
    const[email, setMail] = useState("");
    return(
        <div>
        <Link className="back" to="log-in" >
            <h5>Back</h5>
        </Link>
        <div className="flexbox-container">
            <h1>Reset your password</h1>
            <p className="rp text">Insert the email that is connected to your account and we'll send you an email to reset your password.</p>
            <form className="flexbox-item" method="get" onSubmit={(e) => onSubmit(e,email)}>
                <input type="email" className="rp email" value={email} onChange={(e) => setMail(e.target.value)} placeholder="Email address" />
                <button type="submit" className="profileButton">Reset my password</button>
            </form>
        </div>
        </div>
    )
}

export {ResetPassword};