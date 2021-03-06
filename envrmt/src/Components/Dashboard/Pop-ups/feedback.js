import { useState } from "react";
import Rating from "react-rating";

import "./feedback.css";
import { Co2Avoided } from "../Challenges/challenge-status";
import { DisplayCategoryIcon } from "./challenge-detail";

//icon imports
import PosEmoji from "../../../Assets/PosFeedbackEmoji.png";
import NegEmoji from "../../../Assets/NegFeedbackEmoji.png";
import { AiOutlineCloud } from "react-icons/ai";
import { GrClose } from "react-icons/gr";
import { ImEarth } from "react-icons/im";

const EarthRating = (props) => {
	const [days, setDays] = useState(0);
	return (
		<div className="rating">
			<p className="instructions">Click on the globes to tell how you did</p>
			<Rating
				onClick={(value) => {
					setDays(value);
					props.score(value);
					props.getRating(value);
				}}
				initialRating={days}
				emptySymbol={<ImEarth className="rating-icon" />}
				fullSymbol={<ImEarth className="rating-icon active" />}
			/>
			<p className="days-text">{days}/5 challenge success</p>

		</div>
	);
};

const ChallengeCompletion = (props) => {
	const [rating, getRating] = useState(0);
	const tempAvoidance = (rating / 5) * props.avoidance;
	console.log(tempAvoidance);
	return (
		<div className="overlay">
			<div className="container-challenge-detail">
				<button className="close-cross" onClick={props.toggle}>
					<GrClose />
				</button>
				<DisplayCategoryIcon category={props.category} />
				<p className="challenge-name-detail">{props.title}</p>
				<p className="challenge-description-detail">{props.description}</p>
				<EarthRating score={props.score} getRating={getRating} />
				<button
					className="challenge-button"
					onClick={() => props.next(props.id, tempAvoidance)}
				>
					Done
				</button>
				<p className="failed-challenge" onClick={props.cancel}>
					I failed this challenge
				</p>
			</div>
		</div>
	);
};

const PerformanceFeedback = (props) => {
	//set kind of like: db.collection(users).docs(currentUserId).update(avoidance=props.avoidance)
	return (
		<div className="overlay">
			<div className="container-challenge-detail">
				<img className="feedback-emoji" src={props.icon} alt="emoji"></img>
				<p className="feedback-card-title">{props.headline}</p>
				<p className="feedback-card-text" id="gray">
					{props.text}
				</p>
				<div id="feedback-card-co2avoidance">
					<Co2Avoided
						className="Co2-avoided"
						icon={<AiOutlineCloud />}
						avoidanceChallenge={Math.round((props.avoidance + Number.EPSILON) * 100) / 100}
						id={props.id}
					/>
				</div>
				<button className="challenge-button" onClick={props.toggle}>
					Done
				</button>
			</div>
		</div>
	);
};

const FeedbackSwitcher = (props) => {
	let performanceRating = props.score;
	if (performanceRating >= 3) {
		return (
			<PerformanceFeedback
				toggle={props.toggle}
				icon={PosEmoji}
				headline="Good Job!"
				text="Thank you for making a difference today!"
				id="positive"
				avoidance={props.avoidance * (performanceRating / 5)}
			/>
		);
	} else if (performanceRating < 3) {
		return (
			<PerformanceFeedback
				toggle={props.toggle}
				icon={NegEmoji}
				headline="Small steps"
				text="Changing the world isn’t easy. Keep challenging yourself!"
				id="negative"
				avoidance={props.avoidance * (performanceRating / 5)}
			/>
		);
	}
};

export { FeedbackSwitcher, ChallengeCompletion };
