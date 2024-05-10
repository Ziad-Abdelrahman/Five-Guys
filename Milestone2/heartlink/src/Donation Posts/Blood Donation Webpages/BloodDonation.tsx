import React, { useState } from "react";
import RadioButton from "../../components/RadioButton/RadioButton.tsx";
import InputBox from "../../components/InputBox/InputBox.tsx";
import Template1 from "../../components/Templates/Template1.tsx";
import Createcomp from "../../components/View Request Popup/Createcomp.tsx";

function BloodDonation() {
  const [isBloodGroupSelected, setIsBloodGroupSelected] = useState(false);
  const [patientName, setPatientName] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [success, setSuccess] = useState(false);

  const handleBloodGroupSelection = () => {
    setIsBloodGroupSelected(true);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPatientName(e.target.value);
  };
  const handleClick = () => {
    if (!isBloodGroupSelected || patientName.trim() === "") {
      setErrorMessage(
        "Please select a blood group and provide a patient name.",
      );
      return false;
    }
    setSuccess(true);
    setErrorMessage("");
    console.log("Form submitted successfully!");
    return true;
  };

  return (
    <Template1
      leftPanelDiv={
        <div className="leftText">
          <p /> 1 of 1<h2> Creating your post!</h2>
          <p> Almost Done.. </p>
        </div>
      }
      rightPanelDiv={
        <>
          <Createcomp message={"Post Successfully Created!"} show={success} />
          <div className="header-container">
            <h1>Blood Donation</h1>
          </div>
          <div className="rest-container" style={{ top: "15em" }}>
            <h4> What type of blood do you need?</h4>
            <form className="radioButtons-form" method="get">
              <div onClick={handleBloodGroupSelection}>
                <RadioButton text={"A+"} />
              </div>
              <div onClick={handleBloodGroupSelection}>
                <RadioButton text={"A-"} />
              </div>
              <div onClick={handleBloodGroupSelection}>
                <RadioButton text={"B+"} />
              </div>
              <div onClick={handleBloodGroupSelection}>
                <RadioButton text={"B-"} />
              </div>
              <div onClick={handleBloodGroupSelection}>
                <RadioButton text={"AB+"} />
              </div>
              <div onClick={handleBloodGroupSelection}>
                <RadioButton text={"AB-"} />
              </div>
              <div onClick={handleBloodGroupSelection}>
                <RadioButton text={"O+"} />
              </div>
              <div onClick={handleBloodGroupSelection}>
                <RadioButton text={"O-"} />
              </div>
            </form>
            <br />
            <br />
            <h4> Who do you need the blood for?</h4>
            <p />
            <InputBox
              type={"text"}
              label={"Patient name"}
              width={"280px"}
              onChange={handleChange}
            />
            {errorMessage && (
              <div style={{ color: "red", marginTop: "0.5rem" }}>
                {errorMessage}
              </div>
            )}
          </div>
        </>
      }
      rightPanelButtonText={"Post"}
      hasButton={true}
      forwardPath="/"
      backButtonPath="../"
      handleClick={handleClick}
    />
  );
}

export default BloodDonation;
