import Button from "../components/Buttons/Button.tsx";
import BackButton from "../components/Buttons/BackButton.tsx";
import logo from "../assets/minilogo.png";
import "./SignUp.css";
import Map from "../components/map/Map.tsx";
import FileUploader from "../components/FileUploader/FileUploader.tsx";
import { Form, Link } from "react-router-dom";
import { useState } from "react";
import CreateSignUp from "../components/View Request Popup/CreateSignUp.tsx";

function SignUpOrgP2() {
  const [form, setForm] = useState(false);

  function onHandleForm() {
    setForm(true);
  }

  return (
    <>
      {form && <CreateSignUp />}
      <div className="signUpMain" style={{ flexDirection: "row-reverse" }}>
        <div className="rightPartSignupB">
          <div className="logo-containerx">
            <Link to="/" className="noLink">
              <img src={logo} className="logo" alt="logo" />
              <label className="logoText">Dashboard</label>
            </Link>
          </div>
          <div className="rightText">
            <p className="leftTextProgress"> 3 of 3 </p>
            <h2 className="leftTextFirst">Sign up as an Organization!</h2>
            <p className="leftTextSecond"> Only few steps ahead .. </p>
          </div>
        </div>

        <Form onSubmit={onHandleForm}>
          <div className="rightPanelSignUpAB">
            <div className="rightPanel-containerS">
              <h2 style={{ position: "relative", bottom: "1em" }}>
                Verify details
              </h2>
              <div className="dataHolderJJ">
                <div className="twoInputHolderS">
                  <div className="MapHolderJJ">
                    <label>Organization Location</label>
                    <Map height={"100%"} width={"200px"} />
                  </div>
                  <div className="MapHolderJJ">
                    <label>Organization Documents</label>
                    <FileUploader width={"200px"} required={true} />
                  </div>
                </div>
              </div>
            </div>
            <div className="footerSignUp">
              <div className="footerButtons-containerSignUpA">
                <Button text={"Sign Up"} />
                <Link to="../Organization/1">
                  <BackButton style={{ marginLeft: "5em" }} />{" "}
                </Link>
              </div>
            </div>
          </div>
        </Form>
      </div>
    </>
  );
}

export default SignUpOrgP2;
