import DropDown from "../../components/DropDown/DropDown.tsx";
import { useState } from "react";
import NumberInputBox from "../../components/InputBox/NumberInputBox.tsx";
import hashSet from "../../hashSet";
import Template1 from "../../components/Templates/Template1.tsx";
function Stationary() {
  const [selectedCategory, setSelectedCategory] = useState("");
  const [selectedSupply, setSelectedSupply] = useState("");

  const handleCategoryChange = (category: string) => {
    setSelectedCategory(category);
    setSelectedSupply("");
  };

  const categoryExamples: hashSet = {
    "Art Supplies": [
      "Sketchbooks",
      "Paintbrushes",
      "Watercolor paints",
      "Oil pastels",
      "Modeling clay",
    ],
    "Backpacks and Bags": [
      "Backpacks",
      "Messenger bags",
      "Lunch bags",
      "Pencil cases",
      "Tote bags",
    ],
    "Calculators and Math Supplies": [
      "Scientific calculators",
      "Graphing calculators",
      "Compass and protractor sets",
      "Rulers (standard, metric, flexible)",
      "Math flashcards",
    ],
    "Drawing and Coloring": [
      "Chalk",
      "Crayons",
      "Colored pencils",
      "Coloring books",
      "WaterColor paints",
    ],
    "Notebooks and Paper": [
      "Spiral notebooks",
      "Composition notebooks",
      "Loose-leaf paper (lined, graph, blank)",
      "Index cards",
      "Sticky notes",
    ],
    "Organization and Planning": [
      "Planners and agendas",
      "Desk organizers",
      "Calendar dry erase boards",
      "Whiteboard markers",
      "Desktop file organizers",
    ],
    "Scissors, Glue, and Tape": [
      "Scissors",
      "Glue sticks",
      "Liquid glue",
      "Tape",
      "Staplers and staples",
    ],
    "Writing Instruments": [
      "Pens (ballpoint, gel, fountain)",
      "Pencils (mechanical, wooden)",
      "Markers (dry erase, permanent, highlighters)",
      "Crayons",
      "Colored pencils",
    ],
  };
  return (
    <Template1
      leftPanelDiv={
        <div className="leftText">
          <p /> 1 of 1<h2> Creating your post!</h2>
          <p> Almost Done.. </p>
        </div>
      }
      rightPanelDiv={
        <>
          <div className="header-container">
            <h1>School Supplies</h1>
          </div>
          <div className="rest-container" style={{ top: "12em" }}>
            <h4 style={{ marginBottom: "15px" }}>
              What category of school supplies do you need?
            </h4>
            <DropDown
              options={Object.keys(categoryExamples)}
              selected={"Specify category"}
              width={"280px"}
              onChange={handleCategoryChange}
            />
            <br />
            <br />
            <h4>What supply do you specifically need?</h4>
            <h6 style={{ marginBottom: "15px" }}>
              (Please select a category first)
            </h6>
            <DropDown
              options={
                selectedCategory ? categoryExamples[selectedCategory] : []
              }
              selected={selectedSupply || "Select supply"}
              width={"280px"}
              onChange={(supply) => setSelectedSupply(supply)}
              disabled={!selectedCategory}
            />

            <br />
            <br />
            <h4> How many pieces do you need?</h4>
            <NumberInputBox label={"Quantity"} width={"280px"} />
          </div>
        </>
      }
      rightPanelButtonText={"Post"}
      hasButton={true}
      forwardPath={"/"}
      backButtonPath={"../"}
    />
  );
}

export default Stationary;
