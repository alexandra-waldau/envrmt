import React from 'react';
import { useState } from "react";
import './on-boarding.css';
// import {GrClose} from 'react-icons/gr';
import chatbox from '../../Assets/Icons/Chatbox.svg';
import { Link } from "react-router-dom";


const Bfirst = (props) => {



    return (
        <div className="boarding">
            <div className = 'boarding-detail'>
                    <div className = 'boarding-back-management'>
                        <Link to="/on-boarding">
                            <button className = 'boarding-back' onClick={props.toggle}>Back</button>
                        </Link>
                    </div>
                    <div className = 'position_h'>
                        <img src={chatbox} alt='chatbox' />
                        <h1>"How many days of the week do you eat meat?"</h1>
                    </div>
                
                <Link to="/boarding-second" style={{ textDecoration: 'none' }}>
                <div className="buttons-positioning">
                    <button className = 'boarding-buttons' onClick={props.toggle}>None</button>
                    <button className = 'boarding-buttons' onClick={props.toggle}>Three or less</button>
                    <button className = 'boarding-buttons' onClick={props.toggle}>Between four and six</button>
                    <button className = 'boarding-buttons' onClick={props.toggle}>Every day</button>
                </div>
                </Link>
            
            </div>  
        </div>
    
    )
    
    }
    
    
    export {Bfirst}
    