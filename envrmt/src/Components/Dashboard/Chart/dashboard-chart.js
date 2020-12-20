import React, { useState } from "react";

import "./dashboard-chart.css";
import LevelPicture from "../../../Assets/LevelPicture.png";
import { VictoryPie } from "victory";
import { Link } from "react-router-dom";
import targetIcon from "../../../Assets/Icons/target.svg";
import cloudIcon from "../../../Assets/Icons/cloud.svg";
import { BsCircleFill } from "react-icons/bs";
import { IconBase } from "react-icons/lib";

//TODO: use real data
const Chart = (props) => {
	const [page, setPage] = useState(1);

	const displayPage = () => {
		console.log(props.completed);
		switch (page) {
			case 1:
				return props.completed > 0 ? (
					<PieStats
						completed={props.completed}
						failed={props.failed}
						avoidance={props.avoidance}
					/>
				) : (
					<Default />
				);
			case 2:
				return <p>in other words: plane</p>;
			case 3:
				return <p>in other words: bonfire</p>;
			default:
				return <PieStats />;
		}
	};

	return (
		<div className="container-chart">
			<Link to="report">{displayPage()}</Link>
			<div className="chartFlipper">
				<BsCircleFill
					className="chartFlipperCircles"
					onClick={() => setPage(1)}
					style={{
						color: page === 1 ? "#5DB075" : "F0F0F0",
					}}
				/>

				<BsCircleFill
					className="chartFlipperCircles"
					onClick={() => setPage(2)}
					style={{
						color: page === 2 ? "#5DB075" : "F0F0F0",
					}}
				/>

				<BsCircleFill
					className="chartFlipperCircles"
					onClick={() => setPage(3)}
					style={{
						color: page === 3 ? "#5DB075" : "F0F0F0",
					}}
				/>
			</div>
		</div>
	);
};

//First dashboard the user sees before they complete any challenge
const Default = () => {
	return (
		<div className="container-chart">
			<img className="level-graphic" src={LevelPicture}></img>
			<p className="chart-text-headline">Beginner</p>
			<p>
				You have not done much for the climate yet, but we'll give you good
				ideas to get started!
			</p>
		</div>
	);
};

const PieStats = (props) => {
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
				<img src={targetIcon} alt="target icon" />
				<p>{successRatio.toFixed(2) * 100}% challenge success</p>
			</div>
			<div className="chartLegend">
				<img src={cloudIcon} alt="target icon" />
				<p>
					{props.avoidance.toFixed(2)}kg CO<sub>2</sub> avoidance
				</p>
			</div>
		</>
	);
};

export { Chart };
