import { useState } from "react";
import EditDropDown from "../../../components/DropDown/EditDropDown.tsx";
import EditRadioButton from "../../../components/RadioButton/EditRadioButton.tsx";
import Template1 from "../../../components/Templates/Template1.tsx";

interface ToysProps {
  ageGroup: string;
  gender: string;
  category: string;
  id: string;
}

function EditToys(props: ToysProps) {
  const [gender, setGender] = useState(props.gender);
  const toysOptions = [
    "Specify a category",
    "Action Figures",
    "Art Supplies",
    "Board Games",
    "Building Blocks and Duplo Sets",
    "Card Games",
    "Collectibles",
    "Dolls and Stuffed Animals",
    "Electronics Kits",
    "Model Kits",
    "Outdoor EditToys",
    "Plush EditToys and Stuffed Animals",
    "Puzzles and Brain Teasers",
    "Remote-Controlled Vehicles",
    "Science Kits",
    "Sensory EditToys",
    "Simple Puzzles and Shape Sorters",
    "Soft and Plush EditToys",
    "Strategy Games",
    "Toy Vehicles",
  ];
  return (
    <Template1
      leftPanelDiv={
        <div className="leftText">
          <p /> 1 of 2<h2> Updating your post!</h2>
          <br />
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
            <EditDropDown
              options={[
                "Specify age group",
                "0-2 years",
                "3-4 years",
                "5-7 years",
                "8-10 years",
                "11-12 years",
                "13+ years",
              ]}
              selected={props.ageGroup}
              width={"280px"}
            />
            <br />
            <br />
            <h4 style={{ marginBottom: "15px" }}>
              What category of toys do you want?
            </h4>

            <EditDropDown
              options={toysOptions}
              selected={props.category}
              width={"280px"}
            />
            <br />
            <br />
            <h4>Would you like toys for boys or girls?</h4>
            <form className="radioButtons-form" method="get">
              <EditRadioButton
                text={"Boys"}
                setChecked={setGender}
                checked={gender === "Boys"}
              />
              <EditRadioButton
                text={"Girls"}
                setChecked={setGender}
                checked={gender === "Girls"}
              />
            </form>
            <br />
          </div>
        </div>
      }
      rightPanelButtonText={"Next"}
      hasButton={true}
      forwardPath={"../cont/" + props.id}
      backButtonPath={"../../ViewPosts"}
    />
  );
}

export default EditToys;
