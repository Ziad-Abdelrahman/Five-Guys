import "./popup.css";
import close from "../../assets/close-icon.png";
interface ViewPopupProps {
  trigger: boolean;
  children?: React.ReactNode; // This makes the children optional
  handleClick: () => void;
}

function viewPopup({ trigger, children }: ViewPopupProps) {
  return trigger ? (
    <div className="popup-container">
      <div className="popup-inner">
        <button className="close-btn">
          <img src={close} />{" "}
        </button>

        <div>
          <h3>Info</h3>
        </div>
        <hr />
        <div className="info-container">{children}</div>
      </div>
    </div>
  ) : null;
}

export default viewPopup;
