import "../createPost/createPost.css";
import Template1 from "../../components/Templates/Template1.tsx";
import MedicalSupplies from "../../components/MedicalSupplies/MedicalSupplies.tsx";
import DropDown from "../../components/DropDown/DropDown.tsx";
import { useState } from "react";

function MedicalTools() {
  const [disabled, setDisabled] = useState(true);
  const [error, setError] = useState("");
  const [tools, setTools] = useState(false);

  function handleToolChange(tool: string) {
    setDisabled(!(tool === "Others"));
    setTools(true);
  }

  const handleClick = () => {
    if (!tools) {
      setError("Please choose a medical tools.");
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
          {error && <div style={{ color: "red", marginTop: "0.5rem" }}>{error}</div>}

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
