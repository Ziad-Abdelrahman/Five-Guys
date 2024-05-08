import Template1 from "../components/Templates/Template1.tsx";
import "../Donation Posts/createPost/createPost.css";
import DropDown from "../components/DropDown/DropDown.tsx";

function CreateMedicalPost() {
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
                ></textarea>
              </div>
            </div>
          </div>
        </>
      }
      rightPanelButtonText={"Post"}
      hasButton={true}
      forwardPath={"../../"}
    />
  );
}

export default CreateMedicalPost;
