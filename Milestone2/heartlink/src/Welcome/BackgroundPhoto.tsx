import img from "../assets/dashBoard.png";
import "./BackgroundPhoto.css";
const hideLogin = () => {
  var login = document.querySelector(".login") as HTMLElement;
  var welcome = document.querySelector(".welcomeDashboard") as HTMLElement;
  var app = document.querySelector(".app") as HTMLElement;
  login.style.display = "none";
  welcome.classList.remove("shade");
  app.classList.remove("shade");
};
function BackgroundPhoto() {
  return (
    <div className="backgroundphotoHolder" onClick={hideLogin}>
      <div className="welcome">
        <h1 className="backgroundphotoText">
          Fueling Hope
          <br /> Igniting Change
        </h1>
      </div>
      <img
        className="backgroundphoto"
        draggable="false"
        src={img}
        alt="placeholder"
      />
    </div>
  );
}

export { BackgroundPhoto, hideLogin };
