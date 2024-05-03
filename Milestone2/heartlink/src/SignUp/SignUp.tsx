import "../Donation Posts/createPost/createPost.css";
import "./SignUp.css";
import logo from "../assets/minilogo.png";
import Button from "../components/Buttons/Button.tsx";
import InputBox from "../components/InputBox/InputBox.tsx";
import RadioButton from "../components/RadioButton/RadioButton.tsx";
import BackButton from "../components/Buttons/BackButton.tsx";

var animationInProgress = false;
var toggleSignUp = true; // true for donor, false for organization
const slideRightToLeft = () => {
  toggleSignUp = false;
  if (animationInProgress) return;
  animationInProgress = true;
  var rightPanel = document.querySelector(".rightPanelSignUpA") as HTMLElement;
  var button = document.querySelector(
    ".footerButtons-container button",
  ) as HTMLButtonElement;
  if (rightPanel) {
    rightPanel.classList.add("animateRightToLeft");
    rightPanel.classList.remove("animateLeftToRight");
    button.classList.add("marginsRemove");
    button.classList.remove("marginsAdd");
    setTimeout(() => {
      if (rightPanel) {
        rightPanel.style.right = "";
        rightPanel.style.left = "-6em";
        rightPanel.classList.remove("animateRightToLeft");
        animationInProgress = false;
      }
    }, 1000);
  }
};

const slideLeftToRight = () => {
  toggleSignUp = true;
  if (animationInProgress) return;
  animationInProgress = true;
  var rightPanel = document.querySelector(".rightPanelSignUpA") as HTMLElement;
  var button = document.querySelector(
    ".footerButtons-container button",
  ) as HTMLButtonElement;

  if (rightPanel) {
    rightPanel.classList.add("animateLeftToRight");
    rightPanel.classList.remove("animateRightToLeft");
    button.classList.add("marginsAdd");
    button.classList.remove("marginsRemove");
    setTimeout(() => {
      if (rightPanel) {
        rightPanel.style.left = "";
        rightPanel.style.right = "-6em";
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
    donor.classList.add("showSignUpDono");
    donor.classList.remove("hideSignUpDono");
    rightPanel.classList.add("hideDono");
    rightPanel.classList.remove("showDono");
    if (rightTextProgress && rightTextFirst && rightTextSecond) {
      rightTextProgress.innerHTML = "2 of 2";
      rightTextFirst.innerHTML = "Signing up as a Donor!";
      rightTextSecond.innerHTML = " Almost done ..";
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
    donor.classList.add("hideSignUpDono");
    donor.classList.remove("showSignUpDono");
    rightPanel.classList.add("showDono");
    rightPanel.classList.remove("hideDono");

    setTimeout(() => {
      if (rightPanel) {
        rightPanel.classList.remove("showDono");
        if (rightTextProgress && rightTextFirst && rightTextSecond) {
          rightTextProgress.innerHTML = "1 of 2";
          rightTextFirst.innerHTML = "Signing up as an Organization!";
          rightTextSecond.innerHTML = " Only few steps ahead ..";
        }
      }
      animationInProgress = false;
    }, 1000);
  }
};

const showOrg = () => {};

function SignUp() {
  return (
    <>
      <div className="signUpMain">
        <div className="leftPartSignupB">
          <div className="logo-container">
            <img
              src={logo}
              className="logo"
              alt="logo"
              onClick={slideRightToLeft}
            />
          </div>
          <div className="leftText">
            <p className="leftTextProgress"> 1 of 2 </p>
            <h2 className="leftTextFirst">Signing up as a Donor!</h2>
            <p className="leftTextSecond"> Only few steps ahead .. </p>
          </div>
        </div>

        <div className="rightPartSignupB">
          <div className="logo-container">
            <img
              src={logo}
              className="logo"
              alt="logo"
              onClick={slideLeftToRight}
            />
          </div>
          <div className="righText">
            <p className="rightTextProgress"> 1 of 2 </p>
            <h2 className="rightTextFirst">Signing up as an Organization!</h2>
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
          <div className="footer">
            <div className="footerButtons-container">
              <Button
                text={"Next"}
                handleClick={toggleSignUp ? showDonor : showOrg}
              />
            </div>
          </div>
        </div>

        <div className="signUpDONO">
          <div className="rightPanel-containerS">
            <h2 style={{ position: "relative", bottom: "1em" }}>
              {" "}
              Provide us with your account details
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
          <div className="footer">
            <div className="footerButtons-container">
              <Button text={"Sign Up"} />
              <BackButton
                style={{ marginLeft: "5em" }}
                handleClick={hideDonor}
              />
            </div>
          </div>
        </div>

        <div className="signUpORG">
          <div className="rightPanel-containerS"></div>
        </div>
      </div>
    </>
  );
}

export default SignUp;
