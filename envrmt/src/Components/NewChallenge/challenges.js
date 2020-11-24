import React, { Component } from "react";
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
import { map } from "jquery";
import { render } from "@testing-library/react";

class NewChallenges extends Component {
	constructor() {
		super();
		this.state = {
			newEntries: [],
			// lastIndex: 0,
		};
	}

	//specific react lifecycle method
	//"when the component MOUNTS/runs, this receives data from the spec'ed json file"
	// even tho data is stored in the public folder, upon rendering the data will be in this component's directory
	componentDidMount() {
		fetch("./newChallenges.json")
			.then((response) => response.json())
			.then((result) => {
				const nwCh = result.map((item) => {
					return item;
				});
				this.setState({
					newEntries: nwCh,
				});
			});
	}

	render() {
		return (
			<div>
				<DisplayNewChallenges display={this.state.newEntries} />
			</div>
		);
	}
}

class DisplayNewChallenges extends Component {
	//make below to sth class compatible
	// const [visible, setVisibility] = useState(false);

	// const togglePopUp = () => {
	// 	setVisibility(!visible);
	// };

	constructor() {
		super();
		this.state = {
			visible: false,
		};
	}

	togglePopUp() {
		this.setState((prevState) => ({
			visible: !prevState.visible,
		}));
	}

	render() {
		return (
			<div className="new-challenges">
				<div className="new-challenge-headline">
					<Link className="back-button" to="dashboard">
						<h5>Back</h5>
					</Link>
					<h1>New Challenge</h1>
				</div>
				{this.props.display.map((item) => (
					<div className="btn">
						<div
							className="new-challenge-section"
							onClick={() => this.togglePopUp()}
						>
							{item.category == "Food" ? (
								<img src={food} alt="Food" />
							) : item.category == "Transportation" ? (
								<img src={bicycle} alt="Transportation" />
							) : item.category == "Waste" ? (
								<img src={trash} alt="waste" />
							) : item.category == "Shopping" ? (
								<img src={cart} alt="Shopping" />
							) : null}
							<div className="new-challenge-text">
								<h2>{item.title}</h2>
								<h3>{item.description}</h3>
								<img src={divider} alt="divider" />
							</div>
						</div>
					</div>
				))}
				<div className="more">
					<img src={done_tick} alt="See More Challenges" />
					<h4>More</h4>
				</div>
				{this.state.visible ? (
					<ChallengeDetails toggle={() => this.togglePopUp()} />
				) : null}
			</div>
		);
	}
}

export { NewChallenges };
