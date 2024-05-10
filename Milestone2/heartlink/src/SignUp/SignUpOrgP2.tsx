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
              Verify entered details
            </h2>
            <Map height={"30%"} width={"30%"} />
            <FileUploader />
          </div>
          <div className="footerSignUp">
            <div className="footerButtons-containerSignUpA">
              <Button text={"Sign Up"} />
              <BackButton style={{ marginLeft: "5em" }} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default SignUpOrgP2;
