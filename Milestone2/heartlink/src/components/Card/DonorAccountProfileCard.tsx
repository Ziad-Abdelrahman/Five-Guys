import "./DonorAccountManagement.css";
import "../../components/Card/Organization Cards/DonationPostCard.css";
import Personal from "../../assets/personalpic.jpeg";
import { BsThreeDots } from "react-icons/bs";

interface DonorAccountProfileCardProps {
  name: string;
  age: string;
  gender: string;
  governorate: string;
  address: string;
  tel1: string;
  tel2: string;
  setPage: React.Dispatch<React.SetStateAction<string>>;
}

function DonorAccountProfileCard(props: DonorAccountProfileCardProps) {
  function handleClick() {
    props.setPage("Edit Info");
  }
  return (
    <>
      <div className="Personal-Info-card">
        <div className="image-in-personalinfo-card">
          <img className={"profile-image"} src={Personal} />
        </div>
        <div style={{ display: "flex", flexDirection: "row" }}>
          <div className={"header-in-personal-info-card"}>
            <h3>My Profile</h3>
          </div>
          <div className="card-dropdown" style={{ margin: "0 2%" }}>
            <BsThreeDots
              size={"30px"}
              style={{
                display: "flex",
                marginTop: "10px",
                cursor: "pointer",
              }}
            />
            <div className="card-dropdown-content">
              <div onClick={handleClick}>Edit Info</div>
            </div>
          </div>
        </div>
        <hr />
        <div className={"text-in-personal-info-card"}>
          <div className={"info-header"}>
            <h5>Name</h5>
            <h5>Age</h5>
            <h5>Gender</h5>
            <h5>Governerate</h5>
            <h5>Address</h5>
            <h5>Telephone(s)</h5>
          </div>

          <div className={"my-profile-info"}>
            <p>{props.name}</p>
            <p>{props.age}</p>
            <p>{props.gender}</p>
            <p>{props.governorate}</p>
            <p>{props.address}</p>
            <p style={{ marginBottom: "0" }}>{props.tel1} </p>
            <p> {props.tel2}</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default DonorAccountProfileCard;
