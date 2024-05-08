import Pic from "../../assets/profilepic.jpg";
import HeaderOfSection from "../../components/Header/HeaderOfSection";
import AdminOrgRequestsCard from "../../components/Card/Admin Cards/AdminOrgRequestsCard.tsx";
import Search from "../../components/Search/Search.tsx";
import { useState } from "react";
import AdminNavbar from "../../components/NavigationBar/AdminNavbar/AdminNavbar.tsx";

function PendingDonors() {
  const cardData = [
    {
      id: "1",
      image: Pic,
      img_alt: "profile picture",
      title: "Robert Moore",
      gender: "Male",
      text: "Regular Donor",
      phoneNumber: "+1234567890",
      address: "123 Main St",
      area: "Downtown",
      Governorate: "City",
    },
    {
      id: "2",
      image: Pic,
      img_alt: "profile picture",
      title: "Jenna Clark",
      gender: "Female",
      text: "Teacher",
      phoneNumber: "+1987654321",
      address: "456 Elm St",
      area: "Suburb",
      Governorate: "Town",
    },
    {
      id: "3",
      image: Pic,
      img_alt: "profile picture",
      title: "Amanda Anderson",
      gender: "Female",
      text: "Doctor",
      phoneNumber: "+1122334455",
      address: "789 Oak St",
      area: "Rural",
      Governorate: "County",
    },
    {
      id: "4",
      image: Pic,
      img_alt: "profile picture",
      title: "Andrew Taylor",
      gender: "Male",
      text: "Teacher",
      phoneNumber: "+1567890123",
      address: "321 Pine St",
      area: "Urban",
      Governorate: "City",
    },
    {
      id: "5",
      image: Pic,
      img_alt: "profile picture",
      title: "Nicole White",
      gender: "Female",
      text: "Regular Donor",
      phoneNumber: "+1777888999",
      address: "567 Maple St",
      area: "Town",
      Governorate: "District",
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
              type={"Donor"}
            />
          ))}
      </div>
    </>
  );
}

export default PendingDonors;
