import "./DonorLeftDiv.css";
import "../../Buttons/Buttons.css";
import arrow from "../../../assets/right-arrow.png";
import { Link } from "react-router-dom";
function DonorLeftDiv() {
  return (
    <>
      <div className="dropdown">
        <button className="dropbtn">
          Donations
          <img className="arrow-in-button" src={arrow} alt="arrow" />
        </button>
        <div className="dropdown-content">
          <a href="#">View All Donations</a>
          <a href="#">View Categories</a>
          <a href="#">Teaching posts</a>
          <a href="#">Medical posts</a>
        </div>
      </div>
    </>
  );
}

export default DonorLeftDiv;
