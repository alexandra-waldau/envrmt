import React, { useState } from "react";
import { emailSignUp } from "../../Firebase/firebaseIndex";
import { Link } from 'react-router-dom';
import "./create-account.css";

// icon imports
import { IoIosClose } from "react-icons/io";

const onSubmit = (event,email,password) => { 
	event.preventDefault();
	emailSignUp(email,password);
};

const Header = (props) => {
	return (
	<div className="flexbox-header">
		<button className="back-button">
			<Link to="/sign-up">
				<IoIosClose id="leftNavItem"/> 
			</Link>
		</button>
		<div className="primaryText">{props.text}</div>
	</div>
	);
}

const Form = () => {
    const[name, setName] = useState("");
    const[email, setMail] = useState("");
	const[password, setPassword] = useState("");
    return (
        <form className="flexbox-item" method="get" onSubmit={(e) => onSubmit(e,email,password)}>
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
			<Header text="Sign up" />
            <Form />
		</div>
	);
};

export { InputOptions, Header };