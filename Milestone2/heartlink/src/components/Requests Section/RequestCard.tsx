import DonateButton from "../Buttons/DonateButton.tsx";
import ViewButton from "../Buttons/ViewButton.tsx";
import "./request.css";
import "../Buttons/Buttons.css";
import "../Categories Section/Categories.css";

interface RequestCardProps {
  buttonid: string;
  image: string;
  description: string;
  postedby: string;
  postdate: string;
  onClick?: () => void; // Define onClick as a function that returns void
}

function RequestCard(props: RequestCardProps) {
  return (
    <>
      <div className="request-container">
        {" "}
        {/* Attach onClick to the container */}
        <img
          className="request-card-image"
          src={props.image}
          alt={props.description}
        />
        <div className="text-container">
          <h2 style={{ fontSize: "22px" }}>{props.description}</h2>
          <p>Posted By: {props.postedby}</p>
          <p>Post Date: {props.postdate}</p>
        </div>
        <div className="two-buttons-holder">
          <ViewButton buttonid={props.buttonid} />
          <DonateButton />
        </div>
      </div>
    </>
  );
}

export default RequestCard;
