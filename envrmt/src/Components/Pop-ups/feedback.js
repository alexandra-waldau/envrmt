import "./feedback.css";
import { Co2Avoided } from "../Challenge/challenge-status";

// Importing the Performance Feedback Emojis
import PosEmoji from "../../Assets/PosFeedbackEmoji.png";
import NegEmoji from "../../Assets/NegFeedbackEmoji.png";
import { AiOutlineCloud } from "react-icons/ai";

//this variable will be determined by what the user selects in the feedback window (1-5 globes). everything below 3 "globes" is "low", above is achieved
let performanceRating = 4;

const PerformanceFeedback = (props) => {
	return (
		<div className="feedback-card">
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
			<button className="primary button" id="secondaryButton">Done</button>
		</div>
	);
};

const FeedbackSwitcher = () => {
	if (performanceRating >= 3) {
		return (
			<PerformanceFeedback
				icon={PosEmoji}
				headline="Good Job!"
				text="Thank you for making a difference today"
				id="green"
			/>
		);
	} else if (performanceRating < 3) {
		return (
			<PerformanceFeedback
				icon={NegEmoji}
				headline="Small steps"
				text="Changing the world isn’t easy. Keep challenging yourself!"
				id="red"
			/>
		);
	}
};

export { FeedbackSwitcher }