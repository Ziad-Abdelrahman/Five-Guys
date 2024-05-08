import RadioButton from "../../components/RadioButton/RadioButton.tsx";
import "./Medication.css";
import Template1 from "../../components/Templates/Template1.tsx";
function Medication() {
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
              <RadioButton text={"Analgesics"} />
              <RadioButton text={"Antibiotics"} />
              <RadioButton text={"Anticoagulants"} />
              <RadioButton text={"Antidepressants"} />
              <RadioButton text={"Antidiabetics"} />
              <RadioButton text={"Antiemetics"} />
              <RadioButton text={"Antihistamines"} />
              <RadioButton text={"Bronchodilators"} />
              <RadioButton text={"Diuretics"} />
              <RadioButton text={"Eye drops"} />
              <RadioButton text={"Laxatives"} />
              <RadioButton text={"Muscle relaxants"} />
              <RadioButton text={"Topical medications"} />
              <RadioButton text={"Vitamins"} />
              <RadioButton text={"First Aid Kit"} />
            </form>
          </div>
        </div>
      }
      rightPanelButtonText={"Next"}
      hasButton={true}
      forwardPath={"../2"}
      backButtonPath={"../../"}
    />
  );
}

export default Medication;
