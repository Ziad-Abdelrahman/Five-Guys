import { useState } from "react";
import ViewCards from "../../components/Card/Admin Cards/ViewCards.tsx";
import Org1 from "../../assets/57357.jpeg";
import Org2 from "../../assets/EgyptianFoodBank.png";
import Org3 from "../../assets/Misrelkheir.jpeg";
import Org4 from "../../assets/Orman.png";
import Org5 from "../../assets/Resala.png";
import Org6 from "../../assets/Turin.jpg";
import Org7 from "../../assets/MagdyYakoub.png";
import Org8 from "../../assets/Redcrescent.png";
import Org9 from "../../assets/EgyptianFoodBank.png";
import "./organizations.css";
import "../../components/Search/searchbar.css";
import Headerofsection from "../../components/Header/HeaderOfSection.tsx";
import Search from "../../components/Search/Search.tsx";

const Organizations = () => {
  const cardData = [
    {
      id: "1",
      image: Org1,
      img_alt: "57357 logo",
      title: "57357",
      text: "To Be the Unique Worldwide Icon of Change Towards a Cancer‐ Free Childhood",
    },
    {
      id: "2",
      image: Org2,
      img_alt: "Egyptian Food Bank logo",
      title: "Egyptian Food Bank",
      text: "Food is the basis of life",
    },
    {
      id: "3",
      image: Org3,
      img_alt: "Misr elkheir logo",
      title: "Misr elkheir",
      text: "Misr El Kheir aims to develop the Egyptian individual in a comprehensive manner.",
    },
    {
      id: "4",
      image: Org4,
      img_alt: "Orman logo",
      title: "Orman",
      text: "Providing qualitative, non-traditional charitable services aimed, within a specific period of time.",
    },
    {
      id: "5",
      image: Org5,
      img_alt: "Resala logo",
      title: "Resala",
      text: "Spreading volunteerism and positivity in society, and cultivate belonging.",
    },
    {
      id: "6",
      image: Org6,
      img_alt: "Turin logo",
      title: "Turin",
      text: "Turin is a non-profit organization that aims to provide a decent life for the poor and needy.",
    },
    {
      id: "7",
      image: Org7,
      img_alt: "MagdyYakoub",
      title: "Magdy Yakoub",
      text: "Magdy Yakoub is a non-profit organization that aims to provide a decent life for the poor and needy.",
    },
    {
      id: "8",
      image: Org8,
      img_alt: "Red",
      title: "Red Cresent",
      text: "Red Cresent is a non-profit organization that aims to provide a decent life for the poor and needy.",
    },

    {
      id: "9",
      image: Org9,
      img_alt: "Red",
      title: "Egyptian Food Bank",
      text: "Food is the basis of life",
    },
  ];

  const [search, setSearch] = useState("");

  const handleSearch = (written: string) => {
    setSearch(written);
  };

  return (
    <>
      <Headerofsection
        title={"Registered Organization"}
        smallDivStyle={{
          display: "flex",
          justifyContent: "space-between",
          width: "100%",
        }}
        style={{ marginLeft: "10em", width: "80%" }}
      >
        <Search handleSearch={handleSearch} />
      </Headerofsection>

      <div className={"organizations-container"}>
        {cardData
          .filter((cardData) => cardData.title.toLowerCase().includes(search))
          .map((cardData) => (
            <ViewCards
              key={cardData.id}
              image={cardData.image}
              img_alt={cardData.img_alt}
              title={cardData.title}
              text={cardData.text}
            />
          ))}
      </div>
    </>
  );
};

export default Organizations;
