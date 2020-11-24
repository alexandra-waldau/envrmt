import React from "react";
import { useState } from "react";
import "../../Components/Create-Account/create-account.css";
import "./dashboard.css";
import { FeedbackSwitcher } from "../Pop-ups/feedback";
import { ChallengeCard } from "../Challenge/challenge-status";
import { ChallengeCompletion } from "../Pop-ups/feedback";
import { ChallengeDetail } from "../Pop-ups/challenge-detail";
import { Link } from "react-router-dom";

// icon imports
import { AiOutlinePlusCircle } from "react-icons/ai";
import { FiSettings } from "react-icons/fi";

// image imports
import LevelPicture from "../../Assets/LevelPicture.png";

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

//Putting together the home screen components
const Dashboard = () => {
	const [detailIsVisible, setDetailVisibility] = useState(false);
	const [ratingIsVisible, setRatingVisibility] = useState(false);

	const toggleDetailPopUp = () => {
		setDetailVisibility(!detailIsVisible);
	};
	const toggleRatingPopUp = () => {
		setRatingVisibility(!ratingIsVisible);
		toggleDetailPopUp();
	};

	const exitRatingPopUp = () => {
		setRatingVisibility();
	};

	return (
		<div className="flexbox-container">
			{/* <FeedbackSwitcher /> */}
			{/* <div className="feedback-overlay" /> */}
			<button className="settings icon">
				<Link to="/settings">
					<FiSettings className="icon" />
				</Link>
			</button>
			<h2 className="headline dashboard">Hello, Lisa!</h2>
			<div className="flexbox-item">
				<Default />
			</div>
			<div className="flexbox-item">
				<div className="dashboard-your-challenges">Your Challenges:</div>
				<div className="flexbox-item">
					<ChallengeCard toggle={() => toggleDetailPopUp()} />
				</div>
			</div>
			<button className="extend-button">
				<AiOutlinePlusCircle className="plus-icon" />
				<Link className="extend-button" to="add-challenge">
					Add Challenge
				</Link>
			</button>
			{detailIsVisible ? (
				<ChallengeDetail
					next={() => toggleRatingPopUp()}
					toggle={() => toggleDetailPopUp()}
				/>
			) : null}
			{ratingIsVisible ? (
				<ChallengeCompletion toggle={() => exitRatingPopUp()} />
			) : null}
		</div>
	);
};

export { Dashboard };
