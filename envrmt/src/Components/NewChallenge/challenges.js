import React from "react";
import { useState } from "react";
import bicycle from "../Icons/Bicycle.svg";
import food from "../Icons/Food.svg";
import trash from "../Icons/Trash.svg";
import cart from "../Icons/Cart.svg";
import done_tick from "../Icons/Done_tick.svg";
import divider from "../Icons/Divider.svg";
import "./challenges.css";
import { ChallengeDetails } from "./popup";
import { Link } from "react-router-dom";

const Challenges = () => {
	const [visible, setVisibility] = useState(false);

	const togglePopUp = () => {
		setVisibility(!visible);
	};

	return (
		<div className="new-challenges">
			<div className="new-challenge-headline">
				<Link className="back-button" to="dashboard">
					<h5>Back</h5>
				</Link>
				<h1>New Challenge</h1>
			</div>
			<div className="new-challenge-section">
				<img src={bicycle} alt="bicycle" />
				<div className="new-challenge-text">
					<h2>Chu-chuu</h2>
					<h3>
						Taking the train not only gives you more personal space than most
						planes, it...
					</h3>
					<img src={divider} alt="divider" />
				</div>
			</div>
			<div className="btn">
				<div className="new-challenge-section" onClick={() => togglePopUp()}>
					<img src={food} alt="food" />
					<div className="new-challenge-text">
						<h2>As good as guacamole</h2>
						<h3>
							Try these alternatives to Avocado when prepping for the next BBQ.
						</h3>
						<img src={divider} alt="divider" />
					</div>
				</div>
			</div>
			<div className="new-challenge-section">
				<img src={trash} alt="trash" />
				<div className="new-challenge-text">
					<h2>Don’t be dump</h2>
					<h3>
						Before throwing out small stuff, consider reusing it. Check out
						these cool recy...
					</h3>
					<img src={divider} alt="divider" />
				</div>
			</div>
			<div className="new-challenge-section">
				<img src={cart} alt="cart" />
				<div className="new-challenge-text">
					<h2>I’m gonna pop some tags</h2>
					<h3>
						Shop in thrift stores the next time you’re with the fashionistas.{" "}
					</h3>
					<img src={divider} alt="divider" />
				</div>
			</div>

			<div className="more">
				<img src={done_tick} alt="done_tick" />
				<h4>More</h4>
			</div>
			{visible ? <ChallengeDetails toggle={() => togglePopUp()} /> : null}
		</div>
	);
};

export { Challenges };
