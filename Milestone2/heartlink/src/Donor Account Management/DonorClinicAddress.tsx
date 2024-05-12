import InputBox from "../components/InputBox/InputBox.tsx";
import DonateButton from "../components/Buttons/DonateButton.tsx";
import "./donorAccountMangPage.css";
import { useState } from "react";
import BackButton from "../components/Buttons/BackButton.tsx";
interface Props {
  setCurrentStep: Function;
}
function DonorClinicAddress(props: Props) {
  const [governorate, setGovernorate] = useState("");
  const [area, setArea] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleNextClick = () => {
    if (!governorate.trim() || !area.trim()) {
      setErrorMessage("Please fill in all fields."); // Set error message
    } else {
      setErrorMessage(""); // Clear any previous error messages
      props.setCurrentStep(2);
    }
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
          <h2>Clinic Location</h2>
          <div style={{ padding: "0 4%" }}>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              <h5 style={{ marginRight: "10%", width: "41%" }}>
                Enter Governerate
              </h5>
              <InputBox
                width={"49%"}
                label={"Enter Governerate"}
                type={"string"}
                onChange={(e) => setGovernorate(e.target.value)}
              />
            </div>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              <h5 style={{ marginRight: "10%", width: "41%" }}>Enter Area</h5>
              <InputBox
                width={"49%"}
                label={"Enter Area"}
                type={"string"}
                onChange={(e) => setArea(e.target.value)}
              />
            </div>
            {/*div that holds button and error message*/}
            <div
              style={{
                marginTop: "0%",
                display: "flex",
                flexDirection: "row",
              }}
            >
              {/*div that holds 2 buttons*/}
              <div style={{ display: "flex", flexDirection: "column" }}>
                <div onClick={handleNextClick}>
                  <DonateButton text={"Next"} />
                </div>
                <div>
                  <BackButton
                    style={{
                      height: "30px",
                      marginTop: "10px",
                      width: "100%",
                    }}
                    handleClick={() => props.setCurrentStep(0)}
                  />
                </div>
              </div>
              {errorMessage && (
                <div
                  style={{
                    display: "flex",
                    color: "red",
                    marginLeft: "15%",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  {errorMessage}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default DonorClinicAddress;
