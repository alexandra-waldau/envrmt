import React, { useState } from "react";
import { emailSignIn } from "../../Firebase/firebaseIndex";
import { Header } from "../Create-Account/create-account";

const onSubmit = (event,email,password) => { 
    event.preventDefault();
    emailSignIn(email,password);
};

const LogIn = () => {
    const[email, setMail] = useState("");
	const[password, setPassword] = useState("");
    return (
        <div className="flexbox-container">
            <Header text="Sign In" />
            <form className="flexbox-item" method="get" onSubmit={(e) => onSubmit(e,email,password)}>
			    <input type="email" className="input-credentials" value={email} onChange={(e) => setMail(e.target.value)} placeholder="Email address" />
			    <input type="password" className="input-credentials" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password" />
                <button type="submit" className="profileButton">Log In</button>
		    </form>
        </div>
    );
}

export { LogIn }