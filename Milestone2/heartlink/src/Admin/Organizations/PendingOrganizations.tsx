import Org1 from "../../assets/Clothingbank.png";
import Org2 from "../../assets/MagdyYakoub.png";
import Org3 from "../../assets/baheya.png";
import Org4 from "../../assets/Turin.jpg";
import Org5 from "../../assets/Redcrescent.png";
import HeaderOfSection from "../../components/Header/HeaderOfSection";
import AdminOrgRequestsCard from "../../components/Card/Admin Cards/AdminOrgRequestsCard.tsx";
import Search from "../../components/Search/Search.tsx";
import { useState } from "react";
import AdminNavbar from "../../components/NavigationBar/AdminNavbar/AdminNavbar.tsx";

const PendingOrganizations = () => {
  const cardData = [
    {
      id: "1",
      image: Org1,
      img_alt: "Clothing Bank logo",
      title: "Clothing Bank",
      text: "To be a sustainable role model for giving to provide the basic needs of clothes and blankets to those in need.",
    },
    {
      id: "2",
      image: Org2,
      img_alt: "Magdy Yacoub Foundation logo",
      title: "Magdy Yacoub Foundation",
      text: "Expand access to world-class treatment",
    },
    {
      id: "3",
      image: Org3,
      img_alt: "Baheya logo",
      title: "Baheya",
      text: "Baheya Foundation is the first destination for women's health and safety",
    },
    {
      id: "4",
      image: Org4,
      img_alt: "Turin logo",
      title: "Turin",
      text: "Together we could make a change.",
    },
    {
      id: "5",
      image: Org5,
      img_alt: "Red Crescent logo",
      title: "Red Crescent",
      text: "Egyptian Red Crescent works to achieve the ultimate goal of alleviating humanitarian sufferings especially for those in crisis.",
    },
  ];

  const [search, setSearch] = useState("");

  const handleSearch = (written: string) => {
    setSearch(written);
  };

  return (
    <>
      <div>
        <AdminNavbar />
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
              key={cardData.id}
              image={cardData.image}
              name={cardData.title}
              text={cardData.text}
              type={"Organization"}
            />
          ))}
      </div>
    </>
  );
};

export default PendingOrganizations;
