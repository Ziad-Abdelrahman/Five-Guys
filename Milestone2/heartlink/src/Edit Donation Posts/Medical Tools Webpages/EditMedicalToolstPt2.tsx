import "../../Donation Posts/createPost/createPost.css";
import Template1 from "../../components/Templates/Template1.tsx";
import EditMedicalSuppliesPt2 from "../Edit Medical Supplies/EditMedicalSuppliesPt2.tsx";

interface EditMedicalToolsPt2Props {
  use: string;
}

function EditMedicalToolsPt2({ use }: EditMedicalToolsPt2Props) {
  return (
    <Template1
      leftPanelDiv={
        <div className="leftText">
          <p />2 of 2<h2> Updating your post!</h2>
          <br />{" "}
        </div>
      }
      rightPanelDiv={
        <EditMedicalSuppliesPt2 header={"Medical Tools"} use={use} />
      }
      rightPanelButtonText={"Update"}
      hasButton={true}
    />
  );
}

export default EditMedicalToolsPt2;
