import Template1 from "../../components/Templates/Template1.tsx";
import "../createPost/createPost.css";

import MedicalSuppliesPt2 from "../../components/MedicalSupplies/MedicalSuppliesPt2.tsx";

function MedicalToolsPt2() {
  return (
    <Template1
      leftPanelDiv={
        <div className="leftText">
          <p />2 of 2<h2> Creating your post!</h2>
          <p> Almost Done.. </p>
          <br />
        </div>
      }
      rightPanelDiv={<MedicalSuppliesPt2 header={"Medical Tools"} />}
      rightPanelButtonText={"Post"}
      hasButton={true}
    />
  );
}

export default MedicalToolsPt2;
