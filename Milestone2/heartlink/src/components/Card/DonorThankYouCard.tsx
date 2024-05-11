import "../View Request Popup/popup.css";
import "./DonorThankYouCard.css";
import { Link } from "react-router-dom";

interface DonorThankYouCardProps {
  Buttontext?: string;
  handleClick?: () => void;
  width?: string;
}

function donorThankYouCard(props: DonorThankYouCardProps) {
  const ButtonContent = (
    <button
      className={"donor-return-to-dashboard-button"}
      onClick={props.handleClick}
      style={{ width: props.width }}
    >
      {props.Buttontext}
    </button>
  );
  return (
    <>
      <div className="popup-container">
        <div
          className={"popup-inner"}
          style={{
            width: "35%",
            height: "35%",
            borderRadius: "20px",
            padding: "1%",
          }}
        >
          <div style={{ textAlign: "center" }}>
            <h2>Thank You!</h2>
          </div>
          <hr />
          <div style={{ textAlign: "center" }}>
            <p>
              <strong>
                {" "}
                Your support makes a significant difference and is greatly
                appreciated by all of us.{" "}
              </strong>
            </p>
            <p>You will Recieve an Email Shortly</p>
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              marginTop: "10%",
            }}
          >
            {props.Buttontext === "Dashboard" ? (
              <Link to="/Donor">{ButtonContent}</Link>
            ) : (
              ButtonContent
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default donorThankYouCard;
