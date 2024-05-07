import "../../../Donation Posts/createPost/createPost.css";

import EditMedicalSuppliesPt2 from "../Edit Medical Supplies/EditMedicalSuppliesPt2.tsx";
import Template1 from "../../../components/Templates/Template1.tsx";

interface EditMedicalEquipmentPt2Props {
  id: string;
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
      forwardPath={"../../ViewPosts"}
      backButtonPath={"../" + props.id}
    />
  );
}

export default EditMedicalEquipmentPt2;
