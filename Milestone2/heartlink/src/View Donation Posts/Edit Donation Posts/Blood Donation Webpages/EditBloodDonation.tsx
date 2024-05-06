import { useState } from "react";
import EditRadioButton from "../../../components/RadioButton/EditRadioButton.tsx";
import EditInputBox from "../../../components/InputBox/EditInputBox.tsx";
import Template1 from "../../../components/Templates/Template1.tsx";
interface BloodProps {
  bloodType: string;
  patientName: string;
}
function EditBloodDonation(props: BloodProps) {
  const [bloodType, setBloodType] = useState(props.bloodType);
  const [patientName, setPatientName] = useState(props.patientName);
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
              label={"Patient name"}
              width={"280px"}
              setChecked={setPatientName}
              hasText={patientName != ""}
              text={props.patientName}
            />
          </div>
        </>
      }
      rightPanelButtonText={"Update"}
      hasButton={true}
      forwardPath={"../../ViewPosts"}
      backButtonPath={"../../ViewPosts"}
    />
  );
}

export default EditBloodDonation;
