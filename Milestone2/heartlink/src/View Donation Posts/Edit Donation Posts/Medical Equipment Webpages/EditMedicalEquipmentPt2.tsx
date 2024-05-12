import "../../../Donation Posts/createPost/createPost.css";

import EditMedicalSuppliesPt2 from "../Edit Medical Supplies/EditMedicalSuppliesPt2.tsx";
import Template1 from "../../../components/Templates/Template1.tsx";
import { ChangeEventHandler, useState } from "react";
import Createcomp from "../../../components/View Request Popup/Createcomp.tsx";

interface EditMedicalEquipmentPt2Props {
  id: string;
  use: string;
  onChange?: ChangeEventHandler<HTMLTextAreaElement>;
  err?: string;
}

function EditMedicalEquipmentPt2(props: EditMedicalEquipmentPt2Props) {
  const [success, setSuccess] = useState(false);
  const [input, setInput] = useState(props.use);
  const [error, setError] = useState("");
  function handleChange(e: React.ChangeEvent<HTMLTextAreaElement>) {
    setInput(e.target.value);
  }
  const handleClick = () => {
    if (input.trim() === "") {
      setError("Please fill in all fields.");
      return false;
    }
    setSuccess(true);
    setError("");
    console.log("Form submitted successfully!");
    return true;
  };
  return (
    <Template1
      leftPanelDiv={
        <div className="leftText">
          <p />2 of 2<h2> Updating your post!</h2>
          <br />
        </div>
      }
      rightPanelDiv={
        <>
          <Createcomp message={"Post Successfully Updated!"} show={success} />
          <EditMedicalSuppliesPt2
            header={"Medical Equipment"}
            use={props.use}
            err={error}
            onChange={handleChange}
          />
        </>
      }
      rightPanelButtonText={"Update"}
      hasButton={true}
      forwardPath={"../../ViewPosts"}
      backButtonPath={"../" + props.id}
      handleClick={handleClick}
    />
  );
}

export default EditMedicalEquipmentPt2;
