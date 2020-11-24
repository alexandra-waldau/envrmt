import React from 'react';
import "./settings.css";
import { Header } from "../Create-Account/create-account";
import signOutImage from "../../Assets/Sign_out.svg";
import { signOut, deleteAccount } from "../../Firebase/firebaseIndex";

const onClickSettingsSignOut = (event) => {
    event.preventDefault();
    signOut();
}

const onClickSettingsDeleteAccount = (event) => {
    event.preventDefault();
    deleteAccount();
}

const Settings = () => {
    return (
        <div>
            <div className="headline settings">
                <Header text="Settings" />
            </div>
            <div className="flexbox">
                <img src={signOutImage} alt="sign-out image"/>
                <button onClick={(event) => onClickSettingsSignOut(event)} className="settings item">
                    Sign out 
                </button>
                <button className="settings item" onClick={(event) => onClickSettingsDeleteAccount(event)}>
                    Delete account
                </button>
            </div>
        </div>
    );
}

export { Settings }