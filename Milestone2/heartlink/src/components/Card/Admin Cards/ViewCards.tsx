import React, { useState } from "react";
import "./cards.css";
import DeleteButton from "../../Buttons/DeleteButton.tsx";
import AdminViewInfoButton from "../../Buttons/AdminViewInfoButton.tsx";

interface ViewCardsProps {
  id: string;
  image: string;
  img_alt: string;
  title: string;
  text: string;
  height?: string;
  hideInfo?: boolean;
  hideDelete?: boolean;
  handleLearnMoreClick?: (id: string) => void;
}

const ViewCards: React.FC<ViewCardsProps> = (props) => {
  const [isVisible, setIsVisible] = useState(true);

  const handleDeleteClick = () => {
    if (window.confirm("Are you sure you want to delete this card?")) {
      setIsVisible(false);
    }
  };

  return isVisible ? (
    <div className="card" style={{ height: props.height }}>
      <div className={"admin-registered-organizations-logo-container"}>
        <img className="logo" src={props.image} alt={props.img_alt} />
      </div>
      <div className="view-cards-text-container">
        <h4 className="title">{props.title}</h4>
        <p className="text">{props.text}</p>
      </div>
      {!props.hideInfo && (
        <AdminViewInfoButton
          id={props.id}
          text={"View Info"}
          onClick={props.handleLearnMoreClick}
        />
      )}
      {!props.hideDelete && (
        <div className="delete">
          <DeleteButton onClick={handleDeleteClick} />
        </div>
      )}
    </div>
  ) : null;
};

export default ViewCards;
