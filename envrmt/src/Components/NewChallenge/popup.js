import React, { Component } from "react";
import "./popup.css";
import { GrClose } from "react-icons/gr";
import food_g from "../Icons/Food_green.svg";

const ChallengeDetails = (props) => {
	return (
		<div className="overlay-challenge">
			<div className="container-challenge-detail">
				<button className="close-cross" onClick={props.toggle}>
					<GrClose />
				</button>
				<img src={food_g} alt="pizza" />
				{/* <h4>{props.category}</h4> */}
				<h1>{props.title}</h1>
				<h2>{props.descr}</h2>
				<h3>
					Aioli <br />
					Salsa <br /> Herb dip
				</h3>
				<h3>{props.co2}</h3>
				<button className="challenge-button" onClick={props.toggle}>
					Activate challenge
				</button>
			</div>
		</div>
	);
};

export { ChallengeDetails };
