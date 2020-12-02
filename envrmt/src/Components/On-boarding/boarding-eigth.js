import React from 'react';
import { useState } from "react";
import './on-boarding.css';
// import {GrClose} from 'react-icons/gr';
import chatbox from '../../Assets/Icons/Chatbox.svg';
import { Link } from "react-router-dom";


const Beigth = (props) => {



    return (
        <div className="boarding">
            <div className = 'boarding-detail'>
                    <div className = 'boarding-back-management'>
                        <Link to="/boarding-seventh">
                            <button className = 'boarding-back' onClick={props.toggle}>Back</button>
                        </Link>
                    </div>
                    <div className = 'position_h'>
                        <img src={chatbox} alt='chatbox' />
                        <h1>“How many second hand clothes do you buy instead of the new clothes?”</h1>
                    </div>
                <Link to="/on-boarding-categories" style={{ textDecoration: 'none' }}>
                <div className="buttons-positioning" style={{ textDecoration: 'none' }}>
                    <button className = 'boarding-buttons' onClick={props.toggle}>I only buy new clothes</button>
                    <button className = 'boarding-buttons' onClick={props.toggle}>Most of the time</button>
                    <button className = 'boarding-buttons' onClick={props.toggle}>Trying to limit it</button>
                    <button className = 'boarding-buttons' onClick={props.toggle}>Never buy new clothes</button>
                </div>
                </Link>
            </div>  
        </div>
    
    )
    
    }
    
    
    export {Beigth}