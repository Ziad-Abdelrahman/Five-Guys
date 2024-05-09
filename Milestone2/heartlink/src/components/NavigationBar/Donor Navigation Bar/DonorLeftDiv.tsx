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
          <Link to={"/Donor/ViewAllDonations"}>View All Donations</Link>
          <Link to={"/Donor/ViewCategories"}>View Categories</Link>
          <Link to={"/Donor/TeachingPosts"}>Teaching posts</Link>
          <Link to={"/Donor/MedicalPosts"}>Medical posts</Link>
        </div>
      </div>
    </>
  );
}

export default DonorLeftDiv;
