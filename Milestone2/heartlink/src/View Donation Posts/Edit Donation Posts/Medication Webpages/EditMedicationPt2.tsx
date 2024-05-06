import { useState } from "react";
import ImageUploader from "../../../components/FileUploader/ImageUploader.tsx";
import EditNumberInputBox from "../../../components/InputBox/EditNumberInputBox.tsx";
import EditInputBox from "../../../components/InputBox/EditInputBox.tsx";
import Template1 from "../../../components/Templates/Template1.tsx";

interface EditMedicationPt2Props {
  id: string;
  medName: string;
  quantity: string;
}

function EditMedicationPt2(props: EditMedicationPt2Props) {
  const [medName, setMedName] = useState(props.medName);
  const [quantity, setQuantity] = useState(props.quantity);
  const divStyle = {
    display: "flex",
    justifyContent: "space-between",
    width: "600px",
  };
  return (
    <>
      <div className="header-container">
        <h1>Medication</h1>
      </div>
      <div className="rest-container" style={{ top: "13em" }}>
        <div style={divStyle}>
          <h5 style={{ position: "relative", marginTop: "3%" }}>
            What is the medication's name?
          </h5>
          <EditInputBox
            type={"text"}
            label={"Specify medication"}
            width={"280px"}
            text={medName}
            hasText={medName !== ""}
            setChecked={setMedName}
          />
        </div>
        <div style={divStyle}>
          <h5 style={{ position: "relative", marginTop: "3%" }}>
            Please specify quantity needed
          </h5>
          <EditNumberInputBox
            label={"Quantity"}
            width={"280px"}
            text={quantity}
            hasText={quantity !== ""}
            setChecked={setQuantity}
          />
        </div>
        <div style={divStyle}>
          <h5 style={{ position: "relative", marginTop: "13%" }}>
            {" "}
            Please upload the med's photo
          </h5>
          <ImageUploader width={"280px"} height={"180px"} />
        </div>
      </div>
    </>
  );
}

export default EditMedicationPt2;
