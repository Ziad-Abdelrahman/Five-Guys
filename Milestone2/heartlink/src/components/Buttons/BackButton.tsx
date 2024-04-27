import "./Buttons.css";
import arrow from "../../assets/left-arrow.png";

function BackButton() {
  return (
    <button className="image-button">
      <img src={arrow} alt="back" className="backImg" />
    </button>
  );
}

export default BackButton;
