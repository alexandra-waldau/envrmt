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

import { getAllChallenges, getSpecific } from "../../Firebase/firestoreAPI";

// icon imports
import { AiOutlinePlusCircle } from "react-icons/ai";
import { FiSettings } from "react-icons/fi";

//delete later
// import { DisplayCategoryIcon } from "../NewChallenge/challenges";

//Putting together the home screen components
const Dashboard = () => {
	const [detailIsVisible, setDetailVisibility] = useState(false);
	const [ratingIsVisible, setRatingVisibility] = useState(false);
	const [feedbackIsVisible, setFeedbackVisibility] = useState(false);
	const [challengeDetail, showChallengeDetail] = useState([]);
	const [score, setScore] = useState(0);

	const toggleDetailPopUp = (challenge) => {
		setDetailVisibility(!detailIsVisible);
		showChallengeDetail(challenge);
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

	const [list, updateList] = useState([]);
	const activeChallengeIds = 9;
	async function getChallenges() {
		// get challenges collection from firestore
		let challenges = await getSpecific(activeChallengeIds);
		// create array of documents
		const data = challenges.docs.map((doc) => doc.data());
		updateList(data);
	}

	useEffect(() => {
		getChallenges();
		console.log("fetching");
	}, []);

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

				{list.map((item) => (
					<ChallengeCard
						toggle={() => toggleDetailPopUp(item)}
						avoidance={item.avoidance}
						category={item.category}
						title={item.title}
						description={item.description}
						duration={item.duration}
						id={item.id}
						level={item.level}
					/>
				))}

				{detailIsVisible ? (
					<ChallengeDetail
						title={challengeDetail.title}
						description={challengeDetail.description}
						duration={challengeDetail.duration}
						avoidance={challengeDetail.avoidance}
						category={challengeDetail.category}
						next={() => toggleRatingPopUp()}
						toggle={() => toggleDetailPopUp()}
						// pass on challenge's ID
					/>
				) : null}
				{ratingIsVisible ? (
					<ChallengeCompletion
						title={challengeDetail.title}
						description={challengeDetail.description}
						duration={challengeDetail.duration}
						avoidance={challengeDetail.avoidance}
						category={challengeDetail.category}
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
						avoidance={challengeDetail.avoidance}
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
