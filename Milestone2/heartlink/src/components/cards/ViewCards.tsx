
import AcceptRejectButton from "../Buttons/AcceptRejectButton";
import './cards.css';
interface ViewCards{
  image: string;
  img_alt: string;
  title: string;
  text: string;
}
function ViewCards(props: ViewCards) {
  return (
    <div className='card'>
      <img className='logo' src={props.image} alt={props.img_alt} />
      <h2 className='title'>{props.title}</h2>
      <p className='text'>{props.text}</p>
      <div className=".delete"><AcceptRejectButton text="Delete"/></div>
      
    </div>
  );
}

export default ViewCards;
