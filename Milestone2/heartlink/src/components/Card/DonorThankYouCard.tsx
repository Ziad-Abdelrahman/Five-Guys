import "../View Request Popup/popup.css";
import "./DonorThankYouCard.css";

interface DonorThankYouCardProps {
  Buttontext?: string;
  handleClick?: () => void;
}
function donorThankYouCard(props: DonorThankYouCardProps) {
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
            <button
              className={"donor-return-to-dashboard-button"}
              onClick={props.handleClick}
            >
              {props.Buttontext || "DashBoard"}
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default donorThankYouCard;
