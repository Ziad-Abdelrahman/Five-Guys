import { useState } from "react";
import InputBox from "../../components/InputBox/InputBox.tsx";
import NumberInputBox from "../../components/InputBox/NumberInputBox.tsx";
import Template1 from "../../components/Templates/Template1.tsx";

function Books() {
  const divStyle = {
    display: "flex",
    justifyContent: "space-between",
    width: "575px",
  };
  const [bookName, setBookName] = useState("");
  const [autherName, setAutherName] = useState("");
  const [language, setLanguage] = useState("");
  const [edition, setEdition] = useState("");
  const [quantity, setQuantity] = useState("");
  const [error, setError] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setBookName(e.target.value);
  };
  const handleChange1 = (e: React.ChangeEvent<HTMLInputElement>) => {
    setAutherName(e.target.value);
  };
  const handleChange2 = (e: React.ChangeEvent<HTMLInputElement>) => {
    setLanguage(e.target.value);
  };
  const handleChange3 = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEdition(e.target.value);
  };

  const handlleQuantityChange = (num: string) => {
    setQuantity(num);
  };

  const handleClick = () => {
    if (
      bookName.trim() === "" ||
      autherName.trim() === "" ||
      language.trim() === "" ||
      edition.trim() === "" ||
      quantity.trim() === ""
    ) {
      setError("Please provide all required details. ");
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
          <p> Few steps left.. </p>
        </div>
      }
      rightPanelDiv={
        <>
          <div className="header-container">
            <h1>Book Donation</h1>
          </div>
          <div className="rest-container" style={{ top: "12em" }}>
            <h4 style={{ padding: "13px" }}> What are the book's details?</h4>
            <div style={divStyle}>
              <InputBox
                type={"text"}
                label={"Book name"}
                width={"280px"}
                onChange={handleChange}
              />
              <InputBox
                type={"text"}
                label={"Author name"}
                width={"280px"}
                onChange={handleChange1}
              />
            </div>
            <div style={divStyle}>
              <InputBox
                type={"text"}
                label={"Language"}
                width={"280px"}
                onChange={handleChange2}
              />
              <InputBox
                type={"text"}
                label={"Edition"}
                width={"280px"}
                onChange={handleChange3}
              />
            </div>
            <p />
            <h4> How many copies do you need?</h4>
            <NumberInputBox
              label={"Quantity"}
              width={"280px"}
              handleChange={handlleQuantityChange}
            />
            {error && (
              <div style={{ color: "red", marginTop: "0.5rem" }}>{error}</div>
            )}
          </div>
        </>
      }
      rightPanelButtonText={"Next"}
      hasButton={true}
      forwardPath="../2"
      backButtonPath="../../"
      handleClick={handleClick}
    />
  );
}

export default Books;
