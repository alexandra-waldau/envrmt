import "./challenge-detail.css"

import {AiOutlineShoppingCart} from 'react-icons/ai';
import {GrClose} from 'react-icons/gr';
import {BsStopwatch} from 'react-icons/bs';
import {AiOutlineCloud} from 'react-icons/ai';

//defining categories
const shoppingText = "Shopping";

const CategoryText = (props) => {
    return <p className = "category-text">{props.text}</p>
}

//Challenge detailed card with button
const ChallengeDetail = (props) => {
    return (
    <div className="overlay">
        <div className = 'container-challenge-detail'>
            <button className = 'close-cross' onClick={props.toggle}><GrClose/></button>
            <AiOutlineShoppingCart className="category-icon"/>
            <CategoryText text={shoppingText}/>
            <p className ='challenge-name-detail'>#Challenge Name</p>
            <p className ='challenge-description-detail'>Description of challenge (maximum 2 lines)</p>
            <p className = 'challenge-duration'><BsStopwatch/> Duration</p>
            <p className = 'challenge-avoidance'><AiOutlineCloud/>-XXXg Co2</p>
            <button className = 'challenge-button' onClick={props.next}>Challenge completed</button>
        </div>   
    </div>
    );
}

export { ChallengeDetail, CategoryText }