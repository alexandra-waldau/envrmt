import React from "react";
import "../../Components/Create-Account/create-account.css";
import "./dashboard.css";
import { useState } from "react";
import { Link } from "react-router-dom";
import { FeedbackSwitcher } from "./Pop-ups/feedback";
import { ChallengeCard } from "./Challenge/challenge-status";
import { ChallengeCompletion } from "./Pop-ups/feedback";
import { ChallengeDetail } from "./Pop-ups/challenge-detail";
import { getUsername } from "../../Firebase/firebaseAuth";
import { Chart1, Chart2 } from "./Chart/dashboard-chart";

// icon imports
import { AiOutlinePlusCircle } from "react-icons/ai";
import { FiSettings } from "react-icons/fi";

//Putting together the home screen components
const Dashboard = () => {
	const [detailIsVisible, setDetailVisibility] = useState(false);
	const [ratingIsVisible, setRatingVisibility] = useState(false);
	const [feedbackIsVisible, setFeedbackVisibility] = useState(false);
	const [score, setScore] = useState(0);

	const toggleDetailPopUp = () => {
		setDetailVisibility(!detailIsVisible);
	};
	const toggleRatingPopUp = () => {
		setRatingVisibility(true);
		setDetailVisibility();
	};

	const exitRatingPopUp = () => {
		setRatingVisibility();
	};

	const toggleFeedbackPopUp = () => {
		setFeedbackVisibility(true);
		setRatingVisibility();
		setDetailVisibility();
	};

	const exitFeedbackPopUp = () => {
		setFeedbackVisibility();
	};

	const updateScore = (days) => {
		setScore(days);
	};

	let amount = 5.2;

	return (
		<div className="flexbox-container">
			<button className="settings icon">
				<Link to="/settings">
					<FiSettings className="icon" />
				</Link>
			</button>

			<h2 className="headline dashboard">Hello {getUsername()}!</h2>

			<Chart2 />

			<p className="text-co2savings">You saved <span className="text-co2savings green">{amount} kg</span> of Co2</p>

			<div className="flexbox-item">
				<div className="dashboard-your-challenges">Your Challenges:</div>
				<ChallengeCard toggle={() => toggleDetailPopUp()} />
				{detailIsVisible ? (
					<ChallengeDetail
						next={() => toggleRatingPopUp()}
						toggle={() => toggleDetailPopUp()}
					/>
				) : null}
				{ratingIsVisible ? (
					<ChallengeCompletion
						toggle={() => exitRatingPopUp()}
						score={updateScore}
						next={() => toggleFeedbackPopUp()}
					/>
				) : null}
				{feedbackIsVisible ? (
					<FeedbackSwitcher
						toggle={() => exitFeedbackPopUp()}
						score={score}
						avoidance="500"
					/>
				) : null}
			</div>
			<button className="extend-button">
				<Link className="extend-button" to="add-challenge">
					<AiOutlinePlusCircle className="plus-icon" /> Add Challenge{" "}
				</Link>
			</button>
		</div>
	);
};

export { Dashboard };
