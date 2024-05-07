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
            />
            <br />
            <br />
            <h4>Would you like toys for boys or girls?</h4>
            <form className="radioButtons-form" method="get">
              <RadioButton text={"Boys"} />
              <RadioButton text={"Girls"} />
            </form>
            <br />
          </div>
        </div>
      }
      forwardPath={"../2"}
      backButtonPath={"../../"}
      rightPanelButtonText={"Next"}
      hasButton={true}
    />
  );
}

export default Toys;
