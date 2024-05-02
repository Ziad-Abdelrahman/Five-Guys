import "../createPost/createPost.css";
import Template1 from "../../components/Templates/Template1.tsx";
import MedicalSupplies from "../../components/MedicalSupplies/MedicalSupplies.tsx";
import DropDown from "../../components/DropDown/DropDown.tsx";

function CreatePost() {
  return (
    <Template1
      leftPanelDiv={
        <div className="leftText">
          <p /> 2 of 3<h2> Creating your post!</h2>
          <p> Almost Done.. </p>
        </div>
      }
      rightPanelDiv={
        <MedicalSupplies name={"equipment"} header={"Medical Equipment"}>
          <DropDown
            options={[
              "Diagnostic Equipment",
              "Imaging Equipment",
              "Monitoring Equipment",
              "Therapeutic Equipment",
              "Surgical Equipment",
              "Rehabilitation Equipment",
            ]}
            selected={"Specify equipment category"}
            width={"280px"}
          />
        </MedicalSupplies>
      }
      rightPanelButtonText={"Post"}
      hasButton={true}
    />
  );
}

export default CreatePost;
