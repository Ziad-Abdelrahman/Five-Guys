import RequestCard from "../RequestCard.tsx";
import ViewButton from "../../Buttons/ViewButton.tsx";
import AcceptRejectButton from "../../Buttons/AcceptRejectButton.tsx";
import DeleteButton from "../../Buttons/DeleteButton.tsx";
import { FiDownload } from "react-icons/fi";
import "./cards.css";

interface AdminOrgRequestsCardProps {
  trigger?: boolean;
  buttonID?: string;
  image: string;
  text: string;
  name: string;
  handleClick?: (id: string) => void;
}

function AdminOrgRequestsCard(props: AdminOrgRequestsCardProps) {
  const shouldRender = props.trigger !== undefined ? props.trigger : true;
  return shouldRender ? (
    <RequestCard style={{ height: "220px" }}>
      <>
        <img
          className="request-card-image"
          src={props.image}
          alt={props.text}
          style={{ width: "12%" }}
        />
        <div className="text-container">
          <h2 style={{ fontSize: "22px" }}>{props.name}</h2>
          <p>{props.text}</p>
        </div>
        <div className="three-buttons-holder">
          <div className="approve-reject-buttons-div">
            <AcceptRejectButton text="Approve" width={"125px"} />
            <DeleteButton
              text="Reject"
              width={"125px"}
              onClick={() => console.log("Complete code here")}
            />
          </div>
          <div className="learnmorejholder">
            <ViewButton
              buttonID={props.buttonID}
              handleClick={props.handleClick}
            />
          </div>
        </div>
        <div className="upload-icon-admin-card">
          <FiDownload size={"30px"} />
        </div>
      </>
    </RequestCard>
  ) : null;
}

export default AdminOrgRequestsCard;
