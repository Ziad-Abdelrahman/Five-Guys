import "../../../Donation Posts/createPost/createPost.css";
import EditMedicalSupplies from "../Edit Medical Supplies/EditMedicalSupplies.tsx";

import { useState } from "react";
import Template1 from "../../../components/Templates/Template1.tsx";
import EditDropDown from "../../../components/DropDown/EditDropDown.tsx";

interface EditMedicalEquipmentProps {
  id: string;
  category: string;
  value: string;
  quantity: string;
}

function EditMedicalEquipment(props: EditMedicalEquipmentProps) {
  const [disabled, setDisabled] = useState(props.category != "Others");
  const [quantity, setQuantity] = useState(props.quantity);
  const [input, setInput] = useState(props.value);
  const [error, setError] = useState("");

  function handleToolChange(tool: string) {
    setDisabled(!(tool === "Others"));
  }
  function handleQuantityChange(e: React.ChangeEvent<HTMLInputElement>) {
    setQuantity(e.target.value);
  }
  function handleChange1(e: React.ChangeEvent<HTMLInputElement>) {
    setInput(e.target.value);
  }
  const handleClick = () => {
    if (quantity.trim() === "" || (input === "" && !disabled)) {
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
          <p /> 1 of 2<h2> Updating your post!</h2>
          <br />
        </div>
      }
      rightPanelDiv={
        <EditMedicalSupplies
          name={"equipment"}
          header={"Medical Equipment"}
          val={input}
          quantity={quantity}
          disabled={disabled}
          onChange1={handleChange1}
          onChange2={handleQuantityChange}
          err={error}
        >
          <EditDropDown
            options={[
              "Specify equipment category",
              "Diagnostic Equipment",
              "Imaging Equipment",
              "Monitoring Equipment",
              "Therapeutic Equipment",
              "Surgical Equipment",
              "Rehabilitation Equipment",
              "Others",
            ]}
            selected={props.category}
            width={"280px"}
            onChange={handleToolChange}
          />
        </EditMedicalSupplies>
      }
      rightPanelButtonText={"Next"}
      hasButton={true}
      forwardPath={"../cont/" + props.id}
      backButtonPath={"../../ViewPosts"}
      handleClick={handleClick}
    />
  );
}

export default EditMedicalEquipment;
