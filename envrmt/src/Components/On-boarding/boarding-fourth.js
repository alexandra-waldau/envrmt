import React from 'react';
import { useState } from "react";
import './on-boarding.css';
// import {GrClose} from 'react-icons/gr';
import chatbox from '../../Assets/Icons/Chatbox.svg';
import { Link } from "react-router-dom";


const Bfourth = (props) => {



    return (
        <div className="boarding">
            <div className = 'boarding-detail'>
                    <div className = 'boarding-back-management'>
                        <Link to="/boarding-third">
                            <button className = 'boarding-back' onClick={props.toggle}>Back</button>
                        </Link>
                    </div>
                    <div className = 'position_h'>
                        <img src={chatbox} alt='chatbox' />
                        <h1>“Have you ever grown your own vegetables or fruits?”</h1>
                    </div>
                <Link to="/boarding-fifth" style={{ textDecoration: 'none' }}>
                <div className="buttons-positioning">
                    <button className = 'boarding-buttons' onClick={props.toggle}>No homegrown products</button>
                    <button className = 'boarding-buttons' onClick={props.toggle}>1-2 homegrown products</button>
                    <button className = 'boarding-buttons' onClick={props.toggle}>3-4 homegrown products</button>
                    <button className = 'boarding-buttons' onClick={props.toggle}>5+ homegrown products</button>
                </div>
                </Link>
            
            </div>  
        </div>
    
    )
    
    }
    
    
    export {Bfourth}