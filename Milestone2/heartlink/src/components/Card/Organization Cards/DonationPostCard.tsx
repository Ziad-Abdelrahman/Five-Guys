import RequestCard from "../RequestCard.tsx";

interface DonationPostCardProps {
  typeOfRequest: string;
  datePosted: string;
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
            <h3>{props.typeOfRequest} Post</h3>
            <div style={{ padding: "5px" }}>
              <p>Date Posted: </p>
            </div>
          </div>
        </div>
      </RequestCard>
    </>
  );
}
export default DonationPostCard;
