import { useState } from 'react';
import Org1 from "../../assets/57357.jpeg";
import Org2 from '../../assets/EgyptianFoodBank.png';
import Org3 from '../../assets/Misrelkheir.jpeg';
import Org4 from '../../assets/Orman.png';
import Org5 from '../../assets/Resala.png';
import '../AdminStyles.css';
import ViewOrganizationPanel from '../../components/Card/Admin Cards/ViewOrganizationPanel';
import Headerofsection from "../../components/Header/HeaderOfSection";
import Search from '../../components/Search/Search';

const ViewOrganization = () => {
  
  const cardData = [
    {
      id: "1",
      image: Org1,
      img_alt: '57357 logo',
      title: '57357',
      text: 'To Be the Unique Worldwide Icon of Change Towards a Cancer‐ Free Childhood',
      phoneNumber: '+20 2 37490000',
      email: 'info@57357.org',
      address: 'Cairo, Egypt'
    },
    {
      id: "2",
      image: Org2,
      img_alt: 'Egyptian Food Bank logo',
      title: 'Egyptian Food Bank',
      text: 'Food is the basis of life',
      phoneNumber: '+20 2 33365039',
      email: 'info@egyptianfoodbank.com',
      address: 'Cairo, Egypt'
    },
    {
      id: "3",
      image: Org3,
      img_alt: 'Misr elkheir logo',
      title: 'Misr elkheir',
      text: 'Misr El Kheir is established with the objective of developing the Egyptian individual in a comprehensive manner.',
      phoneNumber: '+20 2 22908000',
      email: 'info@misrelkheir.org',
      address: 'Cairo, Egypt'
    },
    {
      id: "4",
      image: Org4,
      img_alt: 'Orman logo',
      title: 'Orman',
      text: 'Providing qualitative, non-traditional charitable services aimed, within a specific period of time.',
      phoneNumber: '+20 2 33772021',
      email: 'info@orman.org.eg',
      address: 'Giza, Egypt'
    },
    {
      id: "5",
      image: Org5,
      img_alt: 'Resala logo',
      title: 'Resala',
      text: 'The goal of the founding team was to spread volunteerism and positivity in society, and cultivate belonging.',
      phoneNumber: '+20 2 16141',
      email: 'info@resala.org',
      address: 'Cairo, Egypt'
    }
  ];
  

  
  const [search, setSearch] = useState("");
  const handleSearch = (written: string) => {
    setSearch(written);
  };


  return (
    <div>
      <Headerofsection
        title={"Organizations"}
        smallDivStyle={{
          display: "flex",
          justifyContent: "space-between",
          width: "100%",
        }}
        style={{ marginLeft: "10em", width: "80%" }}
      >
        <Search handleSearch={handleSearch} />
      </Headerofsection>
      <div className='cards'>
        {cardData.filter(cardData=>cardData.title.toLowerCase().includes(search)).map((cardData) => (
          <ViewOrganizationPanel
            key={cardData.id}
            image={cardData.image}
            img_alt={cardData.img_alt}
            title={cardData.title}
            text={cardData.text}
            width={250}
            height={380} 
            phoneNumber={cardData.phoneNumber} 
            address={cardData.address} 
            email={cardData.email}          
            />
        ))}
      </div>
    </div>
  );
};

export default ViewOrganization;
