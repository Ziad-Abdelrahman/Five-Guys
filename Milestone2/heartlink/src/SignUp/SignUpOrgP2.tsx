import Button from "../components/Buttons/Button.tsx";
import BackButton from "../components/Buttons/BackButton.tsx";
import logo from "../assets/minilogo.png";
import "./SignUp.css";
import Map from "../components/map/Map.tsx";
import FileUploader from "../components/FileUploader/FileUploader.tsx";
import { Link } from "react-router-dom";

function SignUpOrgP2() {
  return (
    <>
      <div className="signUpMain" style={{ flexDirection: "row-reverse" }}>
        <div className="rightPartSignupB">
          <div className="logo-containerx">
            <Link to="/">
              <img src={logo} className="logo" alt="logo" />
            </Link>
          </div>
          <div className="rightText">
            <p className="leftTextProgress"> 3 of 3 </p>
            <h2 className="leftTextFirst">Sign up as an Organization!</h2>
            <p className="leftTextSecond"> Only few steps ahead .. </p>
          </div>
        </div>

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
                  <FileUploader width={"200px"} />
                </div>
              </div>
            </div>
          </div>
          <div className="footerSignUp">
            <div className="footerButtons-containerSignUpA">
              <Link to="../../Organization">
                <Button text={"Sign Up"} />{" "}
              </Link>
              <Link to="../Organization/1">
                <BackButton style={{ marginLeft: "5em" }} />{" "}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default SignUpOrgP2;
