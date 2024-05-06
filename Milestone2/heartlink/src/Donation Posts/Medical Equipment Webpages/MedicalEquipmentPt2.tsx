import Template1 from "../../components/Templates/Template1.tsx";
import "../createPost/createPost.css";

import MedicalSuppliesPt2 from "../../components/MedicalSupplies/MedicalSuppliesPt2.tsx";

function MedicalEquipmentPt2() {
  return (
    <Template1
      leftPanelDiv={
        <div className="leftText">
          <p />2 of 2<h2> Creating your post!</h2>
          <p>One last step.. </p>
        </div>
      }
      rightPanelDiv={<MedicalSuppliesPt2 header={"Medical Equipment"} />}
      rightPanelButtonText={"Post"}
      hasButton={true}
      forwardPath={"/"}
      backButtonPath={"../1"}
    />
  );
}

export default MedicalEquipmentPt2;
