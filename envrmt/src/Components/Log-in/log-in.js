import React, { useState } from "react";
import "./log-in.css"
import { emailSignIn } from "../../Firebase/firebaseAuth";
import { Header } from "../Create-Account/create-account";
import { Link } from "react-router-dom";


const LogIn = () => {
    const[email, setMail] = useState("");
    const[password, setPassword] = useState("");
    const[error, setError] = useState("");

    const onSubmit = (event) => { 
        event.preventDefault();
        emailSignIn(email,password).then(response => setError(response));
    };

    return (
        <div className="flexbox-container">
            <Header text="Sign In" />
            <form className="flexbox-item" method="get" onSubmit={(e) => onSubmit(e)}>
			    <input type="email" className="input-credentials" value={email} onChange={(e) => setMail(e.target.value)} placeholder="Email address" />
			    <input type="password" className="input-credentials" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password" />
                <p className="message error">{error}</p>
                <button type="submit" className="submitButton">Log In</button>
                <Link className="forgot-password" to="forgot-password">Forgot password?</Link>
		    </form>
        </div>
    );
}

export { LogIn }