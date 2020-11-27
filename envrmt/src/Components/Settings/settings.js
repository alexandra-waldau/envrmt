import React from 'react';
import "./settings.css";
import { Header } from "../Create-Account/create-account";
import signOutImage from "../../Assets/Sign_out.svg";
import { signOut } from "../../Firebase/firebaseIndex";
import { DeleteAccountPopUp } from "../Pop-ups/DeleteAccountPopUp.js";
import { useState } from "react";

const onClickSettingsSignOut = (event) => {
    event.preventDefault();
    signOut();
}

const Settings = () => {

    const[visible, setVisibility] = useState(false);

    const togglePopUp = () => {
        setVisibility(!visible);

    }
    
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
                <button className="settings item" onClick={() => togglePopUp()}>
                    Delete account
                 </button>
                 {visible ? <DeleteAccountPopUp toggle={() => togglePopUp()}/> : null}
            </div>
        </div>
    );
}

export { Settings }