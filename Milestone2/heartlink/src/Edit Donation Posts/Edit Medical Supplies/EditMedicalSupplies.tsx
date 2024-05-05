import { ReactNode, useState } from "react";
import EditInputBox from "../../components/InputBox/EditInputBox.tsx";
import EditNumberInputBox from "../../components/InputBox/EditNumberInputBox.tsx";
import InputBox from "../../components/InputBox/InputBox.tsx";

interface medicalSuppliesProps {
  children: ReactNode;
  name: string;
  header: string;
  val: string;
  quantity: string;
  disabled?: boolean;
}

function EditMedicalSupplies({
  children,
  name,
  header,
  quantity,
  val,
  disabled,
}: medicalSuppliesProps) {
  const [value, setValue] = useState(val);
  const [inputQuantity, setInputQuantity] = useState(quantity);
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
            value={""}
            disabled={true}
          />
        ) : (
          <EditInputBox
            type={"text"}
            label={FirstLetterUpper + " name"}
            width={"280px"}
            text={value}
            hasText={value !== ""}
            setChecked={setValue}
          />
        )}
        <h4 style={{ marginBottom: "15px" }}>
          Please specify the quantity needed
        </h4>
        <EditNumberInputBox
          label={"Quantity"}
          width={"280px"}
          text={inputQuantity}
          hasText={inputQuantity != ""}
          setChecked={setInputQuantity}
        />
      </div>
    </div>
  );
}

export default EditMedicalSupplies;
