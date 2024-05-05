import "../../Donation Posts/createPost/createPost.css";
import Template1 from "../../components/Templates/Template1.tsx";
import { useState } from "react";
import EditMedicalSupplies from "../Edit Medical Supplies/EditMedicalSupplies.tsx";
import EditDropDown from "../../components/DropDown/EditDropDown.tsx";

interface EditMedicalToolsProps {
  category: string;
  value: string;
  quantity: string;
}

function EditMedicalTools(props: EditMedicalToolsProps) {
  const [disabled, setDisabled] = useState(props.category != "Others");

  function handleToolChange(tool: string) {
    setDisabled(!(tool === "Others"));
  }
  return (
    <Template1
      leftPanelDiv={
        <div className="leftText">
          <p /> 1 of 2<h2> Updating your post!</h2>
          <br />{" "}
        </div>
      }
      rightPanelDiv={
        <EditMedicalSupplies
          name={"tool"}
          header={"Medical Tools"}
          quantity={props.quantity}
          val={props.value}
          disabled={disabled}
        >
          <EditDropDown
            options={[
              "Specify Category",
              "Compartment trays",
              "Dermatoscope",
              "Endoscope",
              "Forceps",
              "Gauze",
              "Goniometer",
              "Laryngoscope",
              "Medical tape",
              "Medicine cups",
              "Needle holders",
              "Needles",
              "Ophthalmoscope",
              "Otoscope",
              "Pulse Oximeter",
              "Reflex Hammer",
              "Retractor",
              "Scalpel",
              "Scissors",
              "Speculum",
              "Sphygmomanometer",
              "Stethoscope",
              "Suction Catheter",
              "Surgical Suture",
              "Syringes",
              "Tongue Depressor",
              "Tourniquet",
              "Towels",
              "Tuning Fork",
              "Others",
            ]}
            selected={props.category}
            width={"280px"}
            onChange={handleToolChange}
          />
        </EditMedicalSupplies>
      }
      rightPanelButtonText={"Next"}
    />
  );
}

export default EditMedicalTools;
