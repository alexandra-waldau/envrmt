import React from "react";
import { useState } from "react";
import "../../Components/Create-Account/create-account.css";
import "./dashboard.css";
import { FeedbackSwitcher } from "../Pop-ups/feedback";
import { ChallengeCard } from "../Challenge/challenge-status";

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

//Standard dashboard - page 1 --
const Stats = () => {
	return (
		<div className="container-dashboard">
			<p className="dashboard-picture">
				<BsCircleFill />
			</p>
			<div id="dashboard-data">
				<DashboardData
					id="challenge-success"
					icon={<FiTarget />}
					avoidance={challengeSuccess}
					achievement={challengeSuccessText}
				/>
				<DashboardData
					id="co2-avoided"
					icon={<AiOutlineCloud />}
					avoidance={co2Avoidance}
					achievement={co2AvoidanceText}
				/>
				<p className="dashboard-three-dots">
					{" "}
					<BsCircleFill id="active" />
					<BsCircleFill id="inactive" /> <BsCircleFill id="inactive" />
				</p>
			</div>
		</div>
	);
};

//Function for the distribution of the data on the dashboard1
const DashboardData = (props) => {
	return (
		<p className="dashboard-data" id={props.id}>
			{" "}
			{props.icon} {props.avoidance} {props.achievement}
		</p>
	);
};

//Standard dashboard - page 2 -- explaining how much has been avoided in human terms (example 1)
const Dashboard2 = () => {
	return (
		<div className="container-dashboard">
			<img className="dashboard-picture" src={PlanePicture}></img>
			<div id="dashboard-data">
				<p className="dashboard-main-text">{inOtherWords}</p>
				<p className="dashboard-secondary-text">
					{youAvoided} <b>{whatAvoided}</b>
				</p>
				<p className="dashboard-three-dots">
					{" "}
					<BsCircleFill id="inactive" /> <BsCircleFill id="active" />{" "}
					<BsCircleFill id="inactive" />
				</p>
			</div>
		</div>
	);
};

//Dashboard for the user that skips questions
const DashboardForSkip = () => {
	return (
		<div className="container-dashboard">
			<img className="dashboard-picture-skip" src={SkipPicture}></img>
			<p className="dashboard-main-text">No completed challenges</p>
			<p className="dashboard-secondary-text">
				Complete your first challenge and track your progress here
			</p>
		</div>
	);
};

//________________________________________________________________________________________
//Putting together the home screen components
const Dashboard = () => {
    const[visible, setVisibility] = useState(false);

    const togglePopUp = () => {
        setVisibility(!visible);
    }

	return (
			<div className="flexbox-container">
				{/* <FeedbackSwitcher /> */}
				{/* <div className="feedback-overlay" /> */}
				<div className="flexbox-item">
					<div className="primaryText">Hello, Lisa!</div>
				</div>
				<div className="flexbox-item">
					<Default/>
				</div>
				<div className="flexbox-item">
					<div className="secondaryText">Your Challenges:</div>
					<div className="flexbox-item">
						<ChallengeCard toggle={() => togglePopUp()}/>
					</div>
				</div>
                <button className="extend-button">
			        <AiOutlinePlusCircle className="plus-icon"/>
                    Add Challenge
                </button>
                {visible ? <ChallengeDetail toggle={() => togglePopUp()}/> : null}
			</div>
	);
};

export { Dashboard };