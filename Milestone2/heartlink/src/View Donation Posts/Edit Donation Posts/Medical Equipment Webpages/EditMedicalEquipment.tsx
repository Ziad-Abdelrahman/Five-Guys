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

  function handleToolChange(tool: string) {
    setDisabled(!(tool === "Others"));
  }
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
    />
  );
}

export default EditMedicalEquipment;
