import React, { useState } from "react";
import EditMedicalSupplies from "../Edit Medical Supplies/EditMedicalSupplies";
import Template1 from "../../../components/Templates/Template1";
import EditDropDown from "../../../components/DropDown/EditDropDown";

interface EditMedicalEquipmentProps {
  id: string;
  category: string;
  value: string;
  quantity: string;
}

function EditMedicalEquipment(props: EditMedicalEquipmentProps) {
  const [disabled, setDisabled] = useState(props.category !== "Others");
  const [errorMessage, setErrorMessage] = useState("");

  function handleToolChange(tool: string) {
    setDisabled(tool !== "Others");
  }

  const handleClick = () => {
    if (
      props.value.trim() === "" ||
      props.quantity.trim() === "" ||
      props.category.trim() === "Specify equipment category"
    ) {
      setErrorMessage("Please fill in all fields.");
      return false;
    }

    // Perform any other logic here (e.g., navigation, form submission)
    console.log("Navigate to next step...");
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
          val={props.value}
          quantity={props.quantity}
          disabled={disabled}
          err={errorMessage}
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

