import { useState } from "react";
import DropDown from "../../components/DropDown/DropDown.tsx";
import RadioButton from "../../components/RadioButton/RadioButton.tsx";
import Template1 from "../../components/Templates/Template1.tsx";

function Toys() {
  const toysOptions = [
    "Action Figures",
    "Art Supplies",
    "Board Games",
    "Building Blocks and Duplo Sets",
    "Card Games",
    "Collectibles",
    "Dolls and Stuffed Animals",
    "Electronics Kits",
    "Model Kits",
    "Outdoor Toys",
    "Plush Toys and Stuffed Animals",
    "Puzzles and Brain Teasers",
    "Remote-Controlled Vehicles",
    "Science Kits",
    "Sensory Toys",
    "Simple Puzzles and Shape Sorters",
    "Soft and Plush Toys",
    "Strategy Games",
    "Toy Vehicles",
  ];
  const [age, setAge] = useState(false);
  const [toys, setToys] = useState(false);
  const [gender, setGender] = useState(false);
  const [error, setError] = useState("");

  const handleAge = () => {
    setAge(true);
  }
  const handleToys = () => {
    setToys(true);
  }
  const handleGender = () => {
    setGender(true);
  }

  const handleClick = () => {
    if (!age || !toys || !gender) {
      setError("Please provide all the required information.");
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
          <p> Almost Done.. </p>
        </div>
      }
      rightPanelDiv={
        <div>
          <div className="header-container">
            <h1>Toys</h1>
          </div>
          <div className="rest-container" style={{ top: "12em" }}>
            <h4 style={{ marginBottom: "15px" }}>
              Which age group do you want toys for?
            </h4>
            <DropDown
              options={[
                "0-2 years",
                "3-4 years",
                "5-7 years",
                "8-10 years",
                "11-12 years",
                "13+ years",
              ]}
              selected={"Specify age group"}
              width={"280px"}
              onChange={handleAge}

            />
            <br />
            <br />
            <h4 style={{ marginBottom: "15px" }}>
              What category of toys do you want?
            </h4>

            <DropDown
              options={toysOptions}
              selected={"Specify a category"}
              width={"280px"}
              onChange={handleToys}
            />
            <br />
            <br />
            <h4>Would you like toys for boys or girls?</h4>
            <form className="radioButtons-form" method="get">
              <div onClick={handleGender}>
              <RadioButton text={"Boys"}/>
              </div>
              <div onClick={handleGender}> 
              <RadioButton text={"Girls"} />
              </div>
            </form>
            {error && <div style={{ color: "red", marginTop: "0.5rem" }}>{error}</div>}

            <br />

          </div>
        </div>
      }
      forwardPath={"../2"}
      backButtonPath={"../../"}
      rightPanelButtonText={"Next"}
      hasButton={true}
      handleClick={handleClick} 
    />
  );
}

export default Toys;
