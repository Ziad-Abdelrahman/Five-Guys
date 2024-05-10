import RequestCard from "./RequestCard.tsx";
import ViewButton from "../Buttons/ViewButton.tsx";
import DonateButton from "../Buttons/DonateButton.tsx";
import { Link } from "react-router-dom";

interface DonationRequestPopUpProps {
  trigger?: boolean;
  buttonID?: string;
  image?: string;
  description?: string;
  postedby?: string;
  postdate?: string;
  handleClick?: (id: string) => void;
  showDonateButton?: boolean;
  donateButtonText?: string; // Optional prop to control the visibility of the Donate button
  isProbono?: boolean;
}

function DonationRequestCard({
  trigger,
  buttonID,
  image,
  description,
  postedby,
  postdate,
  handleClick,
  showDonateButton = true,
  donateButtonText,
  isProbono = false,
}: DonationRequestPopUpProps) {
  const shouldRender = trigger !== undefined ? trigger : true;
  return shouldRender ? (
    <RequestCard>
      <>
        <img
          className="request-card-image"
          src={image}
          alt={description}
          style={{ width: "12%" }}
        />
        <div className="text-container">
          <h2 style={{ fontSize: "22px" }}>{description}</h2>
          <p>Posted By: {postedby}</p>
          <p>Post Date: {postdate}</p>
        </div>
        <div className="two-buttons-holder">
          <ViewButton buttonID={buttonID} handleClick={handleClick} />
          {showDonateButton && isProbono === true && (
            <DonateButton text={donateButtonText} />
          )}
          {showDonateButton && isProbono === false && (
            <Link to={"Quantity/" + buttonID}>
              <DonateButton text={donateButtonText} />{" "}
            </Link>
          )}
        </div>
      </>
    </RequestCard>
  ) : null;
}

export default DonationRequestCard;
