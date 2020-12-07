import "./dashboard-chart.css";
import LevelPicture from "../../../Assets/LevelPicture.png";

let dashboardLevel = "Beginner";
let dashboardLevelText =
	"You have not done much for the climate yet, but we'll give you good ideas to get started!";

//First dashboard the user sees before they complete any challenge
const Chart = () => {
	return (
		<div className="container-chart">
			<img className="level-graphic" src={LevelPicture}></img>
			<p className="chart-text-headline">{dashboardLevel}</p>
			<p>{dashboardLevelText}</p>
		</div>
	);
};

export { Chart };
