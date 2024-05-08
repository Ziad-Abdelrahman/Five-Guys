import arrow from "../../assets/arrow_show_more.png";
import "./DonorAccountManagement.css";
interface DonorProbonoCardProps {
  image?: string;
  title?: string;
}

function DonorProbonoCard(props: DonorProbonoCardProps) {
  return (
    <>
      <div className={"probono-registeration-card"}>
        <div id={"probono-image-container"}>
          <img src={props.image} />
        </div>
        <div id={"probono-image-container"}>
          <h4>{props.title}</h4>
        </div>
        <div className={"arrow-container"}>
          <img src={arrow} />
        </div>
      </div>
    </>
  );
}

export default DonorProbonoCard;
