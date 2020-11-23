import React from "react";
import { useState } from "react";
import "../../Components/Create-Account/create-account.css";
import "./dashboard.css";
import { FeedbackSwitcher } from "../Pop-ups/feedback";
import { ChallengeCard } from "../Challenge/challenge-status";
import { ChallengeCompletion } from "../Pop-ups/feedback";

// icon imports
import { AiOutlinePlusCircle } from "react-icons/ai";

// image imports
import LevelPicture from "../../Assets/LevelPicture.png";
import { ChallengeDetail } from "../Pop-ups/challenge-detail";
import { Link } from "react-router-dom";

let dashboardLevel = "Beginner";
let dashboardLevelText =
	"You have not done much for the climate yet, but we'll give you good ideas to get started!";

//First dashboard the user sees before they complete any challenge
const Default = () => {
	return (
		<div className="container-dashboard">
			<img className="dashboard-picture-level" src={LevelPicture}></img>
			<p className="dashboard-main-text">{dashboardLevel}</p>
			<p className="dashboard-secondary-text">{dashboardLevelText}</p>
		</div>
	);
};

//________________________________________________________________________________________
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

	const updateScore = (props) => {
		setScore(props);
	};

	return (
		<div className="flexbox-container">
			{/* <FeedbackSwitcher /> */}
			{/* <div className="feedback-overlay" /> */}
			<div className="flexbox-item">
				<div className="primaryText">Hello, Lisa!</div>
			</div>
			<div className="flexbox-item">
				<Default />
			</div>
			<div className="flexbox-item">
				<div className="dashboard-your-challenges">Your Challenges:</div>
				<div className="flexbox-item">
					<ChallengeCard toggle={() => toggleDetailPopUp()} />
				</div>
				{detailIsVisible ? (
					<ChallengeDetail
						next={() => toggleRatingPopUp()}
						toggle={() => toggleDetailPopUp()}
					/>
				) : null}
				{ratingIsVisible ? (
					<ChallengeCompletion
						toggle={() => exitRatingPopUp()}
						score={() => updateScore()}
						next={() => toggleFeedbackPopUp()}
					/>
				) : null}
				{feedbackIsVisible ? (
					<FeedbackSwitcher toggle={() => exitFeedbackPopUp()} />
				) : null}
			</div>

			<button className="extend-button">
				<Link className="extend-button" to="add-challenge">
					<AiOutlinePlusCircle className="plus-icon" /> Add Challenge{" "}
				</Link>
			</button>

			{/* ________ Why is this here? ________ */}
			{/* {detailIsVisible ? (
				<ChallengeDetail
					next={() => toggleRatingPopUp()}
					toggle={() => toggleDetailPopUp()}
				/>
			) : null}
			{ratingIsVisible ? (
				<ChallengeCompletion toggle={() => exitRatingPopUp()} />
			) : null} */}
		</div>
	);
};

export { Dashboard };
