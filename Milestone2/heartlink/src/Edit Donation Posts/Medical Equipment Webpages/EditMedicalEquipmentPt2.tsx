import "../../Donation Posts/createPost/createPost.css";

import Template1 from "../../components/Templates/Template1.tsx";
import EditMedicalSuppliesPt2 from "../Edit Medical Supplies/EditMedicalSuppliesPt2.tsx";

interface EditMedicalEquipmentPt2Props {
  use: string;
}

function EditMedicalEquipmentPt2(props: EditMedicalEquipmentPt2Props) {
  return (
    <Template1
      leftPanelDiv={
        <div className="leftText">
          <p />2 of 2<h2> Updating your post!</h2>
          <br />
        </div>
      }
      rightPanelDiv={
        <EditMedicalSuppliesPt2 header={"Medical Equipment"} use={props.use} />
      }
      rightPanelButtonText={"Update"}
      hasButton={true}
    />
  );
}

export default EditMedicalEquipmentPt2;
