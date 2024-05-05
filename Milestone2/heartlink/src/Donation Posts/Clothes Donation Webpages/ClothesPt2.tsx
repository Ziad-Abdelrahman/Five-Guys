import NumberInputBox from "../../components/InputBox/NumberInputBox.tsx";
import RadioButton from "../../components/RadioButton/RadioButton.tsx";
import Template1 from "../../components/Templates/Template1.tsx";
function ClothesPt2() {
  return (
    <Template1
      leftPanelDiv={
        <div className="leftText">
          <p /> 2 of 2<h2> Creating your post!</h2>
          <p> Almost Done.. </p>
        </div>
      }
      rightPanelDiv={
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
      }
      rightPanelButtonText={"Post"}
      hasButton={true}
    />
  );
}

export default ClothesPt2;
