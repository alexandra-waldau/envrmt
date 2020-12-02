import React from 'react';
import { useState } from "react";
import './on-boarding.css';
// import {GrClose} from 'react-icons/gr';
import chatbox from '../../Assets/Icons/Chatbox.svg';
import { Link } from "react-router-dom";


const Bfifth = (props) => {



    return (
        <div className="boarding">
            <div className = 'boarding-detail'>
                    <div className = 'boarding-back-management'>
                        <Link to="/boarding-fourth">
                            <button className = 'boarding-back' onClick={props.toggle}>Back</button>
                        </Link>
                    </div>
                    <div className = 'position_h'>
                        <img src={chatbox} alt='chatbox' />
                        <h1>“When do you turn on the heat?”</h1>
                    </div>
                <Link to="/boarding-sixth" style={{ textDecoration: 'none' }}>
                <div className="buttons-positioning">
                    <button className = 'boarding-buttons' onClick={props.toggle}>It’s always on</button>
                    <button className = 'boarding-buttons' onClick={props.toggle}>When a winter season starts</button>
                    <button className = 'boarding-buttons' onClick={props.toggle}>When I'm freezing</button>
                    <button className = 'boarding-buttons' onClick={props.toggle}>Every time I'm a bit cold</button>
                </div>
                </Link>
            
            </div>  
        </div>
    
    )
    
    }
    
    
    export {Bfifth}