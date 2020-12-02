import React from 'react';
import { useState } from "react";
import './on-boarding.css';
import {GrClose} from 'react-icons/gr';
import speaker from '../../Assets/Icons/Speaker.svg';
import { Link } from "react-router-dom";

const Boarding = (props) => {



return (
    <div className="boarding">
        <div className = 'boarding-detail'>
                <div className = 'boarding-management'> 
                    <button className = 'boarding-cross' onClick={props.toggle}><GrClose/></button>
                </div>
            <img src={speaker} alt='speaker' />
            <h1>Nice to meet you!</h1>
            <h2>Let’s start out by defining your user profile. Based on a few questions targeted at your lifestyle, we will be providing you with challenges that fit your type!</h2>
            <Link to="/boarding-first">
                <button className = 'boarding-button' onClick={props.toggle}>Define Lifestyle</button>
            </Link>
            <Link to="/on-boarding-categories" style={{ textDecoration: 'none' }}>
                <h3>Skip</h3>
            </Link>
        </div>  
    </div>

)

}


export {Boarding}