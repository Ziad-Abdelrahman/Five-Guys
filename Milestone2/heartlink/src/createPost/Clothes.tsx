import NumberInputBox from "../components/InputBox/NumberInputBox.tsx";
import DropDown from "../components/DropDown/DropDown.tsx";
import RadioButton from "../components/RadioButton/RadioButton.tsx";
function Clothes() {
  return (
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
        />
        <p />
        <form method="get">
          <RadioButton text={"Male"} />
          <RadioButton text={"Female"} />
        </form>
        <p />

        <h4> What kind of clothes do you need?</h4>
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
        />
        <p />
        <h6>Please specify size</h6>
        <form method="get">
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

export default Clothes;
