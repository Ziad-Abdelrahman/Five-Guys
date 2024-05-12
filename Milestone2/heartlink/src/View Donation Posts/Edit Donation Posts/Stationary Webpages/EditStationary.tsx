import { useState } from "react";
import hashSet from "../../../hashSet";
import EditDropDown from "../../../components/DropDown/EditDropDown.tsx";
import EditNumberInputBox from "../../../components/InputBox/EditNumberInputBox.tsx";
import Template1 from "../../../components/Templates/Template1.tsx";
import Createcomp from "../../../components/View Request Popup/Createcomp.tsx";

interface StationaryProps {
  category: string;
  supply: string;
  quantity: string;
}

function EditStationary(props: StationaryProps) {
  const [selectedCategory, setSelectedCategory] = useState(props.category);
  const [selectedSupply, setSelectedSupply] = useState(props.supply);
  const [quantity, setQuantity] = useState(props.quantity);
  const [errorMessage, setErrorMessage] = useState("");
  const [success, setSuccess] = useState(false);

  const handleCategoryChange = (category: string) => {
    setSelectedCategory(category);
    setSelectedSupply("");
  };
  const handleClick = () => {
    if (quantity.trim() === "") {
      setErrorMessage("Please provide all required details. ");
      return false;
    }
    setSuccess(true);
    setErrorMessage("");
    console.log("Form submitted successfully!");
    return true;
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
          <p /> 1 of 1<h2> Updating your post!</h2>
          <br />
        </div>
      }
      rightPanelDiv={
        <>
          <Createcomp message={"Post Successfully Updated!"} show={success} />
          <div className="header-container">
            <h1>School Supplies</h1>
          </div>
          <div className="rest-container" style={{ top: "12em" }}>
            <h4 style={{ marginBottom: "15px" }}>
              What category of school supplies do you need?
            </h4>
            <EditDropDown
              options={Object.keys(categoryExamples)}
              selected={selectedCategory}
              width={"280px"}
              onChange={handleCategoryChange}
            />
            <br />
            <br />
            <h4>What supply do you specifically need?</h4>
            <h6 style={{ marginBottom: "15px" }}>
              (Please select a category first)
            </h6>
            <EditDropDown
              options={
                selectedCategory ? categoryExamples[selectedCategory] : []
              }
              selected={selectedSupply}
              width={"280px"}
              onChange={(supply) => setSelectedSupply(supply)}
              disabled={!selectedCategory}
            />

            <br />
            <br />
            <h4> How many pieces do you need?</h4>
            <EditNumberInputBox
              label={"Quantity"}
              width={"280px"}
              text={quantity}
              hasText={true}
              setChecked={setQuantity}
            />
            {errorMessage && (
              <div style={{ color: "red", marginTop: "0.5rem" }}>
                {errorMessage}
              </div>
            )}
          </div>
        </>
      }
      rightPanelButtonText={"Update"}
      hasButton={true}
      forwardPath={"../../ViewPosts"}
      backButtonPath={"../../ViewPosts"}
      handleClick={handleClick}
    />
  );
}

export default EditStationary;
