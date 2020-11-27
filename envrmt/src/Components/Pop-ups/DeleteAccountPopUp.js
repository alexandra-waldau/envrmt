import "./DeleteAccountPopUp.css";
import SadFace from "./../../Assets/Sad.png";
import { deleteAccount } from "../../Firebase/firebaseIndex.js";
import {GrClose} from 'react-icons/gr';

const onClickSettingsDeleteAccount = (event) => {
    event.preventDefault();
    deleteAccount();
}

function DeleteAccountPopUp(props) {
  return (
    <div className="overlay">
      <div className='CardDeleteAccount'>
        <button className='close-cross' onClick={props.toggle}><GrClose /></button>
        <img src={SadFace} alt="sad face" className="EmojiDeleteAccountPopUp"></img>
        <h2 className="DeleteAccountElement Question">Are you sure you want to delete your account?</h2>
        <button className="DeleteAccountElement StayButton" onClick={props.toggle}>Keep saving the planet!</button>
        <button className="DeleteAccountElement DeleteButton" onClick={(event) => onClickSettingsDeleteAccount(event)}>Yes, delete my account</button>
      </div>
    </div>
  );
}


export {DeleteAccountPopUp}