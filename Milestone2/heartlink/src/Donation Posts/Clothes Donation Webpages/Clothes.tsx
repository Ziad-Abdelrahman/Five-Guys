import { useState } from "react";
import DropDown from "../../components/DropDown/DropDown.tsx";
import RadioButton from "../../components/RadioButton/RadioButton.tsx";
import Template1 from "../../components/Templates/Template1.tsx";
function Clothes() {
  const[age, setAge] = useState(false);
  const[gender, setGender] = useState(false);
  const[type, setType] = useState(false);
  const[season, setSeason] = useState(false);
  const[material, setMaterial] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const handleAge = () => {
    setAge(true);
  };
  const handleGender = () => {
    setGender(true);
  };
  const handleType = () => {
    setType(true);
  };
  const handleSeason = () => {
    setSeason(true);
  };
  const handleMaterial = () => {
    setMaterial(true);
  };
  const handleClick = () => {
    if (!age || !gender || !type || !material || !season) {
      setErrorMessage(
        "Please provide all the needed data.",
      );
      return false;
    }
    setErrorMessage("");
    console.log("Form submitted successfully!");
    return true;
  };
  return (
    <Template1
      leftPanelDiv={
        <div className="leftText">
          <p /> 1 of 2<h2> Creating your post!</h2>
          <p> Almost Done.. </p>
        </div>
      }
      rightPanelDiv={
        <div className="bloodDonation-container">
          <div className="header-container">
            <h1>Clothes</h1>
          </div>
          <div className="rest-container" style={{ top: "10em" }}>
            <h4> Who will be wearing these clothes?</h4>
            <DropDown
              options={["Infants", "Kids", "Adults"]}
              selected={"Specify age group"}
              width={"280px"}
              onChange={handleAge}
            />
            <p />
            <form className="radioButtons-form" method="get">
              <div onClick={handleGender}>
              <RadioButton text={"Male"} />
              </div>
              <div onClick={handleGender}>
              <RadioButton text={"Female"} />
              </div>
            </form>
            <p style={{ marginTop: "10px" }}></p>
            <h4 style={{ marginBottom: "15px" }}>
              What kind of clothes do you need?
            </h4>
            <DropDown
              options={[
                "Belts",
                "Blouses",
                "Coats",
                "Dresses",
                "Gloves",
                "Hats",
                "Jackets",
                "Jeans",
                "Pajamas",
                "Pants",
                "Scarves",
                "Shirts",
                "Shorts",
                "Skirts",
                "Socks",
                "Suits",
                "Sweaters",
                "Swimwear",
                "Tops",
                "Trousers",
                "Undergarments",
              ]}
              selected={"Specify category"}
              width={"280px"}
              onChange={handleType}

            />
            <p />
            <h6>Please specify clothing season</h6>
            <form className="radioButtons-form" method="get">
              <div onClick={handleSeason}>
              <RadioButton text={"Summer"} />
              </div >
              <div onClick={handleSeason}>
              <RadioButton text={"Spring"} />
              </div>
              <div onClick={handleSeason}>
              <RadioButton text={"Fall"} />
              </div>
              <div onClick={handleSeason}>
              <RadioButton text={"Winter"} />
              </div>
            </form>
            <p />
            <h6 style={{ marginBottom: "15px" }}>
              Please specify clothing material
            </h6>
            <DropDown
              options={[
                "Cashmere",
                "Chiffon",
                "Corduroy",
                "Cotton",
                "Denim",
                "Fleece",
                "Flannel",
                "Leather",
                "Linen",
                "Lycra",
                "Nylon",
                "Polyester",
                "Rayon",
                "Silk",
                "Satin",
                "Spandex",
                "Tweed",
                "Velvet",
                "Wool",
              ]}
              selected={"Specify a material"}
              width={"280px"}
              onChange={handleMaterial}
            />
             {errorMessage && (
              <div style={{ color: "red", marginTop: "0.5rem" }}>
                {errorMessage}
              </div>
            )}
          </div>
         
        </div>
      }
      rightPanelButtonText={"Next"}
      hasButton={true}
      forwardPath={"../2"}
      backButtonPath={"../../"}
      handleClick={handleClick}
    />
  );
}

export default Clothes;
