import React, { useState } from "react";
import InputBox from "../components/InputBox/InputBox.tsx";
import FileUploader from "../components/FileUploader/FileUploader.tsx";
import DonateButton from "../components/Buttons/DonateButton.tsx";

function donorAddTeacherInfo() {
  const [specialization, setSpecialization] = useState("");
  const [numberOfCases, setNumberOfCases] = useState("");
  const [isUnderReview, setUnderReview] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const handleFinishClick = () => {
    // Check if fields are empty and set error message accordingly
    if (!specialization.trim() || !numberOfCases.trim()) {
      setErrorMessage("Please fill in all fields & upload the certification."); // Set error message
      setUnderReview(false); // Ensure review message doesn't show
    } else {
      setUnderReview(true); // Update review status
      setErrorMessage(""); // Clear any previous error messages
    }
    console.log("After updating states:", {
      specialization,
      numberOfCases,
      errorMessage,
      isUnderReview,
    });
  };

  return (
    <>
      <div className="probono-info-container">
        <div style={{ display: "flex", flexDirection: "column", width: "70%" }}>
          <h2>Doctor Info</h2>
          <div style={{ padding: "0 4%" }}>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              <h5>Specify Specialization</h5>
              <InputBox
                width={"49%"}
                label={"Enter Specialization"}
                type={"string"}
                value={specialization}
                onChange={(e) => setSpecialization(e.target.value)}
              />
            </div>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              <h5 style={{ marginRight: "10%", width: "41%" }}>
                Number of Cases
              </h5>
              <InputBox
                width={"49%"}
                label={"Enter Quantity"}
                type={"number"}
                value={numberOfCases}
                onChange={(e) => setNumberOfCases(e.target.value)}
              />
            </div>
            <div
              style={{
                marginTop: "5%",
                display: "flex",
                flexDirection: "row",
              }}
            >
              <div onClick={handleFinishClick}>
                <DonateButton text={"Finish"} />
              </div>

              {errorMessage && (
                <div style={{ color: "red", marginLeft: "10px" }}>
                  {errorMessage}
                </div>
              )}

              {isUnderReview && !errorMessage && (
                <div
                  style={{
                    justifyContent: "center",
                    alignItems: "center",
                    textAlign: "center",
                  }}
                >
                  <h5 style={{ color: "#01A95D", marginLeft: "5%" }}>
                    Your documents are under review!
                  </h5>
                </div>
              )}
            </div>
          </div>
        </div>
        <div className={"Donor-file-uploader-container"}>
          <FileUploader text={"Upload Certification"} />
        </div>
      </div>
    </>
  );
}

export default donorAddTeacherInfo;
