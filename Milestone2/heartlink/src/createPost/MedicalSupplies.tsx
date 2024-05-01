import RadioButton from "../components/RadioButton/RadioButton.tsx";
import "./MedicalSupplies.css";
function MedicalSupplies() {
  return (
    <div>
      <div className="header-container">
        <h1>Medical Supplies</h1>
      </div>
      <div className="rest-container" style={{ top: "16em" }}>
        <h4 style={{ marginBottom: "15px" }}>
          Please choose the medical supply you need
        </h4>
        <form className="radioButtons-form" style={{}} method="get">
          <RadioButton text={"Antiseptic solution"} />
          <RadioButton text={"Bandages"} />
          <RadioButton text={"Breast Bump"} />
          <RadioButton text={"Cotton Balls"} />
          <RadioButton text={"Face Masks"} />
          <RadioButton text={"Gauze"} />
          <RadioButton text={"Hand Sanitizer"} />
          <RadioButton text={"Disposable Gloves"} />
          <RadioButton text={"Medical Masks"} />
          <RadioButton text={"Medical Tape"} />
          <RadioButton text={"Pulse Oximeter"} />
          <RadioButton text={"Rubbing Alcohol"} />
          <RadioButton text={"Thermometer"} />
          <RadioButton text={"Vitamins"} />
          <RadioButton text={"Wheelchair"} />
          <RadioButton text={"Pain relievers"} />
          <RadioButton text={"First Aid Kit"} />
          <RadioButton text={"Eye drops"} />
        </form>
      </div>
    </div>
  );
}

export default MedicalSupplies;
