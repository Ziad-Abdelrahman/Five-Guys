import RequestCard from "../RequestCard.tsx";
import { BsThreeDots } from "react-icons/bs";

interface DonationPostCardProps {
  typeOfRequest: string;
  datePosted: string;
  status: string;
  children: React.ReactNode;
  //complete the rest of the data
}

function DonationPostCard(props: DonationPostCardProps) {
  return (
    <>
      <RequestCard
        style={{
          height: "500px",
          width: "1000px",
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
              <BsThreeDots size={30} onClick={() => console.log("nanna")} />
            </div>
            <div style={{ padding: "5px" }}>
              <p>Date Posted: {props.datePosted} </p>
              {props.children}
              <p>Status:</p>
              //complete the rest of the data
            </div>
          </div>
        </div>
      </RequestCard>
    </>
  );
}
export default DonationPostCard;
