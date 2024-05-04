import RadioButton from "../../components/RadioButton/RadioButton.tsx";
import InputBox from "../../components/InputBox/InputBox.tsx";
function BloodDonation() {
  return (
    <>
      <div className="header-container">
        <h1>Blood Donation</h1>
      </div>
      <div className="rest-container" style={{ top: "15em" }}>
        <h4> What type of blood do you need?</h4>
        <form className="radioButtons-form" method="get">
          <RadioButton text={"A+"} />
          <RadioButton text={"A-"} />
          <RadioButton text={"B+"} />
          <RadioButton text={"B-"} />
          <RadioButton text={"AB+"} />
          <RadioButton text={"AB-"} />
          <RadioButton text={"O+"} />
          <RadioButton text={"O-"} />
        </form>
        <br />
        <br />
        <h4> Who do you need the blood for?</h4>
        <p />
        <InputBox type={"text"} label={"Patient name"} width={"280px"} />
      </div>
    </>
  );
}

export default BloodDonation;
