import LevelPicture from "../../../Assets/LevelPicture.png";
import { VictoryPie } from "victory";
import targetIcon from "../../../Assets/Icons/target.svg";
import cloudIcon from "../../../Assets/Icons/cloud.svg";
import Plane from "../../../Assets/Plane.svg";
import Bonfire from "../../../Assets/Bonfire.svg";
import Tree from "../../../Assets/Tree.svg";

import "./chart-contents.css";

const RelatableFeedback = (props) => {
	const flightAv = (props.avoidance / 155).toFixed(0);
	const fireAv = (props.avoidance / 4.84).toFixed(0);
	const treeAv = (props.avoidance / 21).toFixed(0);
	switch (props.type) {
		case "1":
			return (
				<>
					<img className="level-graphic" src={Bonfire}></img>
					<p className="level-headline">In other words...</p>
					<p className="level-description">You avoided {fireAv} bonfires</p>
				</>
			);
		case "2":
			return (
				<>
					<img className="level-graphic" src={Tree}></img>
					<p className="level-headline">In other words...</p>
					<p className="level-description">
						You saved as much CO<sub>2</sub> as {treeAv} tree(s) in one year
					</p>
				</>
			);
		case "3":
			return (
				<>
					<img className="level-graphic" src={Plane}></img>
					<p className="level-headline">In other words...</p>
					<p className="level-description">
						You avoided {flightAv} plane flights
					</p>
				</>
			);
	}
};

//First dashboard the user sees before they complete any challenge
const LevelIndicator = (props) => {
	const titel = "";
	const description = "";

	return (
		<>
			{/* <div className="container-chart"> */}
			<img className="level-graphic" src={LevelPicture}></img>
			<p className="level-headline">Beginner</p>
			<p className="level-description">
				You have not done much for the climate yet, but we'll give you good
				ideas to get started!
			</p>
			{/* </div> */}
		</>
	);
};

const PieChart = (props) => {
	const successful = props.completed;
	const total = props.completed + props.failed;
	const successRatio = successful / total;
	return (
		<>
			<div className="container-circle">
				<VictoryPie
					standlone={false}
					viewBox={"0 0 width, height"}
					data={[
						{ x: " ", y: successful },
						{ x: " ", y: total - successful },
					]}
					categories={{ x: ["Done", "failed"] }}
					colorScale={["#5db075", "#E5E5E5"]}
					height={120}
					padding={0}
					margin={0}
				/>
			</div>
			<div className="chartLegend">
				<div className="legend-stats">
					<img src={targetIcon} alt="target icon" />
					<p>{successRatio.toFixed(2) * 100}% challenge success</p>
				</div>
				<div className="legend-stats">
					<img src={cloudIcon} alt="target icon" />
					<p>
						{props.avoidance.toFixed(2)}kg CO<sub>2</sub> avoidance
					</p>
				</div>
			</div>
		</>
	);
};

export { PieChart, LevelIndicator, RelatableFeedback };
