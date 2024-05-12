import Personal from "../../assets/personalpic.jpeg";
import "./DonorAccountManagement.css";
import React, { useState } from "react";
import { IoIosClose } from "react-icons/io";
import { FaPlus } from "react-icons/fa6";
import LoginButton from "../Buttons/LoginButton.tsx";
import DeleteButton from "../Buttons/DeleteButton.tsx";

interface EditProfileCardProps {
  name: string;
  age: string;
  gender: string;
  governorate: string;
  address: string;
  tel1: string;
  tel2: string;
  setName: React.Dispatch<React.SetStateAction<string>>;
  setAge: React.Dispatch<React.SetStateAction<string>>;
  setGender: React.Dispatch<React.SetStateAction<string>>;
  setGovernorate: React.Dispatch<React.SetStateAction<string>>;
  setAddress: React.Dispatch<React.SetStateAction<string>>;
  setTel1: React.Dispatch<React.SetStateAction<string>>;
  setTel2: React.Dispatch<React.SetStateAction<string>>;
  setPage: React.Dispatch<React.SetStateAction<string>>;
}

function EditProfileCard(props: EditProfileCardProps) {
  const [tempName, setTempName] = useState(props.name);
  const [tempAge, setTempAge] = useState(props.age);
  const [tempGender, setTempGender] = useState(props.gender);
  const [tempGovernorate, setTempGovernorate] = useState(props.governorate);
  const [tempAddress, setTempAddress] = useState(props.address);
  const [tempTel1, setTempTel1] = useState(props.tel1);
  const [tempTel2, setTempTel2] = useState(props.tel2);
  const [tel2, setTel2] = useState(true);
  function handleSave() {
    props.setName(tempName);
    props.setAge(tempAge);
    props.setGender(tempGender);
    props.setGovernorate(tempGovernorate);
    props.setAddress(tempAddress);
    props.setTel1(tempTel1);
    props.setTel2(tempTel2);
    props.setPage("Account info");
  }

  function handleRemove2() {
    setTempTel2("");
    setTel2(false);
  }

  function handleAdd() {
    if (!tel2) {
      setTel2(true);
    }
  }

  return (
    <>
      <div className="donor-edit-Personal-Info-card">
        <div className="image-in-personalinfo-card">
          <img className={"profile-image"} src={Personal} />
        </div>
        <div style={{ display: "flex", flexDirection: "row" }}>
          <div className={"header-in-personal-info-card"}>
            <h3>My Profile</h3>
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
            <input
              type="text"
              className="form-control"
              id="repName"
              value={tempName}
              onChange={(e) => {
                const value = e.target.value;
                const isAlpha = /^[a-zA-Z\s]+$/.test(value);
                if (isAlpha || value === "") {
                  setTempName(value);
                }
              }}
              defaultValue={"Nanna"}
              style={{ marginBottom: "0.3em", width: "240px" }}
            />
            <input
              type="age"
              className="form-control"
              defaultValue={"20"}
              value={tempAge}
              onChange={(e) => {
                const value = e.target.value;
                const isValid = /^[0-9]*$/.test(value);
                if (isValid || value === "") {
                  setTempAge(value);
                }
              }}
              style={{ marginBottom: "0.3em", width: "240px" }}
            />
            <select
              className="form-control"
              value={tempGender}
              onChange={(e) => setTempGender(e.target.value)}
              style={{ marginBottom: "0.3em", width: "240px" }}
            >
              <option value="Male">Male</option>
              <option value="Female">Female</option>
            </select>
            <input
              type="Governorate"
              className="form-control"
              defaultValue={"Cairo"}
              value={tempGovernorate}
              onChange={(e) => {
                const value = e.target.value;
                const isAlpha = /^[a-zA-Z\s]+$/.test(value);
                if (isAlpha || value === "") {
                  setTempGovernorate(value);
                }
              }}
              style={{ marginBottom: "0.3em", width: "240px" }}
            />
            <input
              type="address"
              className="form-control"
              defaultValue={"T23 Street 5, Maadi, Cairo, Egypt"}
              value={tempAddress}
              onChange={(e) => setTempAddress(e.target.value)}
              style={{ marginBottom: "0.3em", width: "240px" }}
            />
            <div
              className="telephoneHolder"
              style={{ display: "flex", flexDirection: "row" }}
            >
              <div style={{ display: "flex", flexDirection: "row" }}>
                <div
                  style={{
                    display: "flex",
                    padding: "0px 12px",
                    border: "1px solid #ced4da",
                    borderRadius: "4px 0 0 4px",
                    backgroundColor: "#e9ecef",
                    height: "40px",
                    alignItems: "center",
                  }}
                >
                  +20
                </div>
                <input
                  type="tel"
                  className="form-control"
                  id="repName"
                  defaultValue={"01099224715"}
                  value={tempTel1}
                  onChange={(e) => {
                    const value = e.target.value;
                    const isValid = /^[1-9][0-9]*$/.test(value);
                    if (isValid || value === "") {
                      setTempTel1(value);
                    }
                  }}
                  style={{
                    marginBottom: "0.3em",
                    width: "200px",
                    borderRadius: "0 4px 4px 0",
                  }}
                />
              </div>
            </div>
            {tel2 && (
              <div
                className="telephoneHolder"
                style={{ display: "flex", flexDirection: "row" }}
              >
                <div style={{ display: "flex", flexDirection: "row" }}>
                  <div
                    style={{
                      display: "flex",
                      padding: "0px 12px",
                      border: "1px solid #ced4da",
                      borderRadius: "4px 0 0 4px",
                      backgroundColor: "#e9ecef",
                      height: "40px",
                      alignItems: "center",
                    }}
                  >
                    +20
                  </div>
                  <input
                    type="tel"
                    className="form-control"
                    id="repName"
                    defaultValue={"01113190357"}
                    value={tempTel2}
                    onChange={(e) => {
                      const value = e.target.value;
                      const isValid = /^[1-9][0-9]*$/.test(value);
                      if (isValid || value === "") {
                        setTempTel2(value);
                      }
                    }}
                    style={{
                      marginBottom: "0.3em",
                      width: "200px",
                      borderRadius: "0 4px 4px 0",
                    }}
                  />
                </div>
                <IoIosClose
                  onClick={handleRemove2}
                  fontSize={"35px"}
                  style={{ cursor: "pointer" }}
                />
              </div>
            )}
            {!tel2 && (
              <FaPlus
                size={"20px"}
                color={"#01A95D"}
                style={{ cursor: "pointer" }}
                onClick={handleAdd}
              />
            )}
          </div>
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            marginTop: "2%",
          }}
        >
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <DeleteButton
              text={"Cancel"}
              onClick={() => props.setPage("Account info")}
            />
          </div>
          <div onClick={handleSave}>
            <LoginButton text={"Save"} />
          </div>
        </div>
      </div>
    </>
  );
}

export default EditProfileCard;
