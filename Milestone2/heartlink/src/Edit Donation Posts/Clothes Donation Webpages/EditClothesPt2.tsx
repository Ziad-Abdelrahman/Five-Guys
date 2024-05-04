import EditRadioButton from "../../components/RadioButton/EditRadioButton.tsx";
import { useState } from "react";
import EditNumberInputBox from "../../components/InputBox/EditNumberInputBox.tsx";

interface ClothesPt2Props {
  size: string;
  quantity: string;
}

function EditClothesPt2(props: ClothesPt2Props) {
  const [size, setSize] = useState(props.size);
  return (
    <div className="bloodDonation-container">
      <div className="header-container">
        <h1>Clothes</h1>
      </div>
      <div className="rest-container" style={{ top: "16em" }}>
        <h4>What size of clothing are you looking for?</h4>
        <form className="radioButtons-form" method="get">
          <EditRadioButton
            text={"Small"}
            checked={size == "Small"}
            setChecked={setSize}
          />
          <EditRadioButton
            text={"Medium"}
            checked={size == "Medium"}
            setChecked={setSize}
          />
          <EditRadioButton
            text={"Large"}
            checked={size === "Large"}
            setChecked={setSize}
          />
        </form>
        <p />
        <h4> How many pieces do you need?</h4>
        <EditNumberInputBox
          label={"Quantity"}
          width={"280px"}
          text={props.quantity}
          hasText={size !== ""}
          setChecked={setSize}
        />
      </div>
    </div>
  );
}

export default EditClothesPt2;
