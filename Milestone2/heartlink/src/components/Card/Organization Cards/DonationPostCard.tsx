import RequestCard from "../RequestCard.tsx";
import { BsThreeDots } from "react-icons/bs";
import "./DonationPostCard.css";
import { useState } from "react";

interface DonationPostCardProps {
  typeOfRequest: string;
  datePosted: string;
  status: string;
  children: React.ReactNode;
}

function DonationPostCard(props: DonationPostCardProps) {
  const [isVisible, setVisible] = useState(true);

  function handleDeleteClick() {
    if (window.confirm("Are you sure you want to delete this post?")) {
      setVisible(false);
    }
  }
  return isVisible ? (
    <>
      <RequestCard
        style={{
          height: "auto",
          width: "800px",
          padding: "20px",
          alignItems: "normal",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            width: "100%",
          }}
        >
          <div>
            <div style={{ display: "flex", justifyContent: "space-between" }}>
              <h3>{props.typeOfRequest} Post</h3>
              <div className="card-dropdown">
                <BsThreeDots size={30} />
                <div className="card-dropdown-content">
                  <a href="#">Edit</a>
                  <a onClick={handleDeleteClick}>Delete</a>
                </div>
              </div>
            </div>
            <div style={{ padding: "5px" }}>
              <p>Date Posted: {props.datePosted} </p>
              {props.children}
              <p>Status: {props.status}</p>
            </div>
          </div>
        </div>
      </RequestCard>
    </>
  ) : null;
}

export default DonationPostCard;
