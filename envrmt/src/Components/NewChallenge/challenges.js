import React from 'react';
import { useState } from "react";
import bicycle from '../Icons/Bicycle.svg';
import food from '../Icons/Food.svg';
import trash from '../Icons/Trash.svg';
import cart from '../Icons/Cart.svg';
import done_tick from '../Icons/Done_tick.svg';
import divider from '../Icons/Divider.svg';
import './challenges.css';
import { ChallengeDetails } from './popup';

const Challenges = () => {
    const[visible, setVisibility] = useState(false);

    const togglePopUp = () => {
        setVisibility(!visible);
    }

    return(
    <div className ="challenges">
        <div className = "challenge-headline">
            <h5>Back</h5>
            <h1>New Challenge</h1>
        </div>
            <div className = "challenge-section">
                <img src={bicycle} alt='bicycle' />
                <div className ="challenge-text">
                    <h2>Chu-chuu</h2>
                    <h3>Taking the train not only gives you more personal space than most planes, it...</h3>
                    <img src={divider} alt='divider' />
                </div>
            </div>
            <div className="btn">
                <div className = "challenge-section" onClick={() => togglePopUp()}>
                        <img src={food} alt='food' />
                        <div className ="challenge-text">
                            <h2>As good as guacamole</h2>
                            <h3>Try these alternatives to Avocado when prepping for the next BBQ.</h3>
                            <img src={divider} alt='divider' />
                        </div>
                </div>
            </div>
            <div className = "challenge-section">
                <img src={trash} alt='trash' />
                <div className ="challenge-text">
                    <h2>Don’t be dump</h2>
                    <h3>Before throwing out small stuff, consider reusing it. Check out these cool recy...</h3>
                    <img src={divider} alt='divider' />
                </div>
            </div>
            <div className = "challenge-section"> 
                <img src={cart} alt='cart' /> 
                <div className ="challenge-text">
                    <h2>I’m gonna pop some tags</h2>
                    <h3>Shop in thrift stores the next time you’re with the fashionistas. </h3>
                    <img src={divider} alt='divider' />
                </div>
            </div>
                    
                <div className = "more">
                    <img src={done_tick} alt='done_tick' /> 
                    <h4>More</h4>
                </div>
                {visible ? <ChallengeDetails toggle={() => togglePopUp()}/> : null}
    </div>
    );
}

export {Challenges}