import RadioButton from "../../components/RadioButton/RadioButton.tsx";
import "./Medication.css";
function Medication() {
  return (
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
  );
}

export default Medication;
