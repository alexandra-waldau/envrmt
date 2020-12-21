import React from "react";
import { useState } from "react";
import "./on-boarding.css";

import { BsCircleFill } from "react-icons/bs";
import { BoardingCategories } from "./on-boarding-categories";
import { q1, q2, q3, q4, q5, q6, q7, q8 } from "./questions";
import Questionnaire from "./questionnaire";
import { BoardingIntro } from "./boarding-intro";
import { auth, db } from "../../Firebase/firebaseIndex";
import { useAuthState } from "react-firebase-hooks/auth";

const Boarding = () => {
	const [page, setPage] = useState(1);
	const [sum, updateSum] = useState(0);

	const displayPage = () => {
		switch (page) {
			case 1:
				return <BoardingIntro page={page} paginator={setPage} />;

			case 2:
				return (
					<Questionnaire
						page={page}
						paginator={setPage}
						sum={sum}
						updateSum={updateSum}
						questions={q1}
					/>
				);
			case 3:
				return (
					<Questionnaire
						page={page}
						paginator={setPage}
						sum={sum}
						updateSum={updateSum}
						questions={q2}
					/>
				);
			case 4:
				return (
					<Questionnaire
						page={page}
						paginator={setPage}
						sum={sum}
						updateSum={updateSum}
						questions={q3}
					/>
				);
			case 5:
				return (
					<Questionnaire
						page={page}
						paginator={setPage}
						sum={sum}
						updateSum={updateSum}
						questions={q4}
					/>
				);
			case 6:
				return (
					<Questionnaire
						page={page}
						paginator={setPage}
						sum={sum}
						updateSum={updateSum}
						questions={q5}
					/>
				);
			case 7:
				return (
					<Questionnaire
						page={page}
						paginator={setPage}
						sum={sum}
						updateSum={updateSum}
						questions={q6}
					/>
				);
			case 8:
				return (
					<Questionnaire
						page={page}
						paginator={setPage}
						sum={sum}
						updateSum={updateSum}
						questions={q7}
					/>
				);
			case 9:
				return (
					<Questionnaire
						page={page}
						paginator={setPage}
						sum={sum}
						updateSum={updateSum}
						questions={q8}
					/>
				);
			case 10:
				return (
					<BoardingCategories
						page={page}
						paginator={setPage}
						sum={sum}
						updateSum={updateSum}
					/>
				)
		}
	};

	console.log("sum of user is: " + sum);

	return (
		<div className="boarding">
			{displayPage()}
			<div className="chartFlip">
				<BsCircleFill
					className="boardingCircles"
					style={{
						color: page === 1 ? "#2E7242" : "F0F0F0",
					}}
				/>

				<BsCircleFill
					className="boardingCircles"
					style={{
						color: page === 2 ? "#2E7242" : "F0F0F0",
					}}
				/>

				<BsCircleFill
					className="boardingCircles"
					style={{
						color: page === 3 ? "#2E7242" : "F0F0F0",
					}}
				/>

				<BsCircleFill
					className="boardingCircles"
					style={{
						color: page === 4 ? "#2E7242" : "F0F0F0",
					}}
				/>
				<BsCircleFill
					className="boardingCircles"
					style={{
						color: page === 5 ? "#2E7242" : "F0F0F0",
					}}
				/>
				<BsCircleFill
					className="boardingCircles"
					style={{
						color: page === 6 ? "#2E7242" : "F0F0F0",
					}}
				/>
				<BsCircleFill
					className="boardingCircles"
					style={{
						color: page === 7 ? "#2E7242" : "F0F0F0",
					}}
				/>
				<BsCircleFill
					className="boardingCircles"
					style={{
						color: page === 8 ? "#2E7242" : "F0F0F0",
					}}
				/>
				<BsCircleFill
					className="boardingCircles"
					style={{
						color: page === 9 ? "#2E7242" : "F0F0F0",
					}}
				/>
				<BsCircleFill
					className="boardingCircles"
					style={{
						color: page === 10 ? "#2E7242" : "F0F0F0",
					}}
				/>
			</div>
		</div>
	);
};

export { Boarding };
