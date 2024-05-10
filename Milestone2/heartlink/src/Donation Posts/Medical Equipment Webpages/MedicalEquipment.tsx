import "../createPost/createPost.css";
import Template1 from "../../components/Templates/Template1.tsx";
import MedicalSupplies from "../../components/MedicalSupplies/MedicalSupplies.tsx";
import DropDown from "../../components/DropDown/DropDown.tsx";
import { useState } from "react";

function MedicalEquipment() {
  const [disabled, setDisabled] = useState(true);
  const [error, setError] = useState("");
  const [equipment, setEquipment] = useState(false);

  function handleEquipChange(equip: string) {
    setDisabled(!(equip === "Others"));
    setEquipment (true);
  }
  const handleClick = () => {
    if (!equipment) {
      setError("Please choose a medical equipment.");
      return false;
    }
    setError("");
    console.log("Form submitted successfully!");
    return true;
  };
  return (
    <Template1
      leftPanelDiv={
        <div className="leftText">
          <p /> 1 of 2<h2> Creating your post!</h2>
          <p> Almost Done.. </p>
        </div>
      }
      rightPanelDiv={
        <MedicalSupplies
          name={"equipment"}
          header={"Medical Equipment"}
          disabled={disabled}
        >
          <DropDown
            options={[
              "Diagnostic Equipment",
              "Imaging Equipment",
              "Monitoring Equipment",
              "Therapeutic Equipment",
              "Surgical Equipment",
              "Rehabilitation Equipment",
              "Others",
            ]}
            selected={"Specify equipment category"}
            width={"280px"}
            onChange={handleEquipChange}
          />
        {error && <div style={{ color: "red", marginTop: "0.5rem" }}>{error}</div>}
        </MedicalSupplies>
      }
      rightPanelButtonText={"Next"}
      hasButton={true}
      forwardPath={"../2"}
      backButtonPath={"../.."}
      handleClick={handleClick}
    />
  );
}

export default MedicalEquipment;
