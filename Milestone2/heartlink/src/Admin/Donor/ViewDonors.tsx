import Pic from "../../assets/profilepic.jpg" 
import { useState } from 'react';
import ViewCards from '../../components/Card/Admin Cards/ViewCard';
import '../AdminStyles.css';
import Headerofsection from "../../components/Header/HeaderOfSection";
import Search from "../../components/Search/Search";

const Donors = () => {
  const cardData = [
    {  id: "1", image: Pic, img_alt: 'profile picture', title: 'Emily Johnson', text: 'Regular Donor' },
    {  id: "2", image: Pic, img_alt: 'profile picture', title: 'Christopher Martin', text: 'Teacher' },
    {  id: "3", image: Pic, img_alt: 'profile picture', title: 'Stephanie Wilson', text: 'Doctor' },
    {  id: "4", image: Pic, img_alt: 'profile picture', title: 'Matthew Harris', text: 'Teacher' },
    {  id: "5", image: Pic, img_alt: 'profile picture', title: 'David Rodriguez', text: 'Regular Donor' }
  ];

  const [search, setSearch] = useState("");

  const handleSearch = (written: string) => {
    setSearch(written);
  };

  return (
    <div>
      <Headerofsection
        title={"Donors"}
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
          <ViewCards
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
    

  )
}

export default Donors
