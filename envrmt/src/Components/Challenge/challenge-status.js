// importing status circle
import { BsCircleFill } from "react-icons/bs";
// Importing the cloud for the icon of CO2
import { AiOutlineCloud } from "react-icons/ai";

//________________________________________________________________________________________
//The Challenge card container
const ChallengeCard = (props) => {
	return (
		<div className="container-challenge" onClick={props.toggle}>
			<StatusOptions />
			<p className="challenge-status" id={props.id}>
				{props.icon}
				{props.status}
			</p>
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
		<div>
			<p className="challenge-status" id={props.id}>
				{props.icon}
				{props.status}
			</p>
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
				icon={<BsCircleFill />}
				status=" Active"
			/>
		);
	} else if (challengeStatus == "done") {
		return (
			<div className="challenge-status">
				<ChallengeStatus id="done" icon={<BsCircleFill />} status=" Done" />
			</div>
		);
	} else {
		return (
			<ChallengeStatus id="failed" icon={<BsCircleFill />} status=" Failed" />
		);
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
