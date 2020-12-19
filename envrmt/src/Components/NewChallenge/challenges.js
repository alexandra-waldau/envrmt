import React, { useEffect, useState } from "react";
import "./challenges.css";
import { auth } from "../../Firebase/firebaseIndex"
import { useAuthState } from "react-firebase-hooks/auth";
import { Link } from "react-router-dom";
import { ChallengeDetails } from "./popup";
import { getAllChallenges, addActiveChallenge } from "../../Firebase/firestoreAPI";

// icon imports
import bicycle from "../../Assets/Icons/Bicycle.svg";
import food from "../../Assets/Icons/Food.svg";
import trash from "../../Assets/Icons/Trash.svg";
import cart from "../../Assets/Icons/Cart.svg";
import done_tick from "../../Assets/Icons/Done_tick.svg";

const NewChallenges = () => {
	const [list, updateList] = useState([]);
	const [detailIsVisible, setDetailVisibility] = useState(false);
	const [challengeDetail, showChallengeDetail] = useState([]);
	const [visibleChallenges, setVisibleChallenges] = useState(4);
	const [user] = useAuthState(auth);

	// get all existing challenges from the database
	async function getChallenges() {
		let challenges = await getAllChallenges.get();
		const data = challenges.docs.map((doc) => ({id: doc.id, data: doc.data()}));
		updateList(data);
	}

	// same effect as componentdidmount, runs after each render
	useEffect(() => {
		console.log("fetching");
		getChallenges();
	}, []);

	const togglePopUp = (challenge) => {
		setDetailVisibility(!detailIsVisible);
		showChallengeDetail(challenge);
	};

	const activateChallenge = () => {
		addActiveChallenge(user.uid, challengeDetail.id);
		setDetailVisibility(!detailIsVisible);
	}

	// For loading more challenges
	const showMoreChallenges = () => {
		setVisibleChallenges((visibleChallenges) => visibleChallenges + 4);
	};

	return (
		<div className="new-challenges">
			<div className="new-challenge-headline">
				<Link className="back-button" to="dashboard">
					<h5>Back</h5>
				</Link>
				<h1>New Challenge</h1>
			</div>
			<ul>
				{list.slice(0, visibleChallenges).map((item) => (
					<li className="btn">
						<div
							className="new-challenge-section"
							onClick={() => togglePopUp(item)}
							key={item.data.id}
						>
							<DisplayCategoryIcon category={item.data.category} />
							<div className="new-challenge-text">
								<h2>{item.data.title}</h2>
								<div className="new-challenge-description">
									<h3>{item.data.description}</h3>
								</div>
							</div>
						</div>
					</li>
				))}
			</ul>
			{detailIsVisible ? (
				<ChallengeDetails
					id={challengeDetail.id}
					toggle={() => activateChallenge()}
					category={challengeDetail.data.category}
					title={challengeDetail.data.title}
					descr={challengeDetail.data.description}
					co2={challengeDetail.data.avoidance}
				/>
			) : null}
			<div>
				<div className="more">
					<button className="more-button" onClick={showMoreChallenges}>
						<img
							className="more-button"
							src={done_tick}
							alt="See More Challenges"
						/>
						<h4>More</h4>
					</button>
				</div>
			</div>
		</div>
	);
};

const DisplayCategoryIcon = (props) => {
	switch (props.category) {
		case "Food":
			return <img src={food} alt="Food" />;
		case "Transportation":
			return <img src={bicycle} alt="Transportation" />;
		case "Waste":
			return <img src={trash} alt="waste" />;
		case "Shopping":
			return <img src={cart} alt="Shopping" />;
		default:
			return null;
	}
};

export { NewChallenges, DisplayCategoryIcon };
