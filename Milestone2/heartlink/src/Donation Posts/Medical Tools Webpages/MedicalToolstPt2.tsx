import Template1 from "../../components/Templates/Template1.tsx";
import "../createPost/createPost.css";

import MedicalSuppliesPt2 from "../../components/MedicalSupplies/MedicalSuppliesPt2.tsx";
import Createcomp from "../../components/View Request Popup/Createcomp.tsx";
import { useState } from "react";

function MedicalToolsPt2() {
  const [success, setSuccess] = useState(false);
  const [input, setInput] = useState("");
  const [error, setError] = useState("");
  const [img, setImg] = useState("");
  function handleChange(e: React.ChangeEvent<HTMLTextAreaElement>) {
    setInput(e.target.value);
  }
  const handleImage = (x: boolean) => {
    if (x) setImg("Image Uploaded");
    else setImg("");
  };
  const handleClick = () => {
    if (input.trim() === "" || img.trim() === "") {
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
          <p />2 of 2<h2> Creating your post!</h2>
          <p> One last step.. </p>
          <br />
        </div>
      }
      rightPanelDiv={
        <div>
          <Createcomp message={"Post Successfully Created!"} show={success} />
          <MedicalSuppliesPt2
            header={"Medical Tools"}
            onChange={handleChange}
            onImage={handleImage}
            err={error}
          />
        </div>
      }
      rightPanelButtonText={"Post"}
      hasButton={true}
      forwardPath={"/"}
      backButtonPath={"../1"}
      handleClick={handleClick}
    />
  );
}

export default MedicalToolsPt2;
