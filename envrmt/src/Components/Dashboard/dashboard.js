import React from "react";
import "../../Components/Create-Account/create-account.css";
import "./dashboard.css";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { ChallengeCard } from "./Challenges/challenge-status";
import { ChallengeCompletion, FeedbackSwitcher } from "./Pop-ups/feedback";
import { ChallengeDetail } from "./Pop-ups/challenge-detail";
import { Chart } from "./Chart/dashboard-chart";
import { auth } from "../../Firebase/firebaseIndex";
import { useAuthState } from "react-firebase-hooks/auth";
import { getUser, getProgress, getChallenge } from "../../Firebase/firestoreAPI";

// icon imports
import { AiOutlinePlusCircle } from "react-icons/ai";
import { FiSettings } from "react-icons/fi";

//Putting together the home screen components
const Dashboard = () => {
	const [user] = useAuthState(auth);
	const [username, setUsername] = useState(""); 
	const [score, setScore] = useState(0);
	const [detailIsVisible, setDetailVisibility] = useState(false);
	const [ratingIsVisible, setRatingVisibility] = useState(false);
	const [feedbackIsVisible, setFeedbackVisibility] = useState(false);
	const [challengeDetail, showChallengeDetail] = useState([]);
	const [list, updateList] = useState([]);

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

	const setProgress = async () => {
		getProgress(user.uid).then((doc) => {
			if (doc.active.length !== 0) {
				getChallenge(doc.active).then((challenges) => {
					const data = challenges.docs.map((doc) => doc.data());
					updateList(data);
				})
			}
			//get me the completed score => doc.completed
		})
	}

	useEffect(() => {
		getUser(user.uid).then((snapshot) => {
			const name = snapshot.name;
			const parts = name.split(/\s+/);
			setUsername("Hello " + parts[0] + "!");
		})
		setProgress();
	}, []);

	return (
		<div className="flexbox-container">
			<button className="settings icon">
				<Link to="/settings">
					<FiSettings className="icon" />
				</Link>
			</button>
			<h2 className="headline dashboard">{username}</h2>
			{/* if user has no challenges, show "<Chart1 />" */}
			<Chart />
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
