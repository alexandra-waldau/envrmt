import React from "react";
import "./settings.css";
import {Link} from 'react-router-dom';
import signOutImage from "../../Assets/Sign_out.svg";
import { signOut } from "../../Firebase/firebaseAuth";
import { DeleteAccountPopUp } from "./Pop-ups/DeleteAccountPopUp.js";
import { useState } from "react";

const onClickSettingsSignOut = (event) => {
	event.preventDefault();
	signOut();
};

const Settings = () => {
	const [visible, setVisibility] = useState(false);

	const togglePopUp = () => {
		setVisibility(!visible);
	};

	return (
		<div className="settings">
			<div className="settings-back">
				<Link className="back-button-settings" to="dashboard">
					<h5>Back</h5>
				</Link>
				<h1>Settings</h1>
			</div>
			<div className="flexbox">
				<img
					className="signout-image"
					src={signOutImage}
					alt="sign-out"
				/>
				<button
					onClick={(event) => onClickSettingsSignOut(event)}
					className="settings item"
				>
					Sign out
				</button>
				<button className="settings item" onClick={() => togglePopUp()}>
					Delete account
				</button>
				{visible ? <DeleteAccountPopUp toggle={() => togglePopUp()} /> : null}
			</div>
		</div>
	);
};

export { Settings };
