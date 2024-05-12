import RequestCard from "../RequestCard.tsx";
import { ReactNode } from "react";

interface ViewdetailsProps {
  image: ReactNode;
  description: string;
  name: string;
  email: string;
  subject: string;
  contactNmber: string;
  children: ReactNode;
  isTeacher: boolean;
}

function ProBonoCard(props: ViewdetailsProps) {
  return (
    <RequestCard style={{ height: "200px", width: "900px" }}>
      <div style={{ display: "flex", width: "100%" }}>
        <div style={{ width: "80%", display: "flex" }}>
          {props.image}
          <div className="text-container">
            <h2 style={{ fontSize: "18px" }}>{props.description}</h2>
            <p>Name: {props.name}</p>
            <p>Email: {props.email}</p>
            <p>
              {props.isTeacher ? "Subject" : "Speciality"}: {props.subject}
            </p>
            <p>Phone number: {props.contactNmber}</p>
          </div>
        </div>
        <div style={{ display: " flex", flexDirection: "column-reverse" }}>
          {props.children}
        </div>
      </div>
    </RequestCard>
  );
}

export default ProBonoCard;
