import "../../Buttons/Buttons.css";
import arrow from "../../../assets/right-arrow.png";
import "./AdminLeftDiv.css";
function AdminLeftDiv() {
  return (
    <>
      <div className="dropdown">
        <button className="dropbtn">
          Organizations
          <img className="arrow-in-button" src={arrow} alt="arrow" />
        </button>
        <div className="dropdown-content">
          <a href="ViewOrganizations">View Registered Organizations</a>
          <a href ="OrganizationSubmissions">Accept/Reject Submissions</a>
        </div>
      </div>
      <div className="dropdown">
        <button className="dropbtn">
          Donors
          <img className="arrow-in-button" src={arrow} alt="arrow" />
        </button>
        <div className="dropdown-content">
          <a href="ViewDonors">View Donors List</a>
          <a href="DonorSubmissions">Accept/Reject Requests</a>
        </div>
      </div>
    </>
  );
}

export default AdminLeftDiv;
