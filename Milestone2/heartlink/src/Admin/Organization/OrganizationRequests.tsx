import Org1 from "../../assets/Clothingbank.png"
import Org2 from "../../assets/MagdyYakoub.png"
import Org3 from "../../assets/baheya.png"
import Org4 from "../../assets/Turin.jpg"
import Org5 from "../../assets/Redcrescent.png"
import AcceptRejectCard from '../../components/cards/AcceptRejectCard'
import '../AdminStyles.css';
import Headerofsection from '../../components/header/headerofsection';


const OrganizationRequests = () => {
  const cardData = [
    {  id: "1", image: Org1, img_alt: 'Clothing Bank logo', title: 'Clothing Bank', text: 'To be a sustainable role model for giving to provide the basic needs of clothes and blankets to those in need.'},
    {  id: "2", image: Org2, img_alt: 'Magdy Yacoub Foundation logo', title: 'Magdy Yacoub Foundation', text: 'Expand access to world-class treatment' },
    {  id: "3", image: Org3, img_alt: 'Baheya logo', title: 'Baheya', text: "Baheya Foundation is the first destination for women's health and safety" },
    {  id: "4", image: Org4, img_alt: 'Turin logo', title: 'Turin', text: 'Together we could make a change.' },
    {  id: "5", image: Org5, img_alt: 'Red Crescent logo', title: 'Red Crescent', text: 'Egyptian Red Crescent works to achieve the ultimate goal of alleviating humanitarian sufferings especially for those in crisis.' }
  ];


  return (
    <div>
      <div>
      <Headerofsection
        title={"Organization Requests"}
        smallDivStyle={{
          display: "flex",
          justifyContent: "space-between",
          width: "100%",
        }}
        style={{ marginLeft: "10em", width: "80%" }}
      />      
      </div>
      <div className="cards">
        {cardData.map((cardData) => (
          <AcceptRejectCard 
          key={cardData.id}
          image={cardData.image}
          img_alt={cardData.img_alt}
          title={cardData.title}
          text={cardData.text}
          width={300}
          height={420}
          />

        ))}
      </div>
      
    </div>
  )
}

export default OrganizationRequests
