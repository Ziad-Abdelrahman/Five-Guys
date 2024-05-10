import InputBox from "../InputBox/InputBox.tsx";
import NumberInputBox from "../InputBox/NumberInputBox.tsx";
import { ReactNode } from "react";

interface medicalSuppliesProps {
  children: ReactNode;
  name: string;
  header: string;
  disabled?: boolean;
  onChange1?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onChange2?: (tool: string) => void;
  err?: string;
}

function MedicalSupplies({
  children,
  name,
  header,
  disabled,
  onChange1,
  onChange2,
  err,
}: medicalSuppliesProps) {
  const plural = name === "equipment" ? name : name + "s";
  const FirstLetterUpper = name.charAt(0).toUpperCase() + name.slice(1);
  return (
    <div>
      <div className="header-container">
        <h1>{header}</h1>
      </div>
      <div className="rest-container" style={{ top: "13em" }}>
        <h4 style={{ marginBottom: "15px" }}>
          What kind of {plural} are you looking for?
        </h4>
        {children}
        <br />
        <h4>What's the name of the {name}?</h4>
        <h6 style={{ marginBottom: "15px" }}>(if "Others" is chosen)</h6>
        {disabled ? (
          <InputBox
            type={"text"}
            label={FirstLetterUpper + " name"}
            width={"280px"}
            disabled={true}
            value={""}
            onChange={onChange1}
          />
        ) : (
          <InputBox
            type={"text"}
            label={FirstLetterUpper + " name"}
            width={"280px"}
            onChange={onChange1}
          />
        )}
        <h4 style={{ marginBottom: "15px" }}>
          Please specify the quantity needed
        </h4>
        <NumberInputBox
          label={"Quantity"}
          width={"280px"}
          handleChange={onChange2}
        />
        {err && <div style={{ color: "red", marginTop: "0.5rem" }}>{err}</div>}
      </div>
    </div>
  );
}

export default MedicalSupplies;
