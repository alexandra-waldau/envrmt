import React, { useState } from "react";
import { emailSignUp } from "../../Firebase/firebaseIndex";
import "./create-account.css";

// icon imports
import { IoIosClose } from "react-icons/io";

const onSubmit = (email, password) => { 
	emailSignUp(email,password);
};

const Form = () => {

    const[name, setName] = useState("");
    const[email, setMail] = useState("");
	const[password, setPassword] = useState("");
    return (
        <form className="flexbox-item" method="get" onSubmit={() => onSubmit(email,password)}>
			<input type="text" className="input-credentials" value={name} onChange={(e) => setName(e.target.value)} placeholder="Name" />
			<input type="email" className="input-credentials" value={email} onChange={(e) => setMail(e.target.value)} placeholder="Email address" />
			<input type="password" className="input-credentials" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password" />
            <button type="submit" className="profileButton">Sign up</button>
		</form>
    );
}

const InputOptions = () => {
	return (
		<div className="flexbox-container">
			<div className="flexbox-item">
				<h1 className="primaryText" align="center">
					Sign Up
				</h1>
				<IoIosClose />
			</div>
            <Form/>
		</div>
	);
};

export { InputOptions };