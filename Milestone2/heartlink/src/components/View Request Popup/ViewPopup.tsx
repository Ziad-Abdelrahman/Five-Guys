import "./popup.css";
import close from "../../assets/close-icon.png";
interface ViewPopupProps {
  trigger?: boolean;
  children?: React.ReactNode; // This makes the children optional
  handleClick?: () => void;
  width?: string; // Optional width for the popup
  height?: string; // Optional height for the popup
  borderRadius?: string; // Optional border radius for the popup
}

function viewPopup({
  trigger,
  children,
  handleClick,
  width,
  height,
  borderRadius,
}: ViewPopupProps) {
  return trigger ? (
    <div className="popup-container">
      <div
        className="popup-inner"
        style={{ width: width, height: height, borderRadius: borderRadius }}
      >
        <button className="close-btn" onClick={handleClick}>
          <img src={close} />{" "}
        </button>

        <div>
          <h2 style={{ textAlign: "center" }}>Info</h2>
        </div>
        <hr />
        <div className="info-container">{children}</div>
      </div>
    </div>
  ) : null;
}

export default viewPopup;
