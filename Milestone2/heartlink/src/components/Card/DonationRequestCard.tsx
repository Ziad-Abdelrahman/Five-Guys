import RequestCard from "./RequestCard.tsx";
import ViewButton from "../Buttons/ViewButton.tsx";
import DonateButton from "../Buttons/DonateButton.tsx";

interface DonationRequestPopUpProps {
  trigger?: boolean;
  buttonID?: string;
  image?: string;
  description?: string;
  postedby?: string;
  postdate?: string;
  handleClick?: (id: string) => void;
}

function DonationRequestCard(props: DonationRequestPopUpProps) {
  const shouldRender = props.trigger !== undefined ? props.trigger : true;
  return shouldRender ? (
    <RequestCard>
      <>
        <img
          className="request-card-image"
          src={props.image}
          alt={props.description}
          style={{ width: "12%" }}
        />
        <div className="text-container">
          <h2 style={{ fontSize: "22px" }}>{props.description}</h2>
          <p>Posted By: {props.postedby}</p>
          <p>Post Date: {props.postdate}</p>
        </div>
        <div className="two-buttons-holder">
          <ViewButton
            buttonID={props.buttonID}
            handleClick={props.handleClick}
          />
          <DonateButton />
        </div>
      </>
    </RequestCard>
  ) : null;
}

export default DonationRequestCard;
