import React from 'react';
import { useState } from "react";
import './on-boarding.css';
// import {GrClose} from 'react-icons/gr';
import chatbox from '../../Assets/Icons/Chatbox.svg';
import { Link } from "react-router-dom";


const Bsixth = (props) => {



    return (
        <div className="boarding">
            <div className = 'boarding-detail'>
                    <div className = 'boarding-back-management'>
                        <Link to="/boarding-fifth">
                            <button className = 'boarding-back' onClick={props.toggle}>Back</button>
                        </Link>
                    </div>
                    <div className = 'position_h'>
                        <img src={chatbox} alt='chatbox' />
                        <h1>“How many kilometers do you limit your flight distance to every year?”</h1>
                    </div>
                <Link to="/boarding-seventh" style={{ textDecoration: 'none' }}>
                <div className="buttons-positioning">
                    <button className = 'boarding-buttons' onClick={props.toggle}>None</button>
                    <button className = 'boarding-buttons' onClick={props.toggle}>Less than 6000km</button>
                    <button className = 'boarding-buttons' onClick={props.toggle}>Lest than 15.000km</button>
                    <button className = 'boarding-buttons' onClick={props.toggle}>No limits</button>
                </div>
                </Link>
            
            </div>  
        </div>
    
    )
    
    }
    
    
    export {Bsixth}