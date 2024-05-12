import "./donorAccountMangPage.css";
import InputBox from "../components/InputBox/InputBox.tsx";
import FileUploader from "../components/FileUploader/FileUploader.tsx";
import DonateButton from "../components/Buttons/DonateButton.tsx";
import { useState } from "react";
interface Props {
  setCurrentStep: Function;
}

function DonorAddDoctorInfo(props: Props) {
  const [specialization, setSpecialization] = useState("");
  const [numberOfCases, setNumberOfCases] = useState("");

  const [errorMessage, setErrorMessage] = useState("");
  const [isFileUploaded, setFileUploaded] = useState(false);
  const [isFile, setFile] = useState("");
  const handleFinishClick = () => {
    // Check if fields are empty and set error message accordingly
    if (!specialization.trim() || !numberOfCases.trim() || !isFile.trim()) {
      setErrorMessage("Please fill in all fields & upload the certification."); // Set error message
      setFileUploaded(false);
    } else {
      setErrorMessage(""); // Clear any previous error messages
      setFileUploaded(true);
      props.setCurrentStep(1);
    }
  };

  const handleFile = (x: boolean) => {
    if (x) setFile("Image Uploaded");
    else setFile("");
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
                <DonateButton text={"Next"} />
              </div>

              {errorMessage && (
                <div style={{ color: "red", marginLeft: "10px" }}>
                  {errorMessage}
                </div>
              )}
            </div>
          </div>
        </div>
        <div className={"Donor-file-uploader-container"}>
          <FileUploader
            text={"Upload Certification"}
            upload={isFileUploaded}
            handleUpload={handleFile}
          />
        </div>
      </div>
    </>
  );
}

export default DonorAddDoctorInfo;
