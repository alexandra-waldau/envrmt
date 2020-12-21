import React from "react";
import speaker from "../../Assets/Icons/Speaker.svg";
import { GrClose } from "react-icons/gr";
import { Link } from "react-router-dom";

const BoardingIntro = (props) => {
	return (
		<div className="boarding-detail">
			<div className="boarding-management">
				<button className="boarding-cross">
					<GrClose />
				</button>
			</div>
			<img src={speaker} alt="speaker" />
			<h1>Nice to meet you!</h1>
			<h2>
				Let’s start out by defining your user profile. Based on a few questions
				targeted at your lifestyle, we will be providing you with challenges
				that fit your type!
			</h2>
			<button
				className="boarding-button"
				onClick={() => props.paginator(props.page + 1)}
			>
				Define Lifestyle
			</button>

			<button className="skip-button" onClick={() => props.paginator(10)}>
				<h3>Skip</h3>
			</button>
		</div>
	);
};

export { BoardingIntro };