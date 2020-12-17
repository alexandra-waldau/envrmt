import React from "react";
import "../../Components/Create-Account/create-account.css";
import "./dashboard.css";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FeedbackSwitcher } from "./Pop-ups/feedback";
import { ChallengeCard } from "./Challenge/challenge-status";
import { ChallengeCompletion } from "./Pop-ups/feedback";
import { ChallengeDetail } from "./Pop-ups/challenge-detail";
import { getUsername } from "../../Firebase/firebaseAuth";
import { Chart1, Chart2 } from "./Chart/dashboard-chart";

import { getAllChallenges } from "../../Firebase/firestoreAPI";

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

	// const displayActives = () => {};

	const [list, updateList] = useState([]);

	async function getChallenges() {
		// get challenges collection from firestore
		let challenges = await getAllChallenges.get();
		// create array of documents
		const data = challenges.docs.map((doc) => doc.data());
		updateList(data);
	}

	useEffect(() => {
		getChallenges();
		console.log("fetching");
	}, []);

	const tempList = [
		{ id: 1, activeChallenges: [1, 2] },
		{ id: 2, activeChallenges: [3, 4] },
	];

	const temp = [1, 2, 3, 4, 5, 6];
	const temp2 = tempList
		.filter((e) => e.id === 1)
		.map((i) => <li>{i.activeChallenges}</li>);

	return (
		<div className="flexbox-container">
			<button className="settings icon">
				<Link to="/settings">
					<FiSettings className="icon" />
				</Link>
			</button>
			<h2 className="headline dashboard">Hello {getUsername()}!</h2>

			{/* if user has no challenges, show "<Chart1 />" */}
			<Chart2 />

			<div className="flexbox-item">
				<div className="dashboard-your-challenges">Your Challenges:</div>

				<ChallengeCard toggle={() => toggleDetailPopUp()} />

				{detailIsVisible ? (
					<ChallengeDetail
						next={() => toggleRatingPopUp()}
						toggle={() => toggleDetailPopUp()}
						// pass on challenge's ID
					/>
				) : null}
				{ratingIsVisible ? (
					<ChallengeCompletion
						toggle={() => exitRatingPopUp()}
						score={updateScore}
						next={() => toggleFeedbackPopUp()}
						// pass on challenge's ID
					/>
				) : null}
				{feedbackIsVisible ? (
					<FeedbackSwitcher
						toggle={() => exitFeedbackPopUp()}
						score={score}
						avoidance="500" //make obsolete
						// pass on challenge's ID
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
