import "./Buttons.css";
import arrow from "../../assets/left-arrow.png";

interface BackButtonProps {
  style?: React.CSSProperties;
  handleClick?: () => void;
}
function BackButton({ style, handleClick }: BackButtonProps) {
  return (
    <button className="image-button" style={style} onClick={handleClick}>
      <img src={arrow} alt="back" className="backImg" />
    </button>
  );
}

export default BackButton;
