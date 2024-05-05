import "../createPost/createPost.css";
import Template1 from "../../components/Templates/Template1.tsx";
import MedicalSupplies from "../../components/MedicalSupplies/MedicalSupplies.tsx";
import DropDown from "../../components/DropDown/DropDown.tsx";
import { useState } from "react";

function CreatePost() {
  const [disabled, setDisabled] = useState(true);

  function handleEquipChange(equip: string) {
    setDisabled(!(equip === "Others"));
  }
  return (
    <Template1
      leftPanelDiv={
        <div className="leftText">
          <p /> 1 of 2<h2> Creating your post!</h2>
          <p> Few steps left.. </p>
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
        </MedicalSupplies>
      }
      rightPanelButtonText={"Next"}
      hasButton={true}
    />
  );
}

export default CreatePost;
