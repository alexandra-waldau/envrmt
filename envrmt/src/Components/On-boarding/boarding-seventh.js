import React from 'react';
import { useState } from "react";
import './on-boarding.css';
// import {GrClose} from 'react-icons/gr';
import chatbox from '../../Assets/Icons/Chatbox.svg';
import { Link } from "react-router-dom";


const Bseventh = (props) => {



    return (
        <div className="boarding">
            <div className = 'boarding-detail'>
                    <div className = 'boarding-back-management'>
                        <Link to="/boarding-sixth">
                            <button className = 'boarding-back' onClick={props.toggle}>Back</button>
                        </Link>
                    </div>
                    <div className = 'position_h'>
                        <img src={chatbox} alt='chatbox' />
                        <h1>“How many new plastic bags do you consume every year?”</h1>
                    </div>
                <Link to="/boarding-eigth" style={{ textDecoration: 'none' }}>
                <div className="buttons-positioning">
                    <button className = 'boarding-buttons' onClick={props.toggle}>None</button>
                    <button className = 'boarding-buttons' onClick={props.toggle}>1 - 3</button>
                    <button className = 'boarding-buttons' onClick={props.toggle}>4 - 8</button>
                    <button className = 'boarding-buttons' onClick={props.toggle}>9+</button>
                </div>
                </Link>
            
            </div>  
        </div>
    
    )
    
    }
    
    
    export {Bseventh}