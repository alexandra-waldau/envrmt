import "./challenge-detail.css";
// import "../../../Components/NewChallenge/popup.css";

import bicycle from "../../../Assets/Icons/Transportation_green.svg";
import food from "../../../Assets/Icons/Food_green.svg";
import trash from "../../../Assets/Icons/Waste_green.svg";
import cart from "../../../Assets/Icons/Shopping_green.svg";

import { GrClose } from "react-icons/gr";
import { BsStopwatch } from "react-icons/bs";
import { AiOutlineCloud } from "react-icons/ai";

//defining categories
const shoppingText = "Shopping";

const CategoryText = (props) => {
	return <p className="category-text">{props.text}</p>;
};

//Challenge detailed card with button
const ChallengeDetail = (props) => {
	return (
		<div className="overlay">
			<div className="container-challenge-detail">
				<button className="close-cross" onClick={props.toggle}>
					<GrClose />
				</button>
				<DisplayCategoryIcon category={props.category} />
				<p className="challenge-name-detail">{props.title}</p>
				<p className="challenge-description-detail">{props.description}</p>
				<p className="challenge-duration"></p>
				<p className="challenge-avoidance">
					<AiOutlineCloud />
					{props.avoidance}kg of CO<sub>2</sub>
				</p>
				<button className="challenge-button" onClick={props.next}>
					Challenge completed
				</button>
			</div>
		</div>
	);
};

const DisplayCategoryIcon = (props) => {
	switch (props.category) {
		case "Food":
			return <img className="category-icon" src={food} alt="Food" />;
		case "Transportation":
			return (
				<img className="category-icon" src={bicycle} alt="Transportation" />
			);
		case "Waste":
			return <img className="category-icon" src={trash} alt="waste" />;
		case "Shopping":
			return <img className="category-icon" src={cart} alt="Shopping" />;
		default:
			return null;
	}
};

export { ChallengeDetail, CategoryText, DisplayCategoryIcon };
