import "./request.css";
import "../Buttons/Buttons.css";
import "./request.css";
import { ReactNode } from "react";

interface RequestCardProps {
  children: ReactNode;
  style?: React.CSSProperties;
}

function RequestCard(props: RequestCardProps) {
  return (
    <>
      <div className="request-container" style={props.style}>
        {props.children}
      </div>
    </>
  );
}

export default RequestCard;
