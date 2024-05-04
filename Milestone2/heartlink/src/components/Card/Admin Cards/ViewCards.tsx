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
    if (window.confirm("Are you sure you want to delete this card?")) {
      setIsVisible(false);
    }
  };

  return isVisible ? (
    <div className="card">
      <div className={"logo-container"}>
        <img className="logo" src={props.image} alt={props.img_alt} />
      </div>
      <div className="view-cards-text-container">
        <h4 className="title">{props.title}</h4>
        <p className="text">{props.text}</p>
      </div>
      <div className="delete" onClick={handleDeleteClick}>
        <AcceptRejectButton text="Delete" />
      </div>
    </div>
  ) : null;
};

export default ViewCards;
