import Org1 from "../../assets/57357.jpeg";
import Org2 from "../../assets/EgyptianFoodBank.png";
import Org3 from "../../assets/Misrelkheir.jpeg";
import Org4 from "../../assets/Orman.png";
import Org5 from "../../assets/Resala.png";
import HeaderOfSection from "../../components/Header/HeaderOfSection";
import AdminOrgRequestsCard from "../../components/Card/Admin Cards/AdminOrgRequestsCard.tsx";
import Search from "../../components/Search/Search.tsx";
import { useState } from "react";
import AdminNavbar from "../../components/NavigationBar/AdminNavbar/AdminNavbar.tsx";
import ViewPopup from "../../components/View Request Popup/ViewPopup.tsx";

const PendingOrganizations = () => {
  const cardData = [
    {
      id: "1",
      image: Org1,
      img_alt: "57357 logo",
      title: "57357",
      text: "To Be the Unique Worldwide Icon of Change Towards a Cancer‐ Free Childhood",
      type: "Cancer Institute",
      city: "Cairo",
      area: "El Saida Zeinab",
      established: "2007",
    },
    {
      id: "2",
      image: Org2,
      img_alt: "Egyptian Food Bank logo",
      title: "Egyptian Food Bank",
      text: "Food is the basis of life",
      type: "Food Charity",
      city: "Zagazig",
      Area: "Third District",
      established: "2006",
    },
    {
      id: "3",
      image: Org3,
      img_alt: "Misr elkheir logo",
      title: "Misr elkheir",
      text: "Misr El Kheir aims to develop the Egyptian individual in a comprehensive manner.",
      type: "Human Development",
      city: "Alexandria",
      area: "Miami",
      established: "2007",
    },
    {
      id: "4",
      image: Org4,
      img_alt: "Orman logo",
      title: "Orman",
      text: "Providing qualitative, non-traditional charitable services aimed, within a specific period of time.",
      type: "Human Development",
      city: "Cairo",
      area: "Giza",
      established: "2007",
    },
    {
      id: "5",
      image: Org5,
      img_alt: "Resala logo",
      title: "Resala",
      text: "Spreading volunteerism and positivity in society, and cultivate belonging.",
      type: "Humanitarian Aid",
      city: "Cairo",
      Area: "10th of Ramadan",
      established: "1999",
    },
  ];

  const [search, setSearch] = useState("");
  const [selectedID, setSelectedID] = useState("");
  //responsible for getting the id of the request to view its details
  function handleLearnMoreClick(id: string) {
    setSelectedID(id);
  }
  //responsible for closing the popup
  function handleClosePopUp() {
    setSelectedID("");
  }

  const handleSearch = (written: string) => {
    setSearch(written);
  };

  return (
    <>
      <div>
        <AdminNavbar />
        <ViewPopup trigger={selectedID != ""} handleClick={handleClosePopUp}>
          <div>
            {cardData
              .filter((cardData) => cardData.id === selectedID)
              .map((cardData) => (
                <ul>
                  <li>
                    <p>Name: {cardData.title}</p>
                  </li>
                  <li>
                    <p>Aim: {cardData.text}</p>
                  </li>
                  <li>
                    <p>Type: {cardData.type}</p>
                  </li>
                  <li>
                    <p>City: {cardData.city}</p>
                  </li>
                  <li>
                    <p>Area: {cardData.area}</p>
                  </li>
                  <li>
                    <p>Established: {cardData.established}</p>
                  </li>
                </ul>
              ))}
          </div>
        </ViewPopup>
        <HeaderOfSection
          title={"Pending Organizations"}
          smallDivStyle={{
            display: "flex",
            justifyContent: "space-between",
            width: "100%",
          }}
          style={{ marginLeft: "10em", width: "80%" }}
        >
          <Search handleSearch={handleSearch} />
        </HeaderOfSection>
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          width: "100%",
        }}
      >
        {cardData
          .filter((cardData) => cardData.title.toLowerCase().includes(search))
          .map((cardData) => (
            <AdminOrgRequestsCard
              buttonID={cardData.id}
              key={cardData.id}
              image={cardData.image}
              name={cardData.title}
              text={cardData.text}
              type={"Organization"}
              handleClick={handleLearnMoreClick}
            />
          ))}
      </div>
    </>
  );
};

export default PendingOrganizations;
