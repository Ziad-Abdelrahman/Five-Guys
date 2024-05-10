import RequestCard from "../RequestCard.tsx";
import ViewButton from "../../Buttons/ViewButton.tsx";
import AcceptRejectButton from "../../Buttons/AcceptRejectButton.tsx";
import DeleteButton from "../../Buttons/DeleteButton.tsx";
import { FiDownload } from "react-icons/fi";
import "./cards.css";
import { useState } from "react";
// @ts-ignore
import jsPDF from "jspdf";

interface AdminOrgRequestsCardProps {
  trigger?: boolean;
  buttonID?: string;
  image: string;
  text: string;
  name: string;
  handleClick?: (id: string) => void;
  type: string;
}

function AdminOrgRequestsCard(props: AdminOrgRequestsCardProps) {
  const [isVisible, setIsVisible] = useState(true);

  const handleDownloadPDF = () => {
    const doc = new jsPDF();
    doc.text(props.type + " Info: ", 80, 10);
    doc.save(props.type + "_Submission.pdf");
  };
  const handleDeleteClick1 = () => {
    if (window.confirm("Are you sure you want to reject this request?")) {
      setIsVisible(false);
    }
  };
  const handleDeleteClick2 = () => {
    if (window.confirm("Are you sure you want to accept this request?")) {
      setIsVisible(false);
    }
  };
  return isVisible ? (
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
            <AcceptRejectButton
              text="Approve"
              width={"125px"}
              onClick={handleDeleteClick2}
            />
            <DeleteButton
              text="Reject"
              width={"125px"}
              onClick={handleDeleteClick1}
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
          <FiDownload size={"30px"} onClick={handleDownloadPDF} />
        </div>
      </>
    </RequestCard>
  ) : null;
}

export default AdminOrgRequestsCard;
