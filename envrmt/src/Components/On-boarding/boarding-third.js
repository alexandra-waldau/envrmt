import React from 'react';
import { useState } from "react";
import './on-boarding.css';
// import {GrClose} from 'react-icons/gr';
import chatbox from '../../Assets/Icons/Chatbox.svg';
import { Link } from "react-router-dom";


const Bthird = (props) => {



    return (
        <div className="boarding">
            <div className = 'boarding-detail'>
                    <div className = 'boarding-back-management'>
                        <Link to="/boarding-second">
                            <button className = 'boarding-back' onClick={props.toggle}>Back</button>
                        </Link>
                    </div>
                    <div className = 'position_h'>
                        <img src={chatbox} alt='chatbox' />
                        <h1>“How often do you dry your clothes in the dryer?”</h1>
                    </div>
                <Link to="/boarding-fourth" style={{ textDecoration: 'none' }}>
                <div className="buttons-positioning">
                    <button className = 'boarding-buttons' onClick={props.toggle}>Every time</button>
                    <button className = 'boarding-buttons' onClick={props.toggle}>Most of the time</button>
                    <button className = 'boarding-buttons' onClick={props.toggle}>Sometimes</button>
                    <button className = 'boarding-buttons' onClick={props.toggle}>Never</button>
                </div>
                </Link>
            
            </div>  
        </div>
    
    )
    
    }
    
    
    export {Bthird}