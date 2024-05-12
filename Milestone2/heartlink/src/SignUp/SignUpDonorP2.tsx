import { Form, Link, useNavigate } from "react-router-dom";
import logo from "../assets/minilogo.png";
import Button from "../components/Buttons/Button.tsx";
import BackButton from "../components/Buttons/BackButton.tsx";
import InputBox from "../components/InputBox/InputBox.tsx";
import Map from "../components/map/Map.tsx";
import FileUploader from "../components/FileUploader/FileUploader.tsx";
import EditRadioButton from "../components/RadioButton/EditRadioButton.tsx";
import { useState } from "react";
import CreateSignUp from "../components/View Request Popup/CreateSignUp.tsx";

function SignUpDonorP2() {
  const navigate = useNavigate();
  const [specialization, setSpecialization] = useState("");
  const [show, setShow] = useState(false);
  const [isFileUploaded, setFileUploaded] = useState(false);
  function handleForm(event: { preventDefault: () => void }) {
    event.preventDefault();
    if (specialization === "Later") navigate("../../Donor");
    else {
      setShow(true);
      setFileUploaded(true);
    }
  }
  return (
    <div>
      <>
        {show && <CreateSignUp />}
        <div className="signUpMain">
          <div className="leftPartSignupB">
            <div className="logo-containerx">
              <Link to="/" className="noLink">
                <img src={logo} className="logo" alt="logo" />
                <label className="logoText">Dashboard</label>
              </Link>
            </div>
            <div className="rightText">
              <p className="leftTextProgress"> 3 of 3 </p>
              <h2 className="leftTextFirst">Sign up as a Donor!</h2>
              <p className="leftTextSecond"> Only few steps ahead .. </p>
            </div>
          </div>
          <Form onSubmit={handleForm}>
            <div className="rightPanelSignUpA">
              <div className="rightPanel-containerS">
                <h2 style={{ position: "relative", bottom: "5%" }}>
                  Apply for probono
                </h2>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "center",
                  }}
                >
                  <EditRadioButton
                    text={"Doctor"}
                    margin={"0 8%"}
                    checked={specialization === "Doctor"}
                    setChecked={setSpecialization}
                    required={true}
                  />
                  <EditRadioButton
                    text={"Teacher"}
                    margin={"0 8%"}
                    checked={specialization === "Teacher"}
                    setChecked={setSpecialization}
                    required={true}
                  />
                  <EditRadioButton
                    text={"Later"}
                    margin={"0 8%"}
                    checked={specialization === "Later"}
                    setChecked={setSpecialization}
                    required={true}
                  />
                </div>
                <div className="dataHolderJJ" style={{ height: "58%" }}>
                  {specialization === "Doctor" ? (
                    <>
                      <div className="twoInputHolderS">
                        <InputBox
                          type={"text"}
                          label={"Speciality"}
                          width={"200px"}
                          required={true}
                        />
                        <InputBox
                          type={"text"}
                          label={"Clinic"}
                          width={"200px"}
                          required={true}
                        />
                      </div>
                      <div className="twoInputHolderS">
                        <div className="MapHolderJJ">
                          <label>Clinic Location</label>
                          <Map height={"100%"} width={"200px"} />
                        </div>
                        <div className="MapHolderJJ">
                          <label>Upload Certificate</label>
                          <FileUploader
                            width={"200px"}
                            required={true}
                            upload={isFileUploaded}
                          />
                        </div>
                      </div>
                    </>
                  ) : specialization === "Teacher" ? (
                    <>
                      <div className="twoInputHolderS">
                        <InputBox
                          type={"text"}
                          label={"Subject"}
                          width={"200px"}
                          required={true}
                        />
                        <InputBox
                          type={"text"}
                          label={"School"}
                          width={"200px"}
                          required={true}
                        />
                      </div>
                      <div className="twoInputHolderS">
                        <div className="MapHolderJJ">
                          <label>Upload Certificate</label>
                          <FileUploader
                            width={"200px"}
                            required={true}
                            upload={isFileUploaded}
                          />
                        </div>
                      </div>
                    </>
                  ) : (
                    <></>
                  )}
                </div>
              </div>
              <div className="footerSignUp">
                <div className="footerButtons-containerSignUp">
                  <Button text={"Next"} />
                  <Link to="../Donor/1">
                    <BackButton />
                  </Link>
                </div>
              </div>
            </div>
          </Form>
        </div>
      </>
    </div>
  );
}

export default SignUpDonorP2;
