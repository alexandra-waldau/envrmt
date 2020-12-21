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
import {
	getUser,
	getProgress,
	getChallenge,
	finishChallenge,
	failChallenge,
	getFirstChallenge,
	addActiveChallenge,
} from "../../Firebase/firestoreAPI";

// icon imports
import { AiOutlinePlusCircle } from "react-icons/ai";
import { FiSettings } from "react-icons/fi";

//Putting together the home screen components
const Dashboard = () => {
	const [user] = useAuthState(auth);
	const [username, setUsername] = useState("");
	const [score, setScore] = useState(0);
	const [list, updateList] = useState([]);
	const [detailIsVisible, setDetailVisibility] = useState(false);
	const [ratingIsVisible, setRatingVisibility] = useState(false);
	const [feedbackIsVisible, setFeedbackVisibility] = useState(false);
	const [challengeDetail, showChallengeDetail] = useState([]);

	const [avoidance, setAvoidance] = useState(0);
	const [failed, setFailed] = useState(0);
	const [completed, setCompleted] = useState(0);

	const toggleDetailPopUp = (challenge) => {
		setDetailVisibility(!detailIsVisible);
		showChallengeDetail(challenge);
	};
	const toggleRatingPopUp = () => {
		setRatingVisibility(true);
		setDetailVisibility(false);
	};

	const exitRatingPopUp = () => {
		setRatingVisibility();
	};

	const removeChallenge = async (challengeId) => {
		await failChallenge(user.uid, challengeId);
		exitRatingPopUp();
		setProgress();
	};

	const toggleFeedbackPopUp = async (challengeid, tempAvoidance) => {
		await finishChallenge(user.uid, challengeid, tempAvoidance);
		setFeedbackVisibility(true);
		setRatingVisibility(false);
	};

	const exitFeedbackPopUp = () => {
		setFeedbackVisibility(false);
		setProgress();
	};

	const updateScore = (days) => {
		setScore(days);
	};

	const isActive = (active, id) => {
		return active.some((activeId) => activeId === id);
	};

	const setProgress = async () => {
		getProgress(user.uid).then((doc) => {
			if (doc.active.length !== 0 || doc.finished.length !== 0) {
				const all = doc.finished.concat(doc.active);
				const active = doc.active;
				getChallenge(all).then((challenges) => {
					const data = challenges.docs.map((doc) => ({
						active: isActive(active, doc.data().id),
						data: doc.data(),
					}));
					data.sort((a, b) => (a.active < b.active ? 1 : -1));
					updateList(data);
				});
			}
			setAvoidance(doc.avoided);
			setCompleted(doc.completed);
			setFailed(doc.failed);
			if (completed === 0 && doc.active.length === 0) {
				getFirstChallenge(user.uid).then((challenge) => {
					addActiveChallenge(user.uid, challenge.id);
					updateList([
						...list,
						{
							active: true,
							data: challenge,
						},
					]);
				});
			}
		});
	};

	useEffect(() => {
		getUser(user.uid).then((snapshot) => {
			const name = snapshot.name;
			const parts = name.split(/\s+/);
			setUsername("Hello " + parts[0] + "!");
		});
		console.log(user.uid);
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
			<Chart completed={completed} failed={failed} avoidance={avoidance} />
			<div className="challenge-item">
				<div className="dashboard-your-challenges">Your Challenges:</div>
				{list.map((item) => (
					<ChallengeCard
						status={item.active}
						toggle={() => toggleDetailPopUp(item.data)}
						avoidance={item.data.avoidance}
						category={item.data.category}
						title={item.data.title}
						description={item.data.description}
						duration={item.data.duration}
						id={item.data.id}
						level={item.data.level}
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
						id={challengeDetail.id}
						title={challengeDetail.title}
						description={challengeDetail.description}
						duration={challengeDetail.duration}
						avoidance={challengeDetail.avoidance}
						category={challengeDetail.category}
						toggle={() => exitRatingPopUp()}
						score={updateScore}
						next={toggleFeedbackPopUp}
						cancel={() => removeChallenge(challengeDetail.id)}
					/>
				) : null}
				{feedbackIsVisible ? (
					<FeedbackSwitcher
						toggle={() => exitFeedbackPopUp()}
						score={score}
						avoidance={challengeDetail.avoidance}
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
