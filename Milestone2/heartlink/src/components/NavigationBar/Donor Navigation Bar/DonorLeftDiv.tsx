import "./DonorLeftDiv.css";
import "../../Buttons/Buttons.css";
import arrow from "../../../assets/right-arrow.png";
import { Link } from "react-router-dom";
function DonorLeftDiv() {
  return (
    <>
      <div className={" dropdown "}>
        <Link to={"/Donor"}>
          <button style={{ marginRight: "1em" }} className={"dropbtn"}>
            Dashboard
          </button>
        </Link>
      </div>
      <div className="dropdown" style={{ marginRight: "1em" }}>
        <Link to={"/Donor/ViewOrganizationsDonor"}>
          <button className="dropbtn">Organizations</button>
        </Link>
      </div>
      <div className="dropdown">
        <button className="dropbtn">
          Donations
          <img className="arrow-in-button" src={arrow} alt="arrow" />
        </button>
        <div className="dropdown-content">
          <Link to={"/Donor/ViewAllDonations"}>View All Donations</Link>
          <Link to={"/Donor/ViewCategories"}>View Donation Categories</Link>
          <Link to={"/Donor/TeachingPosts"}>Teaching posts</Link>
          <Link to={"/Donor/MedicalPosts"}>Medical posts</Link>
        </div>
      </div>
    </>
  );
}

export default DonorLeftDiv;
