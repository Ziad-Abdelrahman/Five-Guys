import { ChangeEvent, useState } from "react";
import ImageUploader from "../../components/FileUploader/ImageUploader.tsx";
import InputBox from "../../components/InputBox/InputBox.tsx";
import NumberInputBox from "../../components/InputBox/NumberInputBox.tsx";
import Template1 from "../../components/Templates/Template1.tsx";
import Createcomp from "../../components/View Request Popup/Createcomp.tsx";
function ToysPt2() {
  const divStyle = {
    display: "flex",
    justifyContent: "space-between",
    width: "600px",
  };
  const [error, setError] = useState("");
  const [quantity, setQuantity] = useState("");
  const [toy, setToy] = useState("");
  const [success, setSuccess] = useState(false);
  

  const handlleQuantityChange = (num: string) => {
    setQuantity(num);
  };
  const handleClick = () => {
    if(toy.trim()==='' || quantity.trim()===''){
      setError("Please enter the toy name and the quantity");
      return false;
    }
    setSuccess(true);
    setError("");
    console.log("Form submitted successfully!");
    return true;
  }
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setToy(e.target.value);
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
        <>
          <Createcomp message={"Post Successfully Created!"} show={success} />
          <div className="header-container">
            <h1>Toys</h1>
          </div>
          <div className="rest-container" style={{ top: "13em" }}>
            <div style={divStyle}>
              <h5 style={{ position: "relative", marginTop: "3%" }}>
                What is the toy's name?
              </h5>
              <InputBox type={"text"} label={"Specify toy"} width={"280px"} onChange={handleChange}/>
            </div>
            <div style={divStyle}>
              <h5 style={{ position: "relative", marginTop: "3%" }}>
                How many toys do you need?
              </h5>
              <NumberInputBox label={"Quantity"} width={"280px"} handleChange={handlleQuantityChange}/>
            </div>
            <div style={divStyle}>
              <h5 style={{ position: "relative", marginTop: "13%" }}>
                {" "}
                Please upload the toy's photo
              </h5>
              <ImageUploader width={"280px"} height={"180px"} />
            </div>
            {error && <div style={{ color: "red", marginTop: "0.5rem" }}>{error}</div>}

          </div>
        </>
      }
      forwardPath={"/"}
      backButtonPath={"../1"}
      rightPanelButtonText={"Post"}
      hasButton={true}
      handleClick={handleClick}
    />
  );
}

export default ToysPt2;
