import Pic from "../../assets/profilepic.jpg";
import { useState } from "react";
import "../Organizations/DeleteOrganizations.css";
import "../../components/Search/searchbar.css";
import Search from "../../components/Search/Search";
import ViewCards from "../../components/Card/Admin Cards/ViewCards.tsx";
import HeaderOfSection from "../../components/Header/HeaderOfSection.tsx";
import AdminNavbar from "../../components/NavigationBar/AdminNavbar/AdminNavbar.tsx";

const DeleteDonors = () => {
  const cardData = [
    {
      id: "1",
      image: Pic,
      img_alt: "profile picture",
      title: "Emily Johnson",
      text: "Regular Donor",
    },
    {
      id: "2",
      image: Pic,
      img_alt: "profile picture",
      title: "Christopher Martin",
      text: "Teacher",
    },
    {
      id: "3",
      image: Pic,
      img_alt: "profile picture",
      title: "Stephanie Wilson",
      text: "Doctor",
    },
    {
      id: "4",
      image: Pic,
      img_alt: "profile picture",
      title: "Matthew Harris",
      text: "Teacher",
    },
    {
      id: "5",
      image: Pic,
      img_alt: "profile picture",
      title: "David Rodriguez",
      text: "Regular Donor",
    },
    {
      id: "6",
      image: Pic,
      img_alt: "profile picture",
      title: "Abdallah Ahmed",
      text: "Doctor",
    },
    {
      id: "7",
      image: Pic,
      img_alt: "profile picture",
      title: "Farah Faisal ",
      text: "Doctor ",
    },
    {
      id: "8",
      image: Pic,
      img_alt: "profile picture",
      title: "Mennatallah Halawa ",
      text: "Teacher",
    },
    {
      id: "9",
      image: Pic,
      img_alt: "profile picture",
      title: "Nour Ahmed ",
      text: "Regular Donor",
    },
    {
      id: "10",
      image: Pic,
      img_alt: "profile picture",
      title: "Ziad Abdelrahman ",
      text: "Teacher",
    },
  ];

  const [search, setSearch] = useState("");

  const handleSearch = (written: string) => {
    setSearch(written);
  };

  return (
    <>
      <AdminNavbar />
      <HeaderOfSection
        title={"Registered Donors"}
        smallDivStyle={{
          display: "flex",
          justifyContent: "space-between",
          width: "100%",
        }}
        style={{ marginLeft: "10em", width: "80%" }}
      >
        <Search handleSearch={handleSearch} />
      </HeaderOfSection>
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
              height={"400px"}
              hideInfo={true}
            />
          ))}
      </div>
    </>
  );
};

export default DeleteDonors;
