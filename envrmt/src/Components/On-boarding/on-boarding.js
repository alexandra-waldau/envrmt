import React from 'react';
import { useState } from "react";
import './on-boarding.css';
import {GrClose} from 'react-icons/gr';
import speaker from '../../Assets/Icons/Speaker.svg';
import { Link } from "react-router-dom";
import { BsCircleFill } from "react-icons/bs";

const Boarding = () => {
    const[page, setPage] = useState(1)

    const displayPage = () => {
		switch (page) {
			case 1:
				return <BoardingIntro/>
			case 2:
				return <p>in other words: plane</p>;
			case 3:
				return <p>in other words: bonfire</p>;
			default:
			
		}
    };
    
    return (
        <div className = 'boarding'>
             {displayPage()}
			    <div className="chartFlip">
				    <BsCircleFill
					className="boardingCircles"
					style={{
						color: page === 1 ? "#5DB075" : "F0F0F0",
					}}
				/>

				<BsCircleFill
					className="boardingCircles"
					style={{
						color: page === 2 ? "#5DB075" : "F0F0F0",
					}}
				/>

				<BsCircleFill
					className="boardingCircles"
					style={{
						color: page === 3 ? "#5DB075" : "F0F0F0",
					}}
				/>
			    </div>
        </div>
        

	);
};







const BoardingIntro = () => {
return (
        <div className = 'boarding-detail'>
            <div className = 'boarding-management'> 
                <button className = 'boarding-cross'><GrClose/></button>
            </div>
            <img src={speaker} alt='speaker' />
            <h1>Nice to meet you!</h1>
            <h2>Let’s start out by defining your user profile. Based on a few questions targeted at your lifestyle, we will be providing you with challenges that fit your type!</h2>
            <Link to="/boarding-first">
                <button className = 'boarding-button'>Define Lifestyle</button>
            </Link>
            <Link to="/on-boarding-categories" style={{ textDecoration: 'none' }}>
                <h3>Skip</h3>
            </Link>
        </div> 
)

};



export {Boarding}