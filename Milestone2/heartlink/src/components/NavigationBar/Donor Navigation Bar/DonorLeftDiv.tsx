import "./DonorLeftDiv.css";
import "../../Buttons/Buttons.css";
import arrow from "../../../assets/right-arrow.png";
import { Link } from "react-router-dom";

interface DonorLeftDivProps {
  type?: string;
}
function DonorLeftDiv({ type }: DonorLeftDivProps) {
  const donorType =
    type === "teacher" ? "/Teacher" : type === "doctor" ? "/Doctor" : "/Donor";
  return (
    <>
      <div className={" dropdown "}>
        <Link to={donorType}>
          <button style={{ marginRight: "1em" }} className={"dropbtn"}>
            Dashboard
          </button>
        </Link>
      </div>
      <div className="dropdown" style={{ marginRight: "1em" }}>
        <Link to={donorType + "/ViewOrganizationsDonor"}>
          <button className="dropbtn">Organizations</button>
        </Link>
      </div>
      <div className="dropdown">
        <button className="dropbtn">
          Donations
          <img className="arrow-in-button" src={arrow} alt="arrow" />
        </button>
        <div className="dropdown-content">
          <Link to={donorType + "/ViewAllDonations"}>View All Donations</Link>
          <Link to={donorType + "/ViewCategories"}>
            View Donation Categories
          </Link>
          {type === "teacher" && (
            <Link to={donorType + "/TeachingPosts"}>Teaching posts</Link>
          )}
          {type === "doctor" && (
            <Link to={donorType + "/MedicalPosts"}>Medical posts</Link>
          )}
        </div>
      </div>
    </>
  );
}

export default DonorLeftDiv;
