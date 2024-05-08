import "./donorAccountMangPage.css";
import InputBox from "../components/InputBox/InputBox.tsx";
import FileUploader from "../components/FileUploader/FileUploader.tsx";
import DonateButton from "../components/Buttons/DonateButton.tsx";
import { useState } from "react";

function donorAddTeacherInfo() {
  const [isUnderReview, setUnderReview] = useState(false);

  const handleFinishClick = () => {
    setUnderReview(true); // Update state to show the under review message
  };
  return (
    <>
      {/*main container for probono info*/}
      <div className="probono-info-container">
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            width: "70%",
          }}
        >
          <h2>Teacher Info</h2>
          <div style={{ padding: "0 4%" }}>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              <h5>Specify Subject</h5>
              <InputBox width={"49%"} label={"Enter Subject"} type={"string"} />
            </div>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              <h5 style={{ marginRight: "10%", width: "41%" }}>
                Number of Students
              </h5>
              <InputBox
                width={"49%"}
                label={"Enter Quantity"}
                type={"number"}
              />
            </div>
            <div
              style={{
                marginTop: "5%",
                display: "flex",
                flexDirection: "row",
              }}
              onClick={handleFinishClick}
            >
              {" "}
              <DonateButton text={"Finish"} />
              {isUnderReview && (
                <div
                  style={{
                    justifyContent: "center", // Centers vertically in the flex container
                    alignItems: "center", // Centers horizontally in the flex container
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
          <FileUploader text={"Upload Certication"} />
        </div>
      </div>
    </>
  );
}

export default donorAddTeacherInfo;
