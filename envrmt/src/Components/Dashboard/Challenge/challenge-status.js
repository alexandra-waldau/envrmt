import "./challenge-status.css";

// icon imports
import { BsCircleFill } from "react-icons/bs";
import { AiOutlineCloud } from "react-icons/ai";

//The Challenge card container
const ChallengeCard = (props) => {
	return (
		<div className="container-challenge" onClick={props.toggle}>
			<StatusOptions status="active" />
			<div className="container-challenge-text">
				<p className="challenge-title">{props.title}</p>
				<p className="challenge-description">{props.description}</p>
				<Co2Avoided avoidanceChallenge={props.avoidance} />
			</div>
		</div>
	);
};

//How the card will be displayed will depend on challengeStatus variable -if statement to determine it
const StatusOptions = (props) => {
	if (props.status == "active") {
		return <ChallengeStatus id="active" status=" active" />;
	} else if (props.statusprops.status == "done") {
		return <ChallengeStatus id="done" status=" done" />;
	}
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

//Value of Co2 avoided so far with the challenges, defined with a let because it's determined by each user.
let avoidanceChallenge = 20;

//Bottom message of how much Co2 is avoided by completing this challenge
const Co2Avoided = (props) => {
	return (
		<p className="Co2-avoided" id={props.id}>
			<AiOutlineCloud /> {props.avoidanceChallenge}kg of CO<sub>2</sub>
		</p>
	);
};

export { ChallengeCard, Co2Avoided };
