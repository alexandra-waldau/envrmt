import "./dashboard-chart.css";
import LevelPicture from "../../../Assets/LevelPicture.png";
import { VictoryPie } from 'victory';
import { Link } from "react-router-dom";


//First dashboard the user sees before they complete any challenge
const Chart1 = () => {
	return (
		<div className="container-chart">
			<img className="level-graphic" src={LevelPicture}></img>
			<p className="chart-text-headline">Beginner</p>
			<p>You have not done much for the climate yet, but we'll give you good ideas to get started!</p>
		</div>
	);
};

//TODO: use real data
const Chart2 = () => {
	return (
		<div className="container-chart">
			<Link to="report">
				<VictoryPie 
  					data={[
    				{ x: "Done", y: 33 },
    				{ x: "Failed", y: 20 },
  					]}
 					categories={{ x: ["Done", "failed"] }}
  					colorScale={["#5db075", "#666666" ]}
			/>

			</Link>
		</div>
		
	);
};



export { Chart1, Chart2 };
