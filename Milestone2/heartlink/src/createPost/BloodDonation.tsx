import NumberInputBox from "../components/InputBox/NumberInputBox.tsx";
import RadioButton from "../components/RadioButton/RadioButton.tsx";
function BloodDonation() {
  return (
    <>
      <div className="header-container">
        <h1>Blood Donation</h1>
      </div>
      <div className="rest-container" style={{ top: "14em" }}>
        <h4> What type of blood do you need?</h4>
        <form className="radioButtons" method="get">
          <RadioButton text={"A+"} />
          <RadioButton text={"A-"} />
          <RadioButton text={"B+"} />
          <RadioButton text={"B-"} />
          <RadioButton text={"AB+"} />
          <RadioButton text={"AB-"} />
          <RadioButton text={"O+"} />
          <RadioButton text={"O-"} />
        </form>
        <p />
        <h4> How many bags of blood do you need?</h4>

        <NumberInputBox label={"Quantity"} width={"280px"} />
      </div>
    </>
  );
}

export default BloodDonation;
