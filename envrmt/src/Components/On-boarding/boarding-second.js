import React from 'react';
import { useState } from "react";
import './on-boarding.css';
// import {GrClose} from 'react-icons/gr';
import chatbox from '../../Assets/Icons/Chatbox.svg';
import { Link } from 'react-router-dom';


const Bsecond = (props) => {



    return (
        <div className="boarding">
            <div className = 'boarding-detail'>
                    <div className = 'boarding-back-management'>
                        <Link to="/boarding-first">
                            <button className = 'boarding-back' onClick={props.toggle}>Back</button>
                        </Link>
                    </div>
                    <div className = 'position_h'>
                        <img src={chatbox} alt='chatbox' />
                        <h1>“How many times per week do you take the car to work?”</h1>
                    </div>
                <Link to="/boarding-third" style={{ textDecoration: 'none' }}>
                <div className="buttons-positioning">
                    <button className = 'boarding-buttons' onClick={props.toggle}>Every day</button>
                    <button className = 'boarding-buttons' onClick={props.toggle}>3 or 4 days</button>
                    <button className = 'boarding-buttons' onClick={props.toggle}>At most 2 days</button>
                    <button className = 'boarding-buttons' onClick={props.toggle}>Never</button>
                </div>
                </Link>
            
            </div>  
        </div>
    
    )
    
    }
    
    
    export {Bsecond}
