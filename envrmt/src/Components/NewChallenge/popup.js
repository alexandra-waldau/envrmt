import React from "react";
import "./popup.css";
import { DisplayCategoryIcon } from "./challenges";

// icon imports
import { GrClose } from "react-icons/gr";

const ChallengeDetails = (props) => {

	return (
		<div className="overlay-challenge">
			<div className="container-challenge-detail">
				<button className="close-cross" onClick={props.toggleC}>
					<GrClose />
				</button>
				<DisplayCategoryIcon category={props.category} />
				<h1>{props.title}</h1>
				<h2>{props.descr}</h2>
				<h3>-{props.co2}kg of C02</h3>
				<button className="challenge-button" onClick={props.toggle}>
					Activate challenge
				</button>
			</div>
		</div>
	);
};

export { ChallengeDetails };
