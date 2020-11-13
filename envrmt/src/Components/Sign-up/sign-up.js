import React from 'react';
import './sign-up.css';

// icon imports 
import { FiMail } from 'react-icons/fi';
import { FcGoogle } from 'react-icons/fc';
import { FaFacebook } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { auth, googleSignUp } from '../../Firebase/firebaseIndex';

const LoginButton = (props) => {
    return <button className="sign-up button" id={props.id} onClick={props.popup}>{props.icon}<Link className="link" to={props.url}>Sign-up with {props.service}</Link></button>
}

const signInWithGoogle = () => auth.signInWithPopup(googleSignUp);

const SignUpOptions = () => {
    return (
    <div id="sign-up">
        <LoginButton id="email" icon={<FiMail/>} service="Email" url="/create-account"></LoginButton>
        <LoginButton id="facebook" icon={<FaFacebook/>} service="Facebook"/>
        <LoginButton id="google" icon={<FcGoogle/>} service="Google" popup={() => signInWithGoogle()}/>
    </div>
    );
}

export { LoginButton, SignUpOptions };

