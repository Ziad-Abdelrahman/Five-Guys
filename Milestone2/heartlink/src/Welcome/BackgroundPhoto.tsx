import "./BackgroundPhoto.css";
const hideLogin = () => {
  var login = document.querySelector(".login-container") as HTMLElement;
  var howto = document.querySelector(".howto-container") as HTMLElement;
  if (login) login.style.display = "none";
  if (howto) howto.style.display = "none";
};
function BackgroundPhoto() {
  return (
    <div className="backgroundphotoHolder">
      <div className="welcome">
        <h1>
          Fueling Hope
          <br /> Igniting Change
        </h1>
      </div>
      <div className="backgroundphoto"></div>
    </div>
  );
}

export { BackgroundPhoto, hideLogin };
