import React, { useState } from 'react';
import ViewCards from '../../components/cards/ViewCards';
import Org1 from "../../assets/57357.jpeg";
import Org2 from '../../assets/EgyptianFoodBank.png';
import Org3 from '../../assets/Misrelkheir.jpeg';
import Org4 from '../../assets/Orman.png';
import Org5 from '../../assets/Resala.png';
import './organizations.css';
import { BsSearchHeart } from "react-icons/bs";
import "../searchbar.css"

const Organizations = () => {
  const cardData = [
    {  id: "1", image: Org1, img_alt: '57357 logo', title: '57357', text: 'To Be the Unique Worldwide Icon of Change Towards a Cancer‐ Free Childhood' },
    {  id: "2", image: Org2, img_alt: 'Egyptian Food Bank logo', title: 'Egyptian Food Bank', text: 'Food is the basis of life' },
    {  id: "3", image: Org3, img_alt: 'Misr elkheir logo', title: 'Misr elkheir', text: 'Misr El Kheir is established with the objective of developing the Egyptian individual in a comprehensive manner.' },
    {  id: "4", image: Org4, img_alt: 'Orman logo', title: 'Orman', text: 'Providing qualitative, non-traditional charitable services aimed, within a specific period of time.' },
    {  id: "5", image: Org5, img_alt: 'Resala logo', title: 'Resala', text: 'The goal of the founding team was to spread volunteerism and positivity in society, and cultivate belonging.' }
  ];

  const [search, setSearch] = useState("");

  return (
    <div>
      <div>
        <h1 className='pageTitle'>Registered Organizations:</h1>
      </div>
      <div className='search'>
      <div className="searchBoxContainer">
      <div className='searchBoxContent'>
        <BsSearchHeart className='searchIcon' />

        <div className='input'>
          <input placeholder='Type to search...' onChange={(e)=> setSearch(e.target.value)}/>
        </div>
      </div>
      
    </div>
      </div>
      <div>
        {cardData.filter(cardData=>cardData.title.toLowerCase().includes(search)).map((cardData) => (
          <ViewCards
            key={cardData.id}
            image={cardData.image}
            img_alt={cardData.img_alt}
            title={cardData.title}
            text={cardData.text}
          />
        ))}
      </div>
    </div>
  );
};

export default Organizations;
