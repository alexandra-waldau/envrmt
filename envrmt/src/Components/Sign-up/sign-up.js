import React from "react";
import "./sign-up.css";

// Images import
import AppLogo from "../../Assets/EnvrmtLogo.svg";

// icon imports
import { FiMail } from "react-icons/fi";
import { FcGoogle } from "react-icons/fc";
import { FaFacebook } from "react-icons/fa";
import { Link } from "react-router-dom";
import { auth } from "../../Firebase/firebaseIndex";
import { googleSignUp, facebookSignUp } from "../../Firebase/firebaseAuth";

const LoginButton = (props) => {
	return (
		<button className="sign-up-button" id={props.id} onClick={props.popup}>
			{props.icon}
			<Link className="link" to={props.url}>
				Sign-up with {props.service}
			</Link>
		</button>
	);
};

const signInWithGoogle = () => auth.signInWithPopup(googleSignUp);

const signInWithFacebook = () => auth.signInWithPopup(facebookSignUp);

// TODO: fix placement of button icon
const SignUpOptions = () => {
	return (
		<div className="sign-up">
			<LoginButton
				id="email"
				icon={<FiMail className="buttonIcon" />}
				service="Email"
				url="/create-account"
			/>
			<LoginButton
				id="facebook"
				icon={<FaFacebook className="buttonIcon" />}
				service="Facebook"
				popup={() => signInWithFacebook()}
			/>
			<LoginButton
				id="google"
				icon={<FcGoogle className="buttonIcon" />}
				service="Google"
				popup={() => signInWithGoogle()}
			/>
		</div>
	);
};

const SignUpScreen = () => {
	return (
		<div className="login-screen">
			<div className="flexbox-container-start">
				<button className="login-button">
					<Link className="link" to="/log-in">
						Login
					</Link>
				</button>
				<img src={AppLogo} className="applogo" alt="logo" />
				<SignUpOptions />
			</div>
		</div>
	);
};

export { LoginButton, SignUpOptions, SignUpScreen };
