import React from "react";
import chatbox from "../../Assets/Icons/Chatbox.svg";
import "./on-boarding.css";

const Questionnaire = (props) => {
	return (
		<div className="boarding-detail">
			<div className="boarding-back-management">
				<button
					className="boarding-back"
					onClick={() => props.paginator(props.page - 1)}
				>
					Back
				</button>
			</div>
			<div className="position_h">
				<img src={chatbox} alt="chatbox" />
				<h1>{props.questions[0]}</h1>
			</div>

			<div className="buttons-positioning">
				<button
					className="boarding-buttons"
					onClick={() => {
						props.paginator(props.page + 1);
						props.updateSum(props.sum + 1);
					}}
				>
					{props.questions[1]}
				</button>
				<button
					className="boarding-buttons"
					onClick={() => {
						props.paginator(props.page + 1);
						props.updateSum(props.sum + 2);
					}}
				>
					{props.questions[2]}
				</button>
				<button
					className="boarding-buttons"
					onClick={() => {
						props.paginator(props.page + 1);
						props.updateSum(props.sum + 3);
					}}
				>
					{props.questions[3]}
				</button>
				<button
					className="boarding-buttons"
					onClick={() => {
						props.paginator(props.page + 1);
						props.updateSum(props.sum + 4);
					}}
				>
					{props.questions[4]}
				</button>
			</div>
		</div>
	);
};

export default Questionnaire;
