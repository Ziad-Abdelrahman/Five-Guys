import RadioButton from "../../components/RadioButton/RadioButton.tsx";
import "./Medication.css";
import Template1 from "../../components/Templates/Template1.tsx";
import { useState } from "react";
function Medication() {
  const [error, setError] = useState("");
  const [category, setCategory] = useState(false);
  const handleCategory = () => {
    setCategory(true);
  }
  const handleClick = () => {
    if (!category) {
      setError("Please choose a category.");
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
            <h1>Medications</h1>
          </div>
          <div className="rest-container" style={{ top: "18em" }}>
            <h4 style={{ marginBottom: "15px" }}>
              Please choose the category you need
            </h4>
            <form
              className="radioButtons-form"
              style={{ width: "800px" }}
              method="get"
            >
              <div onClick={handleCategory}>
                <RadioButton text={"Analgesics"} />
              </div>
              <div onClick={handleCategory}>
                <RadioButton text={"Antibiotics"} />
              </div>
              <div onClick={handleCategory}>
                <RadioButton text={"Anticoagulants"} />
              </div>
              <div onClick={handleCategory}>
                <RadioButton text={"Antidepressants"} />
              </div>
              <div onClick={handleCategory}>
                <RadioButton text={"Antidiabetics"} />
              </div>
              <div onClick={handleCategory}>
                <RadioButton text={"Antiemetics"} />
              </div>
              <div onClick={handleCategory}>
                <RadioButton text={"Antihistamines"} />
              </div>
              <div onClick={handleCategory}>
                <RadioButton text={"Bronchodilators"} />
              </div>
              <div onClick={handleCategory}>
                <RadioButton text={"Diuretics"} />
              </div>
              <div onClick={handleCategory}>
                <RadioButton text={"Eye drops"} />
              </div>
              <div onClick={handleCategory}>
                <RadioButton text={"Laxatives"} />
              </div>
              <div onClick={handleCategory}>
                <RadioButton text={"Muscle relaxants"} />
              </div>
              <div onClick={handleCategory}>
                <RadioButton text={"Topical medications"} />
              </div>
              <div onClick={handleCategory}>
                <RadioButton text={"Vitamins"} />
              </div>
              <div onClick={handleCategory}>
                <RadioButton text={"First Aid Kit"} />
              </div>
              {error && <div style={{ color: "red", marginTop: "0.5rem" }}>{error}</div>}


            </form>
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

export default Medication;
