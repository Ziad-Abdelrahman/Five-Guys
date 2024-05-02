import "./popup.css";
import close from "../../assets/close-icon.png";
interface ViewPopupProps {
  trigger: boolean;
  children?: React.ReactNode; // This makes the children optional
}

function viewPopup({ trigger, children }: ViewPopupProps) {
  return trigger ? (
    <div className="popup-container">
      <div className="popup-inner">
        <button className="close-btn">
          <img src={close} />{" "}
        </button>
        {children}
      </div>
    </div>
  ) : null;
}

export default viewPopup;
