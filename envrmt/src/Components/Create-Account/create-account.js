import React, { useState } from "react";
import "./create-account.css";

// icon imports
import { IoIosClose } from "react-icons/io";

const InputField = (props) => {
	const [firstName, setFirstName] = useState("");
	return (
		<div className="flexbox-credential">
			<input
				className="input-credentials"
				placeholder={props.label}
				value={firstName}
				onChange={(c) => setFirstName(c.target.value)}
			></input>
		</div>
	);
};

const SignUpButton = (props) => {
	return <button className="profileButton">Sign Up</button>;
};

const InputOptions = () => {
	return (
		<>
			<div className="flexbox-container">
				<div className="flexbox-item">
					<h1 className="primaryText" align="center">
						Sign Up
					</h1>
					<IoIosClose />
				</div>
				<div className="flexbox-item">
					<InputField label="First Name" />
					<InputField label="Last Name" />
					<InputField label="E-Mail" />
				</div>
				<div className="flexbox-item">
					<SignUpButton />
				</div>
			</div>
		</>
	);
};

export { InputField, InputOptions };