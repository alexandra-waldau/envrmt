import React from 'react';
import "./settings.css";
import { Header } from "../Create-Account/create-account";
import signOutImage from "../../Assets/Sign_out.svg";
import { signOut } from "../../Firebase/firebaseIndex";

const onClickSettings = (event) => {
    event.preventDefault();
    signOut();
}

const Settings = () => {
    return (
        <div>
            <div className="headline settings">
                <Header text="Settings" />
            </div>
            <div className="flexbox">
                <img src={signOutImage} alt="sign-out image"/>
                <button onClick={(event) => onClickSettings(event)} className="settings item">
                    Sign out 
                </button>
                <button className="settings item">
                    Delete account
                </button>
            </div>
        </div>
    );
}

export { Settings }