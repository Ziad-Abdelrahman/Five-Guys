import Pic from "../../assets/profilepic.jpg";
import AcceptRejectCard from "../../components/cards/AcceptRejectCard";
import Headerofsection from "../../components/header/headerofsection";
import '../AdminStyles.css';

const DonorRequests = () => {
  const cardData = [
    {  id: "1", image: Pic, img_alt: 'profile picture', title: 'Robert Moore', text: 'Regular Donor' },
    {  id: "2", image: Pic, img_alt: 'profile picture', title: 'Jenna Clark', text: 'Teacher' },
    {  id: "3", image: Pic, img_alt: 'profile picture', title: 'Amanda Anderson', text: 'Doctor' },
    {  id: "4", image: Pic, img_alt: 'profile picture', title: 'Andrew Taylor', text: 'Teacher' },
    {  id: "5", image: Pic, img_alt: 'profile picture', title: 'Nicole White', text: 'Regular Donor' }
  ];
  return (
    <div>
      <div>
      <Headerofsection
        title={"Donor Requests"}
        smallDivStyle={{
          display: "flex",
          justifyContent: "space-between",
          width: "100%",
        }}
        style={{ marginLeft: "10em", width: "80%" }}
      />       </div>
      <div className="cards">
        {cardData.map((cardData) => (
          <AcceptRejectCard 
          key={cardData.id}
          image={cardData.image}
          img_alt={cardData.img_alt}
          title={cardData.title}
          text={cardData.text}
          width={300}
          height={350}
          />

        ))}
      </div>
    </div>
  )
}

export default DonorRequests
