import "./challenge-detail.css"

//importing icons for categories
import {MdDirectionsBike} from 'react-icons/md';
import {AiOutlineShoppingCart} from 'react-icons/ai';
import {BsTrash} from 'react-icons/bs';
import {FaPizzaSlice} from 'react-icons/fa';

//import icon for close button
import {GrClose} from 'react-icons/gr';

//import icons for duration
import {BsStopwatch} from 'react-icons/bs';

//import icon for Co2 avoided
import {AiOutlineCloud} from 'react-icons/ai';

//import icon for reoprting performance/rating icon
import {ImEarth} from 'react-icons/im'

//defining categories
const transportationIcon = <MdDirectionsBike/>;
const transportationText = "Transportation";
const shoppingIcon = <AiOutlineShoppingCart/>;
const shoppingText = "Shopping";
const wasteIcon = <BsTrash/>;
const wasteText = "Waste";
const foodIcon = <FaPizzaSlice/>;
const foodText = "Food";

const CategoryIcon = (props) => {
    return <p className = "category-icon">{props.icon}</p>
}

const CategoryText = (props) => {
    return <p className = "category-text">{props.text}</p>
}

//Challenge detailed card with button
const ChallengeDetail = (props) => {
    return (
    <div className="overlay">
        <div className = 'container-challenge-detail'>
            <button className = 'close-cross' onClick={props.toggle}><GrClose/></button>
            <CategoryIcon icon={shoppingIcon}/>
            <CategoryText text={shoppingText}/>
            <p className ='challenge-name-detail'>#Challenge Name</p>
            <p className ='challenge-description-detail'>Description of challenge (maximum 2 lines)</p>
            <p className = 'challenge-duration'><BsStopwatch/> Duration</p>
            <p className = 'challenge-avoidance'><AiOutlineCloud/>-XXXg Co2</p>
            <button className = 'challenge-button'>Challenge completed</button>
        </div>   
    </div>
    )
}

export { ChallengeDetail }