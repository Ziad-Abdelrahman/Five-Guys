import "../createPost/createPost.css";
import Template1 from "../../components/Templates/Template1.tsx";
import MedicalSupplies from "../../components/MedicalSupplies/MedicalSupplies.tsx";
import DropDown from "../../components/DropDown/DropDown.tsx";
import { useState } from "react";

function MedicalTools() {
  const [disabled, setDisabled] = useState(true);
  const [quantity, setQuantity] = useState("");
  const [input, setInput] = useState("");
  const [error, setError] = useState("");
  const [tools, setTools] = useState(false);

  function handleToolChange(tool: string) {
    setDisabled(!(tool === "Others"));
    setTools(true);
  }
  function handleQuantityChange(num: string) {
    setQuantity(num);
  }
  function handleChange1(e: React.ChangeEvent<HTMLInputElement>) {
    setInput(e.target.value);
  }

  const handleClick = () => {
    if (!tools || quantity === "" || (input === "" && !disabled)) {
      setError("Please fill in all fields.");
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
          <p> Almost.. </p>
        </div>
      }
      rightPanelDiv={
        <MedicalSupplies
          name={"tool"}
          header={"Medical Tools"}
          disabled={disabled}
          onChange1={handleChange1}
          onChange2={handleQuantityChange}
          err={error}
        >
          <DropDown
            options={[
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
            selected={"Specify tool category"}
            width={"280px"}
            onChange={handleToolChange}
          />
        </MedicalSupplies>
      }
      rightPanelButtonText={"Next"}
      hasButton={true}
      forwardPath={"../2"}
      backButtonPath={"../../"}
      handleClick={handleClick}
    />
  );
}

export default MedicalTools;
