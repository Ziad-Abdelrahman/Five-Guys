import { useState } from "react";
import NumberInputBox from "../../components/InputBox/NumberInputBox.tsx";
import RadioButton from "../../components/RadioButton/RadioButton.tsx";
import Template1 from "../../components/Templates/Template1.tsx";
import Createcomp from "../../components/View Request Popup/Createcomp.tsx";
function ClothesPt2() {
  const [quantity, setQuantity] = useState("");
  const [size, setSize] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);

  const handleSize = (size: string) => {
    setSize(size);
  };
  const handlleQuantityChange = (num: string) => {
    setQuantity(num);
  };
  const handleClick = () => {
    if (size === "" || quantity === "") {
      setError("Please enter the size and quantity.");
      return false;
    }
    setSuccess(true);
    setError("");
    console.log("Form submitted successfully!");
    return true;
  };
  return (
    <Template1
      leftPanelDiv={
        <div className="leftText">
          <p /> 2 of 2<h2> Creating your post!</h2>
          <p> One last step.. </p>
        </div>
      }
      rightPanelDiv={
        <div className="bloodDonation-container">
          <Createcomp message={"Post Successfully Created!"} show={success} />
          <div className="header-container">
            <h1>Clothes</h1>
          </div>
          <div className="rest-container" style={{ top: "16em" }}>
            <h4>What size of clothing are you looking for?</h4>
            <form className="radioButtons-form" method="get">
              <RadioButton text={"Small"} handleFilterChange={handleSize} />
              <RadioButton text={"Medium"} handleFilterChange={handleSize} />
              <RadioButton text={"Large"} handleFilterChange={handleSize} />
            </form>
            <p />
            <h4> How many pieces do you need?</h4>
            <NumberInputBox
              label={"Quantity"}
              width={"280px"}
              handleChange={handlleQuantityChange}
            />
            {error && (
              <div style={{ color: "red", marginTop: "0.5rem" }}>{error}</div>
            )}
          </div>
        </div>
      }
      rightPanelButtonText={"Post"}
      hasButton={true}
      forwardPath={"/"}
      backButtonPath={"../1"}
      handleClick={handleClick}
    />
  );
}

export default ClothesPt2;
