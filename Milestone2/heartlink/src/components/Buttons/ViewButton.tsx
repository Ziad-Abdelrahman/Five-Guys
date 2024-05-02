import "./Buttons.css";
import arrow from "../../assets/right-arrow.png";

interface ViewButtonProps {
  buttonid: string;
  handleClick?: (id: string) => void;
}

function ViewButton(props: ViewButtonProps) {
  return (
    <button id={props.buttonid} className="view-button">
      Learn More
      <img className="arrow-in-button" src={arrow} alt="arrow" />
    </button>
  );
}

export default ViewButton;
