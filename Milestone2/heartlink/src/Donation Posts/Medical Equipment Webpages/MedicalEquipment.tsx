import "../createPost/createPost.css";
import Template1 from "../../components/Templates/Template1.tsx";
import MedicalSupplies from "../../components/MedicalSupplies/MedicalSupplies.tsx";
import DropDown from "../../components/DropDown/DropDown.tsx";
import { useState } from "react";

function MedicalEquipment() {
  const [disabled, setDisabled] = useState(true);
  const [quantity, setQuantity] = useState("");
  const [input, setInput] = useState("");
  const [error, setError] = useState("");
  const [equipment, setEquipment] = useState(false);

  function handleEquipChange(equip: string) {
    setDisabled(!(equip === "Others"));
    setEquipment(true);
  }
  function handleQuantityChange(num: string) {
    setQuantity(num);
  }
  function handleChange1(e: React.ChangeEvent<HTMLInputElement>) {
    setInput(e.target.value);
  }

  const handleClick = () => {
    if (!equipment || quantity === "" || (input === "" && !disabled)) {
      setError("Please fill in all fields");
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
          onChange1={handleChange1}
          onChange2={handleQuantityChange}
          err={error}
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
