import React from "react";
import speaker from "../../Assets/Icons/Speaker.svg";

const BoardingIntro = (props) => {
	return (
		<div className="boarding-detail intro">
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
