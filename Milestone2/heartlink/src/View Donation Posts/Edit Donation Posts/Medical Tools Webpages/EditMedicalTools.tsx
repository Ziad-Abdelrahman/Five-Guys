import "../../../Donation Posts/createPost/createPost.css";
import { useState } from "react";
import EditMedicalSupplies from "../Edit Medical Supplies/EditMedicalSupplies.tsx";
import Template1 from "../../../components/Templates/Template1.tsx";
import EditDropDown from "../../../components/DropDown/EditDropDown.tsx";

interface EditMedicalToolsProps {
  id: string;
  category: string;
  value: string;
  quantity: string;
}

function EditMedicalTools(props: EditMedicalToolsProps) {
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
          onChange1={handleChange1}
          onChange2={handleQuantityChange}
          err={error}
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
      hasButton={true}
      forwardPath={"../cont/" + props.id}
      backButtonPath={"../../ViewPosts"}
      handleClick={handleClick}
    />
  );
}

export default EditMedicalTools;
