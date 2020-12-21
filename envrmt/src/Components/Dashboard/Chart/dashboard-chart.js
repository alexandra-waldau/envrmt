import React, { useState } from "react";

import "./dashboard-chart.css";
import { Link } from "react-router-dom";
import { BsCircleFill } from "react-icons/bs";
import { IconBase } from "react-icons/lib";
import { LevelIndicator, PieChart, RelatableFeedback } from "./chart-contents";

//TODO: use real data
const Chart = (props) => {
	const [page, setPage] = useState(1);

	const displayPage = () => {
		switch (page) {
			case 1:
				return props.completed > 0 ? (
					<PieChart
						completed={props.completed}
						failed={props.failed}
						avoidance={props.avoidance}
					/>
				) : (
					<LevelIndicator level={props.level} />
				);
			case 2:
				return <RelatableFeedback type="1" avoidance={props.avoidance} />;
			case 3:
				return <RelatableFeedback type="2" avoidance={props.avoidance} />;
			default:
				return <PieChart />;
		}
	};

	return (
		<div className="container-chart">
			{displayPage()}
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

export { Chart };
