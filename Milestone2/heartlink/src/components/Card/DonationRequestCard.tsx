import RequestCard from "./RequestCard.tsx";
import ViewButton from "../Buttons/ViewButton.tsx";
import DonateButton from "../Buttons/DonateButton.tsx";

interface DonationRequestPopUpProps {
  image: string;
  description: string;
  postedby: string;
  postdate: string;
}

function DonationRequestCard(props: DonationRequestPopUpProps) {
  return (
    <RequestCard>
      <>
        <img
          className="request-card-image"
          src={props.image}
          style={{ width: "12%" }}
        />
        <div className="text-container">
          <h2 style={{ fontSize: "22px" }}>{props.description}</h2>
          <p>Posted By: {props.postedby}</p>
          <p>Post Date: {props.postdate}</p>
        </div>
        <div className="two-buttons-holder">
          <ViewButton />
          <DonateButton />
        </div>
      </>
    </RequestCard>
  );
}

export default DonationRequestCard;
