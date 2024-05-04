import NumberInputBox from "../../components/InputBox/NumberInputBox.tsx";
import RadioButton from "../../components/RadioButton/RadioButton.tsx";
function ClothesPt2() {
  return (
    <div className="bloodDonation-container">
      <div className="header-container">
        <h1>Clothes</h1>
      </div>
      <div className="rest-container" style={{ top: "16em" }}>
        <h4>What size of clothing are you looking for?</h4>
        <form className="radioButtons-form" method="get">
          <RadioButton text={"Small"} />
          <RadioButton text={"Medium"} />
          <RadioButton text={"Large"} />
        </form>
        <p />
        <h4> How many pieces do you need?</h4>
        <NumberInputBox label={"Quantity"} width={"280px"} />
      </div>
    </div>
  );
}

export default ClothesPt2;
