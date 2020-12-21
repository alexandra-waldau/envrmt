import "./challenge-status.css";

// icon imports
import { BsCircleFill } from "react-icons/bs";
import { AiOutlineCloud } from "react-icons/ai";

//The Challenge card container
const ChallengeCard = (props) => {
	return (
		<div className="container-challenge" onClick={props.status ? props.toggle: null}>
			<StatusOptions status={props.status} />
			<div className="container-challenge-text">
				<p className="challenge-title">{props.title}</p>
				<p className="challenge-description">{props.description}</p>
				<Co2Avoided avoidanceChallenge={props.avoidance} />
			</div>
		</div>
	);
};

//How the card will be displayed will depend on challengeStatus variable
const StatusOptions = (props) => {
	return (props.status ? <ChallengeStatus id="active" status=" active" /> :
								<ChallengeStatus id="done" status=" done" />
	);
};

//Function for challenge status
const ChallengeStatus = (props) => {
	return (
		<div className="challenge-status" id={props.id}>
			<BsCircleFill className="challenge-status-circle" />
			<p className="challenge-status-text">{props.status}</p>
		</div>
	);
};

//Bottom message of how much Co2 is avoided by completing this challenge
const Co2Avoided = (props) => {
	return (
		<p className="Co2-avoided" id={props.id}>
			<AiOutlineCloud className="cloud-icon" /> {props.avoidanceChallenge}kg of CO<sub>2</sub>
		</p>
	);
};

export { ChallengeCard, Co2Avoided };
