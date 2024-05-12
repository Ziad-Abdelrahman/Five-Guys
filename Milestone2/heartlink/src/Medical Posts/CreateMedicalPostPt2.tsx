import Template1 from "../components/Templates/Template1.tsx";
import "../Donation Posts/createPost/createPost.css";
import DropDown from "../components/DropDown/DropDown.tsx";
import { ChangeEvent, useState } from "react";
import Createcomp from "../components/View Request Popup/Createcomp.tsx";

function CreateMedicalPost() {
  const [error, setError] = useState("");
  const [text, setText] = useState("");
  const [success, setSuccess] = useState(false);
  const [areaOfConcern, setAreaOfConcern] = useState("");

  const handleChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setText(e.target.value);
  };
  const handleAreaOfConcern = (x: string) => {
    setAreaOfConcern(x);
  };
  const handleClick = () => {
    if (text.trim() === "" || areaOfConcern.trim() === "") {
      setError("Please provide all the required information.");
      return false;
    }
    setError("");
    setSuccess(true);
    console.log("Form submitted successfully!");
    return true;
  };

  return (
    <Template1
      leftPanelDiv={
        <div className="leftText">
          <p />2 of 2<h2> Creating your post!</h2>
          <p> Almost done .. </p>
        </div>
      }
      rightPanelDiv={
        <>
          <Createcomp message={"Post Successfully Created!"} show={success} />
          <div className="header-container">
            <h2> Medical Post</h2>
          </div>
          <div className="rest-container" style={{ top: "16em" }}>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                width: "600px",
                position: "relative",
                bottom: "2em",
              }}
            >
              <h5 style={{ position: "relative", marginTop: "1%" }}>
                {" "}
                What's the area of concern?
              </h5>
              <DropDown
                options={[
                  "Allergy & Immunology",
                  "Anesthesiology",
                  "Cardiology",
                  "Dermatology",
                  "Emergency Medicine",
                  "Endocrinology",
                  "Family Medicine",
                  "Gastroenterology",
                  "Geriatrics",
                  "Hematology",
                  "Infectious Disease",
                  "Internal Medicine",
                  "Medical Genetics",
                  "Nephrology",
                  "Neurology",
                  "Obstetrics & Gynecology",
                  "Oncology",
                  "Ophthalmology",
                  "Orthopedics",
                  "Otolaryngology (ENT)",
                  "Pain Medicine",
                  "Pathology",
                  "Pediatrics",
                  "Physical Medicine & Rehabilitation",
                  "Plastic Surgery",
                  "Psychiatry",
                  "Pulmonology",
                  "Radiology",
                  "Rheumatology",
                  "Sleep Medicine",
                  "Sports Medicine",
                  "Surgery",
                  "Urology",
                ]}
                selected={"Select medical speciality"}
                width={"280px"}
                onChange={handleAreaOfConcern}
              />
            </div>
            <div>
              <div className="mb-3" style={{ width: "600px" }}>
                <h5>Please write the details of the patient's medical case </h5>
                <textarea
                  className="form-control"
                  rows={9}
                  style={{
                    height: "270px",
                    borderColor: "#01A95D",
                  }}
                  onChange={handleChange}
                ></textarea>
              </div>
              {error && (
                <div
                  style={{
                    color: "red",
                    marginTop: "0.5rem",
                    textAlign: "center",
                  }}
                >
                  {error}
                </div>
              )}
            </div>
          </div>
        </>
      }
      rightPanelButtonText={"Post"}
      hasButton={true}
      backButtonPath={"../1"}
      forwardPath={"../../"}
      handleClick={handleClick}
    />
  );
}

export default CreateMedicalPost;
