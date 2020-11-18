import React from "react";
import { useState } from "react";
import "../../Components/Create-Account/create-account.css";
import "./dashboard.css";
import { FeedbackSwitcher } from "../Pop-ups/feedback";
import { ChallengeCard } from "../Challenge/challenge-status";
import { ChallengeCompletion } from "../Pop-ups/feedback";

// icon imports
// importing status circle
import { BsCircleFill } from "react-icons/bs";
// Importing the cloud for the icon of CO2
import { AiOutlineCloud } from "react-icons/ai";
import { AiOutlinePlusCircle } from "react-icons/ai";
// icons for dashboard
import { FiTarget } from "react-icons/fi";

// image imports
// Importing dashboard static pictures - will most likely be placed on firebase
import LevelPicture from "../../Assets/LevelPicture.png";
import SkipPicture from "../../Assets/SkipPicture.png";
import PlanePicture from "../../Assets/PlanePicture.png";
import { ChallengeDetail } from "../Pop-ups/challenge-detail";
import { Link } from "react-router-dom";

//________________________________________________________________________________________
//importing data from Firebase? - variables are created. Const for hardcoded and let for those depending on user performance
let dashboardLevel = "Beginner";
let dashboardLevelText =
	"You have not done much for the climate yet, but we'll give you good ideas to get started!";
let challengeSuccess = 0;
const challengeSuccessText = " challenge success";
let co2Avoidance = 0;
const co2AvoidanceText = "Co2 avoidance";
const inOtherWords = "In other words...";
const youAvoided = "You avoided ";
let whatAvoided = "a flight from Copenhagen to Paris";

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
				<button className="extend-button">
					<AiOutlinePlusCircle className="plus-icon" />
					<Link className="extend-button" to="add-challenge">
						{" "}
						Add Challenge{" "}
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
			<button className="extend-button">
				<AiOutlinePlusCircle className="plus-icon" />
				Add Challenge
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
