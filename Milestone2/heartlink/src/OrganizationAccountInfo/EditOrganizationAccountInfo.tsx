import OrgNavgBar from "../components/NavigationBar/Organization Navigation Bar/OrgNavgBar.tsx";
import HeaderOfSection from "../components/Header/HeaderOfSection.tsx";
import UploadMaps from "./UploadMaps.tsx";
import "../components/Card/Organization Cards/DonationPostCard.css";
import "./OrganizationAccountManagement.css";
import { Link } from "react-router-dom";
import LoginButton from "../components/Buttons/LoginButton.tsx";
import img from "../assets/baheya.png";
import EditRadioButton from "../components/RadioButton/EditRadioButton.tsx";
import { useState } from "react";

function EditOrganizationAccountInfo() {
  const [checked, setChecked] = useState("Female");
  return (
    <div>
      <OrgNavgBar />
      <HeaderOfSection
        title={"Account Info"}
        smallDivStyle={{
          display: "flex",
          justifyContent: "space-between",
          width: "100%",
        }}
        children={<LoginButton text={"Update"} />}
      />
      <div className={"organization-account-info"}>
        <>
          <div className="Personal-Info-card">
            <div className="image-in-personalinfo-card">
              <img className={"profile-image"} src={img} />
            </div>
            <div className={"header-in-personal-info-card"}>
              <h3>My Profile</h3>
              <hr />
            </div>
            <div className={"text-in-personal-info-card"}>
              <div className={"edit-org-info-header"}>
                <h5>Name</h5>
                <h5>Type</h5>
                <h5>Area</h5>
                <h5>City</h5>
                <h5>Address</h5>
              </div>

              <div className={"my-profile-info"}>
                <input
                  type="text"
                  className="form-control"
                  id="name"
                  defaultValue={"Baheyya"}
                  style={{ marginBottom: "0.5em" }}
                />
                <input
                  type="text"
                  className="form-control"
                  id="type"
                  defaultValue={"Breast Cancer"}
                  style={{ marginBottom: "0.5em" }}
                />
                <input
                  type="text"
                  className="form-control"
                  id="Area"
                  defaultValue={"El Haram"}
                  style={{ marginBottom: "0.5em" }}
                />
                <input
                  type="text"
                  className="form-control"
                  id="City"
                  defaultValue={"Cairo"}
                  style={{ marginBottom: "0.5em" }}
                />
                <input
                  type="text"
                  className="form-control"
                  id="Address"
                  defaultValue={"4 ش علوبة مدكور"}
                  style={{ marginBottom: "0.5em" }}
                />
              </div>
            </div>
          </div>
        </>
        <div className={"two-card-upload-maps-holder"}>
          <div className={"upload-doc-card"}>
            <div style={{ width: "100%" }}>
              <h2>Representative Info</h2>
              <hr />
              <div style={{ display: "flex" }}>
                <div className={"edit-org-rep-info"}>
                  <p>Name: </p>
                  <p>Gender: </p>
                  <p>Email: </p>
                  <p>Number:</p>
                </div>
                <div>
                  <input
                    type="text"
                    className="form-control"
                    id="repName"
                    defaultValue={"Farah"}
                  />
                  <div style={{ display: "flex" }}>
                    <EditRadioButton
                      text={"Male"}
                      height={"25px"}
                      checked={checked === "Male"}
                      setChecked={setChecked}
                    />
                    <EditRadioButton
                      text={"Female"}
                      height={"25px"}
                      checked={checked === "Female"}
                      setChecked={setChecked}
                    />
                  </div>
                  <input
                    type="email"
                    className="form-control"
                    id="repName"
                    defaultValue={"farahh_faisall@hotmail.com"}
                    style={{ marginBottom: "0.5em", width: "240px" }}
                  />
                  <input
                    type="tel"
                    className="form-control"
                    id="repName"
                    defaultValue={"01113190357"}
                    style={{ marginBottom: "0.5em", width: "240px" }}
                  />
                </div>
              </div>
            </div>
          </div>
          <UploadMaps />
        </div>
      </div>
    </div>
  );
}

export default EditOrganizationAccountInfo;
