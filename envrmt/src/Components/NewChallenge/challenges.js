import React, { Component } from "react";
import "./challenges.css";
import { ChallengeDetails } from "./popup";
import { Link } from "react-router-dom";

//icon imports
import bicycle from "../../Assets/Icons/Bicycle.svg";
import food from "../../Assets/Icons/Food.svg";
import trash from "../../Assets/Icons/Trash.svg";
import cart from "../../Assets/Icons/Cart.svg";
import done_tick from "../../Assets/Icons/Done_tick.svg";

class NewChallenges extends Component {
	constructor() {
		super();
		this.state = {
			newEntries: [],
			lastIndex: 0,
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
					item.chId = this.state.lastIndex;
					this.setState({ lastIndex: this.state.lastIndex + 1 });
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
	constructor() {
		super();
		this.state = {
			visible: false,
			category: "",
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
				<ul>
					{this.props.display.map((item) => (
						<>
							<li className="btn">
								<div
									className="new-challenge-section"
									onClick={() => this.togglePopUp()}
									key={item.chId}
								>
									{/* {<img src={food} />} */}
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
									</div>
								</div>
								{this.state.visible ? (
									<ChallengeDetails
										toggle={() => this.togglePopUp()}
										title={item.title}
										descr={item.description}
										co2={item.total}
									/>
								) : null}
							</li>
						</>
					))}
				</ul>
				<div className="more">
					<img
						className="more-button"
						src={done_tick}
						alt="See More Challenges"
					/>
					<h4>More</h4>
				</div>
			</div>
		);
	}
}

export { NewChallenges };
