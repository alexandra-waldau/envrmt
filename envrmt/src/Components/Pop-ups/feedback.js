import { useState } from "react";
import Rating from "react-rating";

import "./feedback.css";
import { Co2Avoided } from "../Challenge/challenge-status";
import { CategoryText } from "./challenge-detail";

//icon imports
import PosEmoji from "../../Assets/PosFeedbackEmoji.png";
import NegEmoji from "../../Assets/NegFeedbackEmoji.png";
import { AiOutlineCloud } from "react-icons/ai";
import { GrClose } from "react-icons/gr";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { ImEarth } from "react-icons/im";
//defining categories
const shoppingText = "Shopping";
let feedback = 0;

const ChallengeCompletion = (props) => {
	const [days, setDays] = useState(0);
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
				<Rating
					onChange={(value) => {
						props.score(value);
						setDays(value);
					}}
					className="rating"
					emptySymbol={<ImEarth className="rating-icon" />}
					fullSymbol={<ImEarth className="rating-icon active" />}
				/>
				<button className="done-button" onClick={props.next}>
					Done
				</button>
				<p className="failed-challenge">I failed this challenge</p>
			</div>
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
				<p className="feedback-card-title">{props.headline}</p>
				<p className="feedback-card-text" id="gray">
					{props.text}
				</p>
				<div id="feedback-card-co2avoidance">
					<Co2Avoided
						className="Co2-avoided"
						icon={<AiOutlineCloud />}
						avoidanceChallenge={props.avoidance}
						id={props.id}
					/>
				</div>
				<button className="done-button" onClick={props.toggle}>
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
				text="Thank you for making a difference today"
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
