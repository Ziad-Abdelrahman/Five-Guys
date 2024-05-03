import AcceptRejectButton from "../Buttons/AcceptRejectButton.tsx";
import "./cards.css";
interface AcceptRejectCard {
  image: string;
  img_alt: string;
  title: string;
  text: string;
}
function AcceptRejectCard(props: AcceptRejectCard) {
  return (
    <div className="card">
      <img className="logo" src={props.image} alt={props.img_alt} />
      <h2 className="title">{props.title}</h2>
      <p className="text">{props.text}</p>

      <div className="accept">
        <AcceptRejectButton text="Accept" />
      </div>
      <div className="reject">
        <AcceptRejectButton text="Reject" />
      </div>
    </div>
  );
}

export default AcceptRejectCard;
