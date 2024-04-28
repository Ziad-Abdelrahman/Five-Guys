import './buttons.css'
import arrow from '../assets/right-arrow.png'
function ViewButton(){


   return (
       <button className="view-button">
          Learn More
          <img className="arrow-in-button" src={arrow} alt="arrow"/>
       </button>
   );


}

export default ViewButton;

