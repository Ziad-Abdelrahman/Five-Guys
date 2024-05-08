import "../Donation Posts/createPost/createPost.css";
import "./SignUp.css";
import logo from "../assets/minilogo.png";
import Button from "../components/Buttons/Button.tsx";
import InputBox from "../components/InputBox/InputBox.tsx";
import RadioButton from "../components/RadioButton/RadioButton.tsx";
import BackButton from "../components/Buttons/BackButton.tsx";
import DropDown from "../components/DropDown/DropDown.tsx";
import { useState } from "react";

var animationInProgress = false;
const slideRightToLeft = (
  setToggleSignUp: React.Dispatch<React.SetStateAction<boolean>>,
) => {
  setToggleSignUp(false);
  if (animationInProgress) return;
  animationInProgress = true;
  var rightPanel = document.querySelector(".rightPanelSignUpA") as HTMLElement;
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
        animationInProgress = false;
      }
    }, 1000);
  }
};

const slideLeftToRight = (
  setToggleSignUp: React.Dispatch<React.SetStateAction<boolean>>,
) => {
  setToggleSignUp(true);
  if (animationInProgress) return;
  animationInProgress = true;
  var rightPanel = document.querySelector(".rightPanelSignUpA") as HTMLElement;
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
      animationInProgress = false;
    }, 1000);
  }
};

const showDonor = () => {
  if (animationInProgress) return;
  animationInProgress = true;
  var donor = document.querySelector(".signUpDONO");
  var rightPanel = document.querySelector(".rightPanelSignUpA");
  var rightTextProgress = document.querySelector(".rightTextProgress");
  var rightTextFirst = document.querySelector(".rightTextFirst");
  var rightTextSecond = document.querySelector(".rightTextSecond");
  if (donor && rightPanel) {
    donor.classList.add("show");
    donor.classList.remove("hide");
    rightPanel.classList.add("show");
    rightPanel.classList.remove("hide");
    if (rightTextProgress && rightTextFirst && rightTextSecond) {
      rightTextProgress.innerHTML = "2 of 2";
      rightTextFirst.innerHTML = "Sign up as a Donor!";
      rightTextSecond.innerHTML = " Almost done ..";
    }
  }
  animationInProgress = false;
};
const showOrg = () => {
  if (animationInProgress) return;
  animationInProgress = true;
  var org = document.querySelector(".signUpORG");
  var rightPanel = document.querySelector(".rightPanelSignUpA");
  var leftTextProgress = document.querySelector(".leftTextProgress");
  var leftTextFirst = document.querySelector(".leftTextFirst");
  var leftTextSecond = document.querySelector(".leftTextSecond");
  if (org && rightPanel) {
    org.classList.add("hideE");
    org.classList.remove("showE");
    rightPanel.classList.add("hideE");
    rightPanel.classList.remove("showE");
    if (leftTextProgress && leftTextFirst && leftTextSecond) {
      leftTextProgress.innerHTML = "2 of 2";
      leftTextFirst.innerHTML = "Sign up as a Organization!";
      leftTextSecond.innerHTML = " Almost done ..";
    }
  }
  animationInProgress = false;
};
const hideDonor = () => {
  if (animationInProgress) return;
  animationInProgress = true;
  var donor = document.querySelector(".signUpDONO");
  var rightPanel = document.querySelector(".rightPanelSignUpA");
  var rightTextProgress = document.querySelector(".rightTextProgress");
  var rightTextFirst = document.querySelector(".rightTextFirst");
  var rightTextSecond = document.querySelector(".rightTextSecond");
  if (donor && rightPanel) {
    donor.classList.add("hide");
    donor.classList.remove("show");
    rightPanel.classList.add("hide");
    rightPanel.classList.remove("show");

    setTimeout(() => {
      if (rightPanel) {
        rightPanel.classList.remove("hide");
        if (rightTextProgress && rightTextFirst && rightTextSecond) {
          rightTextProgress.innerHTML = "1 of 2";
          rightTextFirst.innerHTML = "Sign up as an Organization!";
          rightTextSecond.innerHTML = " Only few steps ahead ..";
        }
      }
      animationInProgress = false;
    }, 1000);
  }
};

const hideOrg = () => {
  if (animationInProgress) return;
  animationInProgress = true;
  var org = document.querySelector(".signUpORG");
  var rightPanel = document.querySelector(".rightPanelSignUpA");
  var leftTextProgress = document.querySelector(".leftTextProgress");
  var leftTextFirst = document.querySelector(".leftTextFirst");
  var leftTextSecond = document.querySelector(".leftTextSecond");
  if (org && rightPanel) {
    org.classList.add("showE");
    org.classList.remove("hideE");
    rightPanel.classList.add("showE");
    rightPanel.classList.remove("hideE");
  }
  setTimeout(() => {
    if (rightPanel) {
      rightPanel.classList.remove("showE");
      if (leftTextProgress && leftTextFirst && leftTextSecond) {
        leftTextProgress.innerHTML = "1 of 2";
        leftTextFirst.innerHTML = "Sign up as a Donor!";
        leftTextSecond.innerHTML = " Only few steps ahead ..";
      }
    }
    animationInProgress = false;
  }, 1000);
};
const toggleBoth = (toggleSignUp: boolean) => {
  if (toggleSignUp) {
    showDonor();
  } else {
    showOrg();
  }
};

function SignUp() {
  const [toggleSignUp, setToggleSignUp] = useState(true); // true for donor, false for organization
  return (
    <>
      <div className="signUpMain">
        <div className="leftPartSignupB">
          <div className="logo-container">
            <img
              src={logo}
              className="logo"
              alt="logo"
              onClick={() => {
                slideRightToLeft(setToggleSignUp);
              }}
            />
          </div>
          <div className="leftText">
            <p className="leftTextProgress"> 1 of 2 </p>
            <h2 className="leftTextFirst">Sign up as a Donor!</h2>
            <p className="leftTextSecond"> Only few steps ahead .. </p>
          </div>
        </div>

        <div className="rightPartSignupB">
          <div className="logo-container">
            <img
              src={logo}
              className="logo"
              alt="logo"
              onClick={() => {
                slideLeftToRight(setToggleSignUp);
              }}
            />
          </div>
          <div className="righText">
            <p className="rightTextProgress"> 1 of 2 </p>
            <h2 className="rightTextFirst">Sign up as an Organization!</h2>
            <p className="rightTextSecond"> Only few steps ahead .. </p>
          </div>
        </div>
        <div className="rightPanelSignUpA">
          <div className="rightPanel-containerS">
            <h2 style={{ position: "relative", bottom: "1em" }}>
              {" "}
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
                    <label style={{ marginBottom: "2%" }}>
                      Specify gender{" "}
                    </label>
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
              <Button
                text={"Next"}
                handleClick={() => {
                  toggleBoth(toggleSignUp);
                }}
              />
            </div>
          </div>
        </div>

        <div className="signUpDONO">
          <div className="rightPanel-containerS">
            <h2 style={{ position: "relative", bottom: "1em" }}>
              {" "}
              Provide us with your address details
            </h2>
            <div className="twoInputHolderS">
              <InputBox type={"text"} label={"Governerate"} width={"200px"} />
              <InputBox type={"text"} label={"Area"} width={"200px"} />
            </div>
            <InputBox
              type={"text"}
              label={"Address (Street Name,Home Number)"}
              width={"430px"}
            />
          </div>
          <div className="footerSignUp">
            <div className="footerButtons-containerSignUp">
              <Button text={"Sign Up"} />
              <BackButton
                style={{ marginLeft: "5em" }}
                handleClick={hideDonor}
              />
            </div>
          </div>
        </div>

        <div className="signUpORG">
          <div className="rightPanel-containerS">
            <h2 style={{ position: "relative", bottom: "1em" }}>
              {" "}
              Provide us with your organization details
            </h2>
            <DropDown
              options={[
                "Animal welfare groups",
                "Arts associations",
                "Childcare organisations",
                "Community sheds",
                "Environmental groups",
                "Health Promotion Charities",
                "Hospitals and other healthcare providers",
                "Housing providers",
                "Medical research Institutions",
                "Private and public ancillary funds",
                "Public benevolent institutions",
                "Social clubs",
                "Sporting clubs and associations",
                "Schools and other educational providers",
                "Self-help groups",
              ]}
              selected={"Specify Organization type"}
              width={"430px"}
            />
            <InputBox
              type={"text"}
              label={"Organization Name"}
              width={"430px"}
            />
            <div className="twoInputHolderS">
              <InputBox type={"text"} label={"Governorate"} width={"200px"} />
              <InputBox
                type={"text"}
                label={"Organization Area"}
                width={"200px"}
              />
            </div>
            <InputBox
              type={"text"}
              label={"Organization Address (Street Name,Home Number)"}
              width={"430px"}
            />
          </div>
          <div className="footerSignUp">
            <div className="footerButtons-containerSignUp">
              <Button text={"Sign Up"} />
              <BackButton style={{ marginLeft: "5em" }} handleClick={hideOrg} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default SignUp;
