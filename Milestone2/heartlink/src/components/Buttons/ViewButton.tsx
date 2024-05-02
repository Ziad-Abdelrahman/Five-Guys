import "./Buttons.css";
import arrow from "../../assets/right-arrow.png";

interface ViewButtonProps {
  buttonID?: string;
  handleClick?: (id: string) => void;
}

function ViewButton(props: ViewButtonProps) {
  return (
    <button
      id={props.buttonID}
      className="view-button"
      onClick={(e) =>
        props.handleClick && props.handleClick(e.currentTarget.id)
      }
    >
      Learn More
      <img className="arrow-in-button" src={arrow} alt="arrow" />
    </button>
  );
}

export default ViewButton;
