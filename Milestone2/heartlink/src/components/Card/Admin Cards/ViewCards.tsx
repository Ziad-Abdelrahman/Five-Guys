import React, { useState } from "react";
import AcceptRejectButton from "../../Buttons/AcceptRejectButton.tsx";
import "./cards.css";

interface ViewCardsProps {
  image: string;
  img_alt: string;
  title: string;
  text: string;
}

const ViewCards: React.FC<ViewCardsProps> = (props) => {
  const [isVisible, setIsVisible] = useState(true);

  const handleDeleteClick = () => {
    // Show an alert before deleting the card
    if (window.confirm("Are you sure you want to delete this card?")) {
      // If user confirms deletion, hide the card by setting isVisible to false
      setIsVisible(false);
    }
  };

  return isVisible ? (
    <div className="card">
      <img className="logo" src={props.image} alt={props.img_alt} />
      <h2 className="title">{props.title}</h2>
      <p className="text">{props.text}</p>
      <div className="delete" onClick={handleDeleteClick}>
        <AcceptRejectButton text="Delete" />
      </div>
    </div>
  ) : null;
};

export default ViewCards;
