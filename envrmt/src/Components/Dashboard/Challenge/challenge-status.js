import "../dashboard.css";

// icon imports
import { BsCircleFill } from "react-icons/bs";
import { AiOutlineCloud } from "react-icons/ai";

//The Challenge card container
const ChallengeCard = (props) => {
	return (
		<div className="container-challenge" onClick={props.toggle}>
			<div className="challenge-status" id={props.id}>
				<StatusOptions />
				{props.icon}
				{props.status}
			</div>
			<p className="challenge-title">Let’s take a ride together!</p>
			<p className="challenge-text">Take your bike to work for 5 days.</p>
			<Co2Avoided
				className="Co2-avoided"
				icon={<AiOutlineCloud />}
				avoidanceChallenge={avoidanceChallenge}
			/>
		</div>
	);
};

//Created variable to determine in which state the card shall be displayed
//It will be able to change to "active", "done" and "failed"
let challengeStatus = "done";

//Function for challenge status
const ChallengeStatus = (props) => {
	return (
		<div className="challenge-status" id={props.id}>
			<BsCircleFill className="challenge-status-circle" />
			<p className="challenge-status-text">{props.status}</p>
		</div>
	);
};

//How the card will be displayed will depend on challengeStatus variable -if statement to determine it
const StatusOptions = () => {
	if (challengeStatus == "active") {
		return (
			<ChallengeStatus
				className="challenge-status"
				id="active"
				status=" Active"
			/>
		);
	} else if (challengeStatus == "done") {
		return (
			<div className="challenge-status">
				<ChallengeStatus id="done" status=" Done" />
			</div>
		);
	} else {
		return <ChallengeStatus id="failed" status=" Failed" />;
	}
};

//Value of Co2 avoided so far with the challenges, defined with a let because it's determined by each user.
let avoidanceChallenge = 20;

//Bottom message of how much Co2 is avoided by completing this challenge
const Co2Avoided = (props) => {
	return (
		<p className="Co2-avoided" id={props.id}>
			{props.icon} {props.avoidanceChallenge} g of Co2
		</p>
	);
};

export { ChallengeCard, Co2Avoided };
