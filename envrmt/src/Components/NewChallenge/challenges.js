import React, { useEffect, useState } from "react";
import "./challenges.css";
import { ChallengeDetails } from "./popup";
import { Link } from "react-router-dom";
import { getAllChallenges } from "../../Firebase/firestoreAPI";

// icon imports
import bicycle from "../../Assets/Icons/Bicycle.svg";
import food from "../../Assets/Icons/Food.svg";
import trash from "../../Assets/Icons/Trash.svg";
import cart from "../../Assets/Icons/Cart.svg";
import done_tick from "../../Assets/Icons/Done_tick.svg";

// TODO: challenge detail is always the same
const NewChallenges = () => {
	const [list, updateList] = useState([]);
	const [detailIsVisible, setDetailVisibility] = useState(false);
	const [challengeDetail, showChallengeDetail] = useState([]);

	// get all existing challenges from the database
	async function getChallenges() {
		// get challenges collection from firestore
		let challenges = await getAllChallenges.get();
		// create array of documents
		const data = challenges.docs.map((doc) => doc.data());
		updateList(data);
	}

	// same effect as componentdidmount, runs after each render
	useEffect(() => {
		getChallenges();
		console.log("fetching");
	}, []);

	const togglePopUp = (challenge) => {
		setDetailVisibility(!detailIsVisible);
		showChallengeDetail(challenge);
	};

	//For loading more challenges
	const [visibleChallenges, setVisibleChallenges] = useState(4);

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
							key={item.chId}
						>
							<DisplayCategoryIcon category={item.category} />
							<div className="new-challenge-text">
								<h2>{item.title}</h2>
								<div className="new-challenge-description">
									<h3>{item.description}</h3>
								</div>
							</div>
						</div>
					</li>
				))}
			</ul>
			{detailIsVisible ? (
				<ChallengeDetails
					toggle={() => togglePopUp()}
					category={challengeDetail.category}
					title={challengeDetail.title}
					descr={challengeDetail.description}
					co2={challengeDetail.avoidance}
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
