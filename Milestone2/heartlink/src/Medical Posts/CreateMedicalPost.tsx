import Template1 from "../components/Templates/Template1.tsx";
import InputBox from "../components/InputBox/InputBox.tsx";
import NumberInputBox from "../components/InputBox/NumberInputBox.tsx";
import "../Donation Posts/createPost/createPost.css";
import { useState } from "react";

function CreateMedicalPost() {
  const [patientName, setPatientName] = useState("");
  const [patientAge, setPatientAge] = useState("");
  const [patientWeight, setPatientWeight] = useState("");
  const [error, setError] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPatientName(e.target.value);
  };
  const handleChange1 = (age: string) => {
    setPatientAge(age);
  };
  const handleChange2 = (weight: string) => {
    setPatientWeight(weight);
  };
  const handleClick = () => {
    if (
      patientName.trim() === "" ||
      patientAge.trim() === "" ||
      patientWeight.trim() === ""
    ) {
      setError("Please provide all required details. ");
      return false;
    }
    setError("");
    console.log("Form submitted successfully!");
    return true;
  };
  return (
    <Template1
      leftPanelDiv={
        <div className="leftText">
          <p />1 of 2<h2> Creating your post!</h2>
          <p> Few steps left.. </p>
        </div>
      }
      rightPanelDiv={
        <>
          <div className="header-container">
            <h2> Medical Post</h2>
          </div>
          <div className="rest-container" style={{ top: "15em" }}>
            <h4> Please provide the patient's full details</h4>
            <p />
            <InputBox
              type={"text"}
              label={"Patient name"}
              width={"280px"}
              onChange={handleChange}
            />
            <p />
            <NumberInputBox
              label={"Patient age"}
              width={"280px"}
              handleChange={handleChange1}
            />
            <p />
            <NumberInputBox
              label={"Patient weight (in KG)"}
              width={"280px"}
              handleChange={handleChange2}
            />
            {error && (
              <div style={{ color: "red", marginTop: "0.5rem" }}>{error}</div>
            )}
          </div>
        </>
      }
      rightPanelButtonText={"Next"}
      hasButton={false}
      forwardPath={"../2"}
      handleClick={handleClick}
    />
  );
}

export default CreateMedicalPost;
