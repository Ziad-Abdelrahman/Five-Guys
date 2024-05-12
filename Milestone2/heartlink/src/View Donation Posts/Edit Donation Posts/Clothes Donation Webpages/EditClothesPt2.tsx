import { useState } from "react";
import EditRadioButton from "../../../components/RadioButton/EditRadioButton.tsx";
import EditNumberInputBox from "../../../components/InputBox/EditNumberInputBox.tsx";
import Template1 from "../../../components/Templates/Template1.tsx";
import Createcomp from "../../../components/View Request Popup/Createcomp.tsx";

interface ClothesPt2Props {
  id: string;
  size: string;
  quantity: string;
}

function EditClothesPt2(props: ClothesPt2Props) {
  const [size, setSize] = useState(props.size);
  const [errorMessage, setError] = useState("");
  const [success, setSuccess] = useState(false);
  const [quantity, setQuantity] = useState(props.quantity);

  const handleClick = () => {
    if (quantity.trim() === "") {
      setError("Please enter a quantity.");
      return false;
    }
    setError("");
    setSuccess(true);
    console.log("Form submitted successfully!");
    return true;
  };
  return (
    <Template1
      leftPanelDiv={
        <div className="leftText">
          <p /> 2 of 2<h2> Creating your post!</h2>
          <p> Almost Done.. </p>
        </div>
      }
      rightPanelDiv={
        <div className="bloodDonation-container">
          <Createcomp message={"Post Successfully Updated!"} show={success} />

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
              setChecked={setQuantity}
            />
            {errorMessage && (
              <div style={{ color: "red", marginTop: "0.5rem" }}>
                {errorMessage}
              </div>
            )}
          </div>
        </div>
      }
      rightPanelButtonText={"Update"}
      hasButton={true}
      forwardPath={"../../ViewPosts"}
      backButtonPath={"../" + props.id}
      handleClick={handleClick}
    />
  );
}

export default EditClothesPt2;
