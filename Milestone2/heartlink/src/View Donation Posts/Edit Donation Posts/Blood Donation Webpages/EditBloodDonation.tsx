import { useState } from "react";
import EditRadioButton from "../../../components/RadioButton/EditRadioButton.tsx";
import EditInputBox from "../../../components/InputBox/EditInputBox.tsx";
import Template1 from "../../../components/Templates/Template1.tsx";
import Createcomp from "../../../components/View Request Popup/Createcomp.tsx";
interface BloodProps {
  bloodType: string;
  patientName: string;
}
function EditBloodDonation(props: BloodProps) {
  const [bloodType, setBloodType] = useState(props.bloodType);
  const [patientName, setPatientName] = useState(props.patientName);
  const [errorMessage, setErrorMessage] = useState("");
  const [success, setSuccess] = useState(false);

  const handleClick = () => {
    if (patientName.trim() === "" ) {
      setErrorMessage(
        "Please provide a patient name.",
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
          <br />
          <p /> 1 of 1<h2> Editing your post!</h2>
        </div>
      }
      rightPanelDiv={
        <>
          <Createcomp message={"Post Successfully Updated!"} show={success} />
          <div className="header-container">
            <h1>Blood Donation</h1>
          </div>
          <div className="rest-container" style={{ top: "15em" }}>
            <h4> What type of blood do you need?</h4>
            <form className="radioButtons-form" method="get">
              <EditRadioButton
                text={"A+"}
                setChecked={setBloodType}
                checked={bloodType === "A+"}
              />
              <EditRadioButton
                text={"A-"}
                setChecked={setBloodType}
                checked={bloodType === "A-"}
              />
              <EditRadioButton
                text={"B+"}
                setChecked={setBloodType}
                checked={bloodType === "B+"}
              />
              <EditRadioButton
                text={"B-"}
                setChecked={setBloodType}
                checked={bloodType === "B-"}
              />
              <EditRadioButton
                text={"AB+"}
                setChecked={setBloodType}
                checked={bloodType === "AB+"}
              />
              <EditRadioButton
                text={"AB-"}
                setChecked={setBloodType}
                checked={bloodType === "AB-"}
              />
              <EditRadioButton
                text={"O+"}
                setChecked={setBloodType}
                checked={bloodType === "O+"}
              />
              <EditRadioButton
                text={"O-"}
                setChecked={setBloodType}
                checked={bloodType === "O-"}
              />
            </form>
            <br />
            <br />
            <h4> Who do you need the blood for?</h4>
            <p />
            <EditInputBox
              type={"text"}
              label={"Patient Name"}
              width={"280px"}
              text={patientName}
              setChecked={setPatientName}
              hasText={true}
            />
            {errorMessage && (<div style={{ color: "red", marginTop: "0.5rem" }}>{errorMessage}</div>)}
          </div>
        </>
      }
      rightPanelButtonText={"Update"}
      hasButton={true}
      forwardPath={"../../ViewPosts"}
      backButtonPath={"../../ViewPosts"}
      handleClick={handleClick}
    />
  );
}

export default EditBloodDonation;
