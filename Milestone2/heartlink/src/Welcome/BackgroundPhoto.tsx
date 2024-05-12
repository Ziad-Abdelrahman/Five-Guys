import img from "../assets/dashBoard.png";
import "./BackgroundPhoto.css";
const hideLogin = () => {
  var login = document.querySelector(".login-container") as HTMLElement;
  var howto = document.querySelector(".howto-container") as HTMLElement;
  if (login) login.style.display = "none";
  if (howto) howto.style.display = "none";
};
function BackgroundPhoto() {
  return (
    <div className="backgroundphotoHolder" onClick={hideLogin}>
      <div className="welcome">
        <h1>
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
