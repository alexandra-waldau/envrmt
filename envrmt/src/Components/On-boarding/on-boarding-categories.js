import React from "react";
import { useState } from "react";
import "./on-boarding.css";
import bicycle from "../../Assets/Icons/Bicycle.svg";
import cart from "../../Assets/Icons/Cart.svg";
import food from "../../Assets/Icons/Food.svg";
import trash from "../../Assets/Icons/Trash.svg";
import { Link } from "react-router-dom";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../../Firebase/firebaseIndex";
import { updateOnboardingScore } from "../../Firebase/firestoreAPI";

const BoardingCategories = (props) => {
	const [user] = useAuthState(auth);
	const level = Math.round(props.sum / 8);

	return (
		<div className="boarding-detail">
			<div className="boarding-management"></div>
			<h1>Pick your first challenge</h1>
			<h2>
				We’ve now created a set of challenges that fit your lifestyle. Let’s get
				started with one of the categories below.
			</h2>
			<div className="boarding-category">
				<Link
					to="/dashboard"
					style={{ textDecoration: "none" }}
					onClick={() =>
						updateOnboardingScore(user.uid, level, "Transportation")
					}
				>
					<div className="boarding-align-category">
						<img src={bicycle} alt="bicycle" />
						<h4 className="category-label">Transport</h4>
					</div>
				</Link>
				<Link
					to="/dashboard"
					style={{ textDecoration: "none" }}
					onClick={() => updateOnboardingScore(user.uid, level, "Shopping")}
				>
					<div className="boarding-align-category">
						<img src={cart} alt="cart" />
						<h4>Habits</h4>
					</div>
				</Link>
				<Link
					to="/dashboard"
					style={{ textDecoration: "none" }}
					onClick={() => updateOnboardingScore(user.uid, level, "Food")}
				>
					<div className="boarding-align-category">
						<img src={food} alt="food" />
						<h4>Food</h4>
					</div>
				</Link>
				<Link
					to="/dashboard"
					style={{ textDecoration: "none" }}
					onClick={() => updateOnboardingScore(user.uid, level, "Waste")}
				>
					<div className="boarding-align-category">
						<img src={trash} alt="chatbox" />
						<h4>Recycling</h4>
					</div>
				</Link>
			</div>
			{/* <button className="boarding-button" onClick={props.toggle}>
					Let's go
				</button> */}
		</div>
	);
};

export { BoardingCategories };
