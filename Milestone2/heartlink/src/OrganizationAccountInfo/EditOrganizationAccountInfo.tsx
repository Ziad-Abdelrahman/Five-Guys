import OrgNavgBar from "../components/NavigationBar/Organization Navigation Bar/OrgNavgBar.tsx";
import HeaderOfSection from "../components/Header/HeaderOfSection.tsx";
import LoginButton from "../components/Buttons/LoginButton.tsx";
import img from "../assets/baheya.png";
import EditRadioButton from "../components/RadioButton/EditRadioButton.tsx";
import { useState } from "react";
import Map from "../components/map/Map.tsx";
import DeleteButton from "../components/Buttons/DeleteButton.tsx";
import { IoIosClose } from "react-icons/io";
import { FaPlus } from "react-icons/fa6";

interface EditOrganizationAccountInfoProps {
  name: string;
  type: string;
  email: string;
  area: string;
  city: string;
  address: string;
  telephone1: string;
  telephone2: string;
  repName: string;
  repEmail: string;
  repGender: string;
  repContactNumber: string;
  setName: React.Dispatch<React.SetStateAction<string>>;
  setType: React.Dispatch<React.SetStateAction<string>>;
  setEmail: React.Dispatch<React.SetStateAction<string>>;
  setTelephone1: React.Dispatch<React.SetStateAction<string>>;
  setTelephone2: React.Dispatch<React.SetStateAction<string>>;
  setArea: React.Dispatch<React.SetStateAction<string>>;
  setCity: React.Dispatch<React.SetStateAction<string>>;
  setAddress: React.Dispatch<React.SetStateAction<string>>;
  setRepName: React.Dispatch<React.SetStateAction<string>>;
  setRepEmail: React.Dispatch<React.SetStateAction<string>>;
  setRepGender: React.Dispatch<React.SetStateAction<string>>;
  setRepContactNumber: React.Dispatch<React.SetStateAction<string>>;
  setPage: React.Dispatch<React.SetStateAction<string>>;
}

function EditOrganizationAccountInfo(props: EditOrganizationAccountInfoProps) {
  const [checked, setChecked] = useState("Female");
  const [tempName, setTempName] = useState(props.name);
  const [tempType, setTempType] = useState(props.type);
  const [tempEmail, setTempEmail] = useState(props.email);
  const [tempTelephone1, setTempTelephone1] = useState(props.telephone1);
  const [tempTelephone2, setTempTelephone2] = useState(props.telephone2);
  const [tempArea, setTempArea] = useState(props.area);
  const [tempCity, setTempCity] = useState(props.city);
  const [tempAddress, setTempAddress] = useState(props.address);
  const [tempRepName, setTempRepName] = useState(props.repName);
  const [tempRepEmail, setTempRepEmail] = useState(props.repEmail);
  const [tempRepContactNumber, setTempRepContactNumber] = useState(
    props.repContactNumber,
  );
  const [tel2, setTel2] = useState(true);

  const handleUpdate = () => {
    props.setName(tempName);
    props.setType(tempType);
    props.setEmail(tempEmail);
    props.setTelephone1(tempTelephone1);
    props.setTelephone2(tempTelephone2);
    props.setArea(tempArea);
    props.setCity(tempCity);
    props.setAddress(tempAddress);
    props.setRepName(tempRepName);
    props.setRepEmail(tempRepEmail);
    props.setRepContactNumber(tempRepContactNumber);
    props.setRepGender(checked);
    props.setPage("Account Info");
  };

  function handleRemove2() {
    setTempTelephone2("");
    setTel2(false);
  }
  function handleAdd() {
    if (!tel2) {
      setTel2(true);
    }
  }

  function handleCancel() {
    props.setPage("Account Info");
  }

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
        children={
          <div style={{ display: "flex" }}>
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <DeleteButton text={"Cancel"} onClick={handleCancel} />
            </div>
            <div
              onClick={handleUpdate}
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <LoginButton text={"Update"} />
            </div>
          </div>
        }
      />
      <div className={"organization-account-info"}>
        <div className="Personal-Info-card">
          <div className="image-in-personalinfo-card">
            <img className={"profile-image"} src={img} />
          </div>
          <div className={"header-in-personal-info-card"}>
            <h3>My Profile</h3>
            <hr />
          </div>
          <div className={"text-in-personal-info-card"}>
            <div
              className={"edit-org-info-header"}
              style={{ marginLeft: "2%" }}
            >
              <h5>Name</h5>
              <h5>Type</h5>
              <h5>Email</h5>
              <h5>Telephone(s)</h5>
            </div>

            <div className={"my-profile-info"}>
              <input
                type="text"
                className="form-control"
                id="name"
                defaultValue={tempName}
                style={{ marginBottom: "0.5em" }}
                onKeyPress={(e) => {
                  const keyCode = e.keyCode || e.which;
                  const keyValue = String.fromCharCode(keyCode);
                  if (!/^[a-zA-Z\s]*$/.test(keyValue)) e.preventDefault();
                }}
                onChange={(e) => setTempName(e.target.value)}
              />
              <input
                type="text"
                className="form-control"
                id="type"
                defaultValue={tempType}
                style={{ marginBottom: "0.5em" }}
                onKeyPress={(e) => {
                  const keyCode = e.keyCode || e.which;
                  const keyValue = String.fromCharCode(keyCode);
                  if (!/^[a-zA-Z\s]*$/.test(keyValue)) e.preventDefault();
                }}
                onChange={(e) => setTempType(e.target.value)}
              />
              <input
                type="text"
                className="form-control"
                id="email"
                defaultValue={tempEmail}
                style={{ marginBottom: "0.5em" }}
                onChange={(e) => setTempEmail(e.target.value)}
              />
              <div style={{ height: "94px" }}>
                <div
                  className="telephoneHolder"
                  style={{ display: "flex", flexDirection: "row" }}
                >
                  <input
                    type="text"
                    className="form-control"
                    id="tel1"
                    defaultValue={tempTelephone1}
                    style={{ marginBottom: "0.5em" }}
                    onKeyPress={(e) => {
                      const keyCode = e.keyCode || e.which;
                      const keyValue = String.fromCharCode(keyCode);
                      if (/^[a-zA-Z\s]*$/.test(keyValue)) e.preventDefault();
                    }}
                    onChange={(e) => setTempTelephone1(e.target.value)}
                  />
                </div>
                {tel2 && (
                  <div
                    className="telephoneHolder"
                    style={{ display: "flex", flexDirection: "row" }}
                  >
                    <input
                      type="text"
                      className="form-control"
                      id="tel2"
                      defaultValue={tempTelephone2}
                      style={{ marginBottom: "0.5em" }}
                      onKeyPress={(e) => {
                        const keyCode = e.keyCode || e.which;
                        const keyValue = String.fromCharCode(keyCode);
                        if (/^[a-zA-Z\s]*$/.test(keyValue)) e.preventDefault();
                      }}
                      onChange={(e) => setTempTelephone2(e.target.value)}
                    />
                    <IoIosClose
                      onClick={handleRemove2}
                      size={"35px"}
                      style={{
                        position: "absolute",
                        marginLeft: "10.5%",
                        marginTop: "0.2%",
                        cursor: "pointer",
                      }}
                    />
                  </div>
                )}
                {!tel2 && (
                  <FaPlus
                    size={"20px"}
                    color={"#01A95D"}
                    style={{ marginRight: "14%", cursor: "pointer" }}
                    onClick={handleAdd}
                  />
                )}
              </div>
            </div>
          </div>
        </div>
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
                    defaultValue={tempRepName}
                    onKeyPress={(e) => {
                      const keyCode = e.keyCode || e.which;
                      const keyValue = String.fromCharCode(keyCode);
                      if (!/^[a-zA-Z\s]*$/.test(keyValue)) e.preventDefault();
                    }}
                    onChange={(e) => setTempRepName(e.target.value)}
                  />
                  <div style={{ display: "flex" }}>
                    <EditRadioButton
                      text={"Male"}
                      height={"25px"}
                      checked={checked === props.repGender}
                      setChecked={setChecked}
                    />
                    <EditRadioButton
                      text={"Female"}
                      height={"25px"}
                      checked={checked === props.repGender}
                      setChecked={setChecked}
                    />
                  </div>
                  <input
                    type="email"
                    className="form-control"
                    id="repEmail"
                    defaultValue={tempRepEmail}
                    style={{ marginBottom: "0.5em", width: "240px" }}
                    onChange={(e) => setTempRepEmail(e.target.value)}
                  />
                  <input
                    type="tel"
                    className="form-control"
                    id="repNumber"
                    defaultValue={tempRepContactNumber}
                    style={{ marginBottom: "0.5em", width: "240px" }}
                    onKeyPress={(e) => {
                      const keyCode = e.keyCode || e.which;
                      const keyValue = String.fromCharCode(keyCode);
                      if (/^[a-zA-Z\s]*$/.test(keyValue)) e.preventDefault();
                    }}
                    onChange={(e) => setTempRepContactNumber(e.target.value)}
                  />
                </div>
              </div>
            </div>
          </div>
          <div className={"upload-doc-card"}>
            <div style={{ width: "48%" }}>
              <h2>Address Details</h2>
              <hr />
              <div
                className={"text-in-personal-info-card"}
                style={{
                  position: "relative",
                  width: "100%",
                  marginLeft: "4%:",
                }}
              >
                <div className={"org-info-header"}>
                  <h5>Area</h5>
                  <h5>City</h5>
                  <h5>Address</h5>
                </div>
                <div className={"my-profile-info"}>
                  <input
                    type="text"
                    className="form-control"
                    id="Area"
                    defaultValue={tempArea}
                    style={{ marginBottom: "0.5em" }}
                    onChange={(e) => setTempArea(e.target.value)}
                  />
                  <input
                    type="text"
                    className="form-control"
                    id="City"
                    defaultValue={tempCity}
                    style={{ marginBottom: "0.5em" }}
                    onChange={(e) => setTempCity(e.target.value)}
                  />
                  <input
                    type="text"
                    className="form-control"
                    id="Address"
                    defaultValue={tempAddress}
                    style={{ marginBottom: "0.5em" }}
                    onChange={(e) => setTempAddress(e.target.value)}
                  />
                </div>
              </div>
            </div>
            <Map height={"220px"} width={"300px"} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default EditOrganizationAccountInfo;
