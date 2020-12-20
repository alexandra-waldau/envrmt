import { Link } from "react-router-dom";
import "./../../../Components/Dashboard/Chart/report.css"
import ReportPic from './../../../Assets/ReportPic.svg';

function Report(props) {
    return(
    <div className="report">
        <div className="report-headline">
            <Link to="dashboard">
			    <button className = 'back-button'>Back</button>
            </Link>
            <h1>Result overview</h1>
        </div>
    <div className ="report-content-container">  
        <h6>5.2 kg</h6>
        <h3>of Co2 saved with your actions</h3>

        <h2>13</h2>
        <h3>Completed challenges</h3>

        <h4>10</h4>
        <h3>Failed challenges</h3>

        <img 
            className = "report-image" 
            alt="user performance"
            src={ReportPic}></img>
        </div>
    </div>
    )
}

export {Report}