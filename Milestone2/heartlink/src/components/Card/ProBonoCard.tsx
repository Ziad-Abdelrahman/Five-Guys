import RequestCard from "./RequestCard.tsx";

interface ViewdetailsProps {
  image: string;
  description: string;
  postedby: string;
  email: string;
  subject?: string; // Make subject optional
  speciality?: string; 
  contact: string;
}

function ProBonoCard(props: ViewdetailsProps) {
  return (
    <RequestCard style={{ height: "200px", width: "900px" }}>
      <>
        <img
          className="request-card-image"
          src={props.image}
          alt={props.description}
        />

        <div className="text-container">
          <h2 style={{ fontSize: "18px" }}>{props.description}</h2>
          <p>Posted By: {props.postedby}</p>
          <p>Email: {props.email}</p>
          {props.speciality ? <p>Speciality: {props.speciality}</p> : <p>Subject: {props.subject}</p>}
          <p>Contact Details: {props.contact}</p>
        </div>
      </>
    </RequestCard>
  );
}

export default ProBonoCard;