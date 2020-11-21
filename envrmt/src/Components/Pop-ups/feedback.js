import { useState } from "react";

import "./feedback.css";
import { Co2Avoided } from "../Challenge/challenge-status";
import { CategoryText } from "./challenge-detail";

// Importing the Performance Feedback Emojis
import PosEmoji from "../../Assets/PosFeedbackEmoji.png";
import NegEmoji from "../../Assets/NegFeedbackEmoji.png";
import { AiOutlineCloud } from "react-icons/ai";
//import icon for close button
import { GrClose } from "react-icons/gr";

//importing icons for categories
import { AiOutlineShoppingCart } from "react-icons/ai";
import { ImEarth } from "react-icons/im";
//defining categories
const shoppingText = "Shopping";
let days = 4;

const ChallengeCompletion = (props) => {
	return (
		<div className="overlay">
			<div className="container-challenge-detail">
				<button className="close-cross" onClick={props.toggle}>
					<GrClose />
				</button>
				<AiOutlineShoppingCart className="category-icon" />
				<CategoryText text={shoppingText} />
				<p className="challenge-name-detail">#Challenge Name</p>
				<p className="challenge-description-detail">
					Description of challenge (maximum 2 lines)
				</p>
				<p className="days-text">{days} days</p>
				<RatingIcons score={props.score} />
				<button className="done-button" onClick={props.next}>
					Done
				</button>
				<p className="failed-challenge">I failed this challenge</p>
			</div>
		</div>
	);
};

const RatingIcon = () => {
	const [active, setActive] = useState(false);

	const toggleActivation = () => {
		setActive(!active);
	};

	return (
		<div className="rating-icon">
			{active ? (
				<ImEarth className="active" onClick={() => toggleActivation()} />
			) : (
				<ImEarth onClick={() => toggleActivation()} />
			)}
		</div>
	);
};

const RatingIcons = (props) => {
	return (
		<div className="rating-icons">
			<RatingIcon />
			<RatingIcon />
			<RatingIcon />
			<RatingIcon />
			<RatingIcon />
		</div>
	);
};

//this variable will be determined by what the user selects in the feedback window (1-5 globes). everything below 3 "globes" is "low", above is achieved
const Performance = (props) => {
	const [performanceRating, setPerformanceRating] = useState(false);
};

const PerformanceFeedback = (props) => {
	return (
		<div className="overlay">
			<div className="container-challenge-detail">
				<img className="feedback-emoji" src={props.icon}></img>
				<p className="tertiaryText feedback-card-title">{props.headline}</p>
				<p className="quartiaryText feedback-card-text" id="gray">
					{props.text}
				</p>
				<p className="quartiaryText">
					<Co2Avoided
						className="Co2-avoided"
						icon={<AiOutlineCloud />}
						avoidanceChallenge="500"
						id={props.id}
					/>
				</p>
				<button className="done-button" onClick={props.toggle}>
					Done
				</button>
			</div>
		</div>
	);
};

const FeedbackSwitcher = (props) => {
	let performanceRating = 4;
	if (performanceRating >= 3) {
		return (
			<PerformanceFeedback
				toggle={props.toggle}
				icon={PosEmoji}
				headline="Good Job!"
				text="Thank you for making a difference today"
				id="positive"
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
			/>
		);
	}
};

export { FeedbackSwitcher, ChallengeCompletion };
