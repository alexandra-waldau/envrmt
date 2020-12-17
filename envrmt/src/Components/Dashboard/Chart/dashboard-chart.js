import "./dashboard-chart.css";
import LevelPicture from "../../../Assets/LevelPicture.png";
import { VictoryPie } from "victory";
import { Link } from "react-router-dom";
import targetIcon from "../../../Assets/Icons/target.svg";
import cloudIcon from "../../../Assets/Icons/cloud.svg";

//First dashboard the user sees before they complete any challenge
const Chart1 = () => {
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

let amount = 5.2;
//TODO: use real data
const Chart2 = () => {
	return (
		<div className="container-chart">
			<Link to="report">
				<div className="container-circle">
					<VictoryPie
						standlone={false}
						viewBox={"0 0 width, height"}
						data={[
							{ x: " ", y: 80 },
							{ x: " ", y: 20 },
						]}
						categories={{ x: ["Done", "failed"] }}
						colorScale={["#5db075", "#E5E5E5"]}
						height={120}
						padding={0}
						margin={0}
					/>
				</div>
				<div className="chartLegend">
					<img src={cloudIcon} alt="target icon" />
					<p>{amount}% challenge success</p>
				</div>
				<div className="chartLegend">
					<img src={targetIcon} alt="target icon" />
					<p>{amount}kg CO2 avoidance</p>
				</div>
			</Link>
		</div>
	);
};

export { Chart1, Chart2 };
