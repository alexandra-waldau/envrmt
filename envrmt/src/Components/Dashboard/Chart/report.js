import { Link } from "react-router-dom";
import "./../../../Components/Dashboard/Chart/report.css"
import ReportPic from './../../../Assets/ReportPic.svg';

function Report(props) {
    return(
    <div className ="report-container">
        <Link className="back-button-report" to="dashboard">
					Back
				</Link>         
        <h1>Result overview</h1>

        <p className="challenge-figure">13</p>
        <p className = "report-text">Completed challenges</p>

        <p className="challenge-figure">10</p>
        <p className = "report-text">Failed challenges</p>

        <img 
            className = "report-image" 
            alt="user performance"
            src={ReportPic}></img>
        </div>
    )
}

export {Report}