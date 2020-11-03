import React, { useState } from "react";
import { emailSignUp } from "../../Firebase/firebaseIndex";
import "./create-account.css";

// icon imports
import { IoIosClose } from "react-icons/io";

const InputField = (props) => {
	const [input, setInput] = useState("");
	return (
		<div className="flexbox-credential">
			<input
				className="input-credentials"
				value={input}
                onChange={(c) => {setInput(c.target.value); props.signup(input)} }
                placeholder={props.placeholder}
			></input>
		</div>
	);
};

const Form = () => {
    const[name, setName] = useState("");
    const[email, setMail] = useState("");
    const[password, setPassword] = useState("");
    return (
        <form className="flexbox-item">
			<InputField placeholder="Name" signup={name => setName(name)}/>
			<InputField placeholder="Email address" signup={mail => setMail(mail)} />
			<InputField placeholder="Password" signup={password => setPassword(password)}/>
            <SignUpButton email={email} pwd={password}/>
		</form>
    );
}

const SignUpButton = (props) => {
	return <button className="profileButton" onClick={() => emailSignUp(props.email, props.pwd)}>Sign Up</button>;
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
                <Form/>
			</div>
		</>
	);
};

export { InputField, InputOptions };