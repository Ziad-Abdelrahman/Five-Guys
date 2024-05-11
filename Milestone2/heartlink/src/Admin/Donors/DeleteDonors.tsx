import Pic from "../../assets/profilepic.jpg";
import { useState } from "react";
import "../Organizations/DeleteOrganizations.css";
import "../../components/Search/searchbar.css";
import Search from "../../components/Search/Search";
import ViewCards from "../../components/Card/Admin Cards/ViewCards.tsx";
import HeaderOfSection from "../../components/Header/HeaderOfSection.tsx";
import AdminNavbar from "../../components/NavigationBar/AdminNavbar/AdminNavbar.tsx";
import ViewPopup from "../../components/View Request Popup/ViewPopup.tsx";

const DeleteDonors = () => {
  const cardData = [
    {
      id: "1",
      image: Pic,
      img_alt: "profile picture",
      title: "Ahmed Sherif",
      gender: "Male",
      text: "Regular Donor",
      phoneNumber: "01119997309",
      address: "Mountain View Apartment 1",
      area: "Fifth Settlement",
      Governorate: "Cairo",
    },
    {
      id: "2",
      image: Pic,
      img_alt: "profile picture",
      title: "Asmaa Mohamed",
      gender: "Female",
      text: "Teacher",
      phoneNumber: "01119997310",
      address: "Tawfeek Street Building 11 Apartment 6",
      area: "Nasr City",
      Governorate: "Cairo",
    },
    {
      id: "3",
      image: Pic,
      img_alt: "profile picture",
      title: "Farida Ayman",
      gender: "Female",
      text: "Doctor",
      phoneNumber: "01119997412",
      address: "El Hay el awel , Villa 3",
      area: "Obour",
      Governorate: "Cairo",
    },
    {
      id: "4",
      image: Pic,
      img_alt: "profile picture",
      title: "Malek Radwan",
      gender: "Male",
      text: "Blood Donor",
      phoneNumber: "01003450450",
      address: "Mahmoud Selim St , Building 3 , Apartment 6",
      area: "Mohandessin",
      Governorate: "Cairo",
    },
    {
      id: "5",
      image: Pic,
      img_alt: "profile picture",
      title: "Malak khaled",
      gender: "Female",
      text: "Blood Donor",
      phoneNumber: "01000366671",
      address: "Saba Basha St , Building 17 , Apartment 10",
      area: "Miami",
      Governorate: "Alexandria",
    },
    {
      id: "6",
      image: Pic,
      img_alt: "profile picture",
      title: "Sara Ali",
      gender: "Female",
      text: "Regular Donor",
      phoneNumber: "0122888719",
      address: "El Horeya St , Villa 225",
      area: "Sheraton",
      Governorate: "Cairo",
    },
    {
      id: "7",
      image: Pic,
      img_alt: "profile picture",
      title: "Mohamed Helmy",
      gender: "Male",
      text: "Doctor",
      phoneNumber: "0155777900",
      address: "Taha Hussein St , Villa 312",
      area: "Shrouk",
      Governorate: "Cairo",
    },
    {
      id: "8",
      image: Pic,
      img_alt: "profile picture",
      title: "George Adly",
      gender: "Male",
      text: "Teacher",
      phoneNumber: "0100780780",
      address: "Fouad St Villa 256",
      area: "Miami",
      Governorate: "Alexandria",
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
                  <p>Gender: {cardData.gender}</p>
                </li>
                <li>
                  <p>Phone number: {cardData.phoneNumber}</p>
                </li>
                <li>
                  <p>City: {cardData.Governorate}</p>
                </li>
                <li>
                  <p>Area: {cardData.area}</p>
                </li>
                <li>
                  <p>Address: {cardData.address}</p>
                </li>
              </ul>
            ))}
        </div>
      </ViewPopup>
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
      <div className={"admin-organizations-container"}>
        {cardData
          .filter((cardData) =>
            cardData.title.toLowerCase().includes(search.toLowerCase()),
          )
          .map((cardData) => (
            <ViewCards
              id={cardData.id}
              key={cardData.id}
              image={cardData.image}
              img_alt={cardData.img_alt}
              title={cardData.title}
              text={cardData.text}
              height={"400px"}
              handleLearnMoreClick={handleLearnMoreClick}
            />
          ))}
      </div>
    </>
  );
};

export default DeleteDonors;
