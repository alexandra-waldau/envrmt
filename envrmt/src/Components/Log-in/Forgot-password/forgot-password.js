import React, {useState} from "react";
import { forgotPassword } from "./../../../Firebase/firebaseAuth";
import "./../../../Components/Log-in/Forgot-password/forgot-password.css"
import { Link } from "react-router-dom";
import { GrClose } from "react-icons/gr";
import PosEmoji from "./../../../Assets/PosFeedbackEmoji.png";


const onSubmit = (event, email) => { 
    event.preventDefault();
    forgotPassword(email);
};


const ResetPassword = (props) => {
    const[email, setMail] = useState("");
    const [visible, setVisibility] = useState(false);

	const togglePopUp = () => {
		setVisibility(!visible);
	};
    
    return(
        <div className="reset-password">
            <div className="resetpw-headline">
                <Link className="back-button-rp" to="log-in" >
                    <h5>Back</h5>
                </Link>
                <h1>Reset password</h1>
            </div>
        <div className="flexbox-container">
            <p className="rp text">Insert the email that is connected to your account and we'll send you an email to reset your password.</p>
            <form className="flexbox-item" method="get" onSubmit={(e) => onSubmit(e,email)}>
                <input type="email" className="rp email" value={email} onChange={(e) => setMail(e.target.value)} placeholder="Email address" />
                <button type="submit" className="profileButton" onClick={() => togglePopUp()}>Reset my password</button> 
                {visible ? <ResetPwPopUp toggle={() => togglePopUp()} /> : null}        
            </form>  
        </div>
        </div>
    )
}


function ResetPwPopUp(props) {
    return (
      <div className="overlay">
        <div className="container-popup">
          <button className='close-cross' onClick={props.toggle}><GrClose /></button>
          <img className="popup-image"src={PosEmoji}></img>
          <p className="popup-text">We just sent you an email to reset your password. Go check your inbox to keep saving the planet!</p>
          <button className="done-button" onClick={props.toggle}>Done</button>
        </div>
      </div>
    );
  }
  

export {ResetPassword};