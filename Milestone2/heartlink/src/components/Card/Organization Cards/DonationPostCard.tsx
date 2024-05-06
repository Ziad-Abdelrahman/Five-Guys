import RequestCard from "../RequestCard.tsx";
import { BsThreeDots } from "react-icons/bs";
import "./DonationPostCard.css";
import { useState } from "react";
import { Link } from "react-router-dom";

interface DonationPostCardProps {
  id: string;
  typeOfRequest: string;
  datePosted: string;
  status: string;
  bloodtype?: string;
  bookname?: string;
  authorname?: string;
  language?: string;
  edition?: string;
  copies?: string;
  clothesage?: string;
  clothesgender?: string;
  kind?: string;
  season?: string;
  material?: string;
  size?: string;
  pieces?: string;
  medcategory?: string;
  medicationname?: string;
  medquantity?: string;
  toyage?: string;
  toycategory?: string;
  toygender?: string;
  toyname?: string;
  toyquantity?: string;
  stcategory?: string;
  supply?: string;
  stquantity?: string;
  tool?: string;
  equipment?: string;
  fcategory?: string;
  item?: string;
  fquantity?: string;
  patientname?: string;
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
                  <Link
                    to={"../EditPost/" + props.id.toString()}
                    key={props.id}
                  >
                    Edit
                  </Link>
                  <a onClick={handleDeleteClick}>Delete</a>
                </div>
              </div>
            </div>
            <div style={{ padding: "5px" }}>
              {props.bloodtype && <p>Blood Type: {props.bloodtype}</p>}
              {props.bookname && <p>Book Name: {props.bookname}</p>}
              {props.authorname && <p>Author Name: {props.authorname}</p>}
              {props.language && <p>Language: {props.language}</p>}
              {props.edition && <p>Edition: {props.edition}</p>}
              {props.copies && <p>Copies: {props.copies}</p>}
              {props.clothesage && <p>Age Group: {props.clothesage}</p>}
              {props.clothesgender && <p>Age Group: {props.clothesgender}</p>}
              {props.kind && <p>Kind: {props.kind}</p>}
              {props.season && <p>Season: {props.season}</p>}
              {props.material && <p>Material: {props.material}</p>}
              {props.size && <p>Size: {props.size}</p>}
              {props.pieces && <p>Pieces: {props.pieces}</p>}
              {props.medcategory && <p>Category: {props.medcategory}</p>}
              {props.medicationname && (
                <p> Medication name: {props.medicationname}</p>
              )}
              {props.patientname && <p>Patient name: {props.patientname}</p>}
              {props.medquantity && <p>Quantity: {props.medquantity}</p>}
              {props.toyage && <p>Age Group: {props.toyage}</p>}
              {props.toycategory && <p>Category: {props.toycategory}</p>}
              {props.toygender && <p>Gender: {props.toygender}</p>}
              {props.toyname && <p> Toy name: {props.toyname}</p>}
              {props.toyquantity && <p>Quantity: {props.toyquantity}</p>}
              {props.stcategory && <p>Category: {props.stcategory}</p>}
              {props.supply && <p>Supply: {props.supply}</p>}
              {props.stquantity && <p>Quantity: {props.stquantity}</p>}
              {props.tool && <p>Tool: {props.tool}</p>}
              {props.equipment && <p>Equipment: {props.equipment}</p>}
              {props.fcategory && <p>Category: {props.fcategory}</p>}
              {props.item && <p>Item: {props.item}</p>}
              {props.fquantity && <p>Quantity: {props.fquantity}</p>}
              <p>Date Posted: {props.datePosted}</p>
              <p>Status: {props.status}</p>
            </div>
          </div>
        </div>
      </RequestCard>
    </>
  ) : null;
}

export default DonationPostCard;
