import EditRadioButton from "../../components/RadioButton/EditRadioButton.tsx";
import { useState } from "react";
import EditInputBox from "../../components/InputBox/EditInputBox.tsx";
interface BloodProps {
  bloodType: string;
  patientName: string;
}
function EditBloodDonation(props: BloodProps) {
  const [bloodType, setBloodType] = useState(props.bloodType);
  const [patientName, setPatientName] = useState(props.patientName);
  return (
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
  );
}

export default EditBloodDonation;
