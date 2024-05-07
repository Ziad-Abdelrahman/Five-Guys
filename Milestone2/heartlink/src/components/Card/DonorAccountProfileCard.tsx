import "./DonorAccountManagement.css";
import Lalla from "../../assets/lallananna.jpeg";
import Personal from "../../assets/personalpic.jpeg";

function DonorAccountProfileCard() {
  return (
    <>
      <div className="Personal-Info-card">
        <div className="image-in-personalinfo-card">
          <img className={"profile-image"} src={Personal} />
        </div>
        <div className={"header-in-personal-info-card"}>
          <h3>My Profile</h3>
          <hr />
        </div>
        <div className={"text-in-personal-info-card"}>
          <div className={"info-header"}>
            <h5>Name</h5>
            <h5>Age</h5>
            <h5>Gender</h5>
            <h5>Governerate</h5>
            <h5>Address</h5>
          </div>

          <div className={"my-profile-info"}>
            <p>Abdallah Ahmed</p>
            <p>20</p>
            <p>Male</p>
            <p>Cairo</p>
            <p>Villa88 Maadi</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default DonorAccountProfileCard;
