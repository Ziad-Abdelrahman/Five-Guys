import { useState } from 'react';
import AccountCard from '../../components/Card/Admin Cards/AccountCards';
import Org1 from "../../assets/57357.jpeg";
import Org2 from '../../assets/EgyptianFoodBank.png';
import Org3 from '../../assets/Misrelkheir.jpeg';
import Org4 from '../../assets/Orman.png';
import Org5 from '../../assets/Resala.png';
import '../AdminStyles.css';
import Headerofsection from "../../components/Header/HeaderOfSection";
import Search from '../../components/Search/Search';

const Organizations = () => {
  
  const cardData = [
    {  id: "1", image: Org1, img_alt: '57357 logo', title: '57357', text: 'To Be the Unique Worldwide Icon of Change Towards a Cancer‐ Free Childhood' },
    {  id: "2", image: Org2, img_alt: 'Egyptian Food Bank logo', title: 'Egyptian Food Bank', text: 'Food is the basis of life' },
    {  id: "3", image: Org3, img_alt: 'Misr elkheir logo', title: 'Misr elkheir', text: 'Misr El Kheir is established with the objective of developing the Egyptian individual in a comprehensive manner.' },
    {  id: "4", image: Org4, img_alt: 'Orman logo', title: 'Orman', text: 'Providing qualitative, non-traditional charitable services aimed, within a specific period of time.' },
    {  id: "5", image: Org5, img_alt: 'Resala logo', title: 'Resala', text: 'The goal of the founding team was to spread volunteerism and positivity in society, and cultivate belonging.' }
  ];

  const [search, setSearch] = useState("");

  const handleSearch = (written: string) => {
    setSearch(written);
  };

  return (
    <div>
      <Headerofsection
        title={"Organization Accounts"}
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
          <AccountCard
            key={cardData.id}
            image={cardData.image}
            img_alt={cardData.img_alt}
            title={cardData.title}
            text={cardData.text}
            width={1000}
          height={350}
          />
        ))}
      </div>
    </div>
  );
};

export default Organizations;
