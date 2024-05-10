import "../Donation Posts/createPost/createPost.css";
import "./SignUp.css";
import logo from "../assets/minilogo.png";
import Button from "../components/Buttons/Button.tsx";
import InputBox from "../components/InputBox/InputBox.tsx";
import RadioButton from "../components/RadioButton/RadioButton.tsx";
import { Link } from "react-router-dom";
import { useState } from "react";

function SignUp() {
  const [path, setPath] = useState("Donor/1");
  const [animationInProgress, setAnimationInProgress] = useState(false);
  const slideRightToLeft = () => {
    if (animationInProgress) return;
    setAnimationInProgress(true);
    setPath("Organization/1");
    var rightPanel = document.querySelector(
      ".rightPanelSignUpA",
    ) as HTMLElement;
    var button = document.querySelector(
      ".footerButtons-containerSignUp button",
    ) as HTMLButtonElement;
    if (rightPanel) {
      rightPanel.classList.add("animateRightToLeft");
      rightPanel.classList.remove("animateLeftToRight");
      button.classList.add("show");
      button.classList.remove("hide");
      setTimeout(() => {
        if (rightPanel) {
          rightPanel.style.right = "";
          rightPanel.style.left = "-5%";
          rightPanel.classList.remove("animateRightToLeft");
          setAnimationInProgress(false);
        }
      }, 1000);
    }
  };

  const slideLeftToRight = () => {
    if (animationInProgress) return;
    setAnimationInProgress(true);
    setPath("Donor/1");
    var rightPanel = document.querySelector(
      ".rightPanelSignUpA",
    ) as HTMLElement;
    var button = document.querySelector(
      ".footerButtons-containerSignUp button",
    ) as HTMLButtonElement;

    if (rightPanel) {
      rightPanel.classList.add("animateLeftToRight");
      rightPanel.classList.remove("animateRightToLeft");
      button.classList.add("hide");
      button.classList.remove("show");
      setTimeout(() => {
        if (rightPanel) {
          rightPanel.style.left = "";
          rightPanel.style.right = "-5%";
          rightPanel.classList.remove("animateLeftToRight");
        }
        setAnimationInProgress(false);
      }, 1000);
    }
  };

  return (
    <>
      <div className="signUpMain">
        <div className="leftPartSignupB">
          <div className="logo-containerx">
            <Link to="/" className="noLink">
              <img src={logo} className="logo" alt="logo" />
              <label className="logoText">Dashboard</label>
            </Link>
          </div>
          <div className="rightText">
            <p className="leftTextProgress"> 1 of 3 </p>
            <h2 className="leftTextFirst">Sign up as a Donor!</h2>
            <p className="leftTextSecond"> Only few steps ahead .. </p>
            <a onClick={slideRightToLeft} className="TextLink">
              Signup as an Organization instead?
            </a>
          </div>
        </div>

        <div className="rightPartSignupB">
          <div className="logo-containerx">
            <Link to="/" className="noLink">
              <img src={logo} className="logo" alt="logo" />
              <label className="logoText">Dashboard</label>
            </Link>
          </div>
          <div className="righText">
            <p className="rightTextProgress"> 1 of 3 </p>
            <h2 className="rightTextFirst">Sign up as an Organization!</h2>
            <p className="rightTextSecond"> Only few steps ahead .. </p>
            <a onClick={slideLeftToRight} className="TextLink">
              Signup as a Donor instead?
            </a>
          </div>
        </div>

        <div className="rightPanelSignUpA">
          <div className="rightPanel-containerS">
            <h2 style={{ position: "relative", bottom: "5%" }}>
              Provide us with your account details
            </h2>
            <div className="twoInputHolderS">
              <InputBox type={"text"} label={"First name"} width={"200px"} />
              <InputBox type={"text"} label={"Last name"} width={"200px"} />
            </div>
            <div className="twoInputHolderS">
              <InputBox type={"email"} label={"Email"} width={"200px"} />
              <InputBox type={"password"} label={"Password"} width={"200px"} />
            </div>
            <div className="twoInputHolderS">
              <InputBox type={"text"} label={"Phone number"} width={"200px"} />
              <div className="radioss">
                <div
                  style={{
                    position: "relative",
                    marginBottom: "15%",
                    width: "200px",
                  }}
                >
                  <p
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                      fontSize: "12px",
                      position: "relative",
                      top: "2%",
                    }}
                  >
                    <label style={{ marginBottom: "2%" }}>Specify gender</label>
                  </p>
                  <div style={{ display: "flex", justifyContent: "center" }}>
                    <RadioButton text={"Male"} margin={"-6% 3%"} />
                    <RadioButton text={"Female"} margin={"-6% 3%"} />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="footerSignUp">
            <div className="footerButtons-containerSignUp">
              <Link to={path}>
                <Button text={"Next"} />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default SignUp;
