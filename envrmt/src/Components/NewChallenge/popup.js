
import React, { Component } from "react";
import './popup.css';
import {GrClose} from 'react-icons/gr';
import food_g from '../Icons/Food_green.svg';


  const ChallengeDetails = (props) => {
    return (
    <div className="overlay-challenge">
        <div className = 'container-challenge-detail'>
            <button className = 'close-cross' onClick={props.toggle}><GrClose/></button>
            <img src={food_g} alt='pizza' />
            <h4>Food</h4>
            <h1>As good as guacamole</h1>
            <h2>Try these alternatives with organic and locally grown ingredients:</h2>
            <h3>Aioli <br/>Salsa <br/> Herb dip</h3>
            <button className = 'challenge-button' onClick={props.toggle}>Activate challenge</button>
        </div>   
    </div>
    );
}

export {ChallengeDetails};I