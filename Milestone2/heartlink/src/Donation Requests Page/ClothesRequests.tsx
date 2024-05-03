import "./AllDonationRequests.css";
import ResalaLogo from "../assets/Resala.png";
import Turin from "../assets/Turin.jpg";
import Orman from "../assets/Orman.png";
import Clothingbank from "../assets/Clothingbank.png";
import DonorNavigationBar from "../components/NavigationBar/Donor Navigation Bar/DonorNavigationBar.tsx";
import Headerofsection from "../components/header/headerofsection.tsx";
import DonationRequestCard from "../components/Card/DonationRequestCard.tsx";
import ClothesFilter from "../components/DonorFilterCard/ClothesFilter.tsx";
import hashSet from "../hashSet";
import ViewPopup from "../components/View Request Popup/ViewPopup.tsx";
import { useState } from "react";

function ClothesRequests() {
  const detailsList: hashSet = {
    "1": ["SwimSuit", "Adults", "Male", "Winter", "Cotton", "100"],
    "2": ["Dress", "Infants", "Male", "Fall", "Cotton", "90"],
    "3": ["Coat", "Kids", "Male", "Autumn", "Cotton", "10"],
    "4": ["Coat", "Adults", "Female", "Winter", "Linen", "30"],
    "5": ["Dress", "Infants", "Female", "Winter", "Wool", "40"],
    "6": ["Skirt", "Kids", "Female", "Autumn", "Polyster", "70"],
    "7": ["Jeans", "Kids", "Male", "Fall", "Cotton", "100"],
    "8": ["Pyjamas", "Adults ", "Female", "Winter", "Polyster", "20"],
    "9": ["Jeans", "Adults", "Male", "Summer", "Denim", "30"],
    "10": ["Pyjamas", "Kids", "Male", "Summer", "Linen", "20"],
    "11": ["Pyjamas", "Adults", "Female", "Winter", "Cotton", "40"],
    "12": ["Jeans", "Infants", "Female", "Fall", "Denim", "20"],
    "13": ["Skirt", "Adults", "Female", "Summer", "Cotton", "20"],
  };
  const cardData = [
    {
      buttonID: "1",
      image: Clothingbank,
      description: "Clothes Donation",
      postedby: "Egyptian Clothing Bank ",
      postdate: "5/1/2024",
    },
    {
      buttonID: "2",
      image: Orman,
      description: "Clothes Donation",
      postedby: "Dar Al Orman ",
      postdate: "5/1/2024",
    },
    {
      buttonID: "3",
      image: Turin,
      description: "Clothes Donation",
      postedby: "Turin ",
      postdate: "5/1/2024",
    },
    {
      buttonID: "4",
      image: ResalaLogo,
      description: "Clothes Donation",
      postedby: "Resala",
      postdate: "5/1/2024",
    },
    {
      buttonID: "5",
      image: Turin,
      description: "Clothes Donation",
      postedby: "Turin ",
      postdate: "5/1/2024",
    },
    {
      buttonID: "6",
      image: Orman,
      description: "Clothes Donation",
      postedby: "Dar Al Orman ",
      postdate: "5/1/2024",
    },
    {
      buttonID: "7",
      image: Orman,
      description: "Clothes Donation",
      postedby: "Dar Al Orman ",
      postdate: "5/1/2024",
    },
    {
      buttonID: "8",
      image: ResalaLogo,
      description: "Clothes Donation",
      postedby: "Resala ",
      postdate: "5/1/2024",
    },
    {
      buttonID: "9",
      image: ResalaLogo,
      description: "Clothes Donation",
      postedby: "Resala ",
      postdate: "5/1/2024",
    },
    {
      buttonID: "10",
      image: Clothingbank,
      description: "Clothes",
      postedby: "Egyptian Clothing Bank ",
      postdate: "5/1/2024",
    },
    {
      buttonID: "11",
      image: Orman,
      description: "Clothes",
      postedby: "Al Orman ",
      postdate: "5/5/2023",
    },
    {
      buttonID: "12",
      image: Clothingbank,
      description: "Clothes",
      postedby: "Egyptian Clothing Bank ",
      postdate: "5/1/2024",
    },
    {
      buttonID: "13",
      image: Turin,
      description: "Clothes",
      postedby: "Turin ",
      postdate: "5/1/2024",
    },
  ];

  //learn more functionality
  const [selectedID, setSelectedID] = useState("");
  const [selectedAge, setSelectedAge] = useState("");
  const [selectedGender, setSelectedGender] = useState("");
  const [selectedSeason, setSelectedSeason] = useState("");
  //responsible for getting the id of the request to view its details
  function handleLearnMoreClick(id: string) {
    setSelectedID(id);
  }
  const handleAgeFilter = (age: string) => {
    age === "Age" ? setSelectedAge("") : setSelectedAge(age);
  };
  const handleGenderFilter = (gender: string) => {
    gender === "Gender" ? setSelectedGender("") : setSelectedGender(gender);
  };
  const handleSeasonFilter = (season: string) => {
    season === "Season" ? setSelectedSeason("") : setSelectedSeason(season);
  };

  //responsible for closing the popup
  function handleClosePopUp() {
    setSelectedID("");
  }

  return (
    <>
      <DonorNavigationBar />
      <ViewPopup trigger={selectedID != ""} handleClick={handleClosePopUp}>
        <div>
          {detailsList[selectedID] && (
            <ul>
              <li>Category: {detailsList[selectedID][0]}</li>
              <br />
              <li>Age: {detailsList[selectedID][1]}</li>
              <br />
              <li>Gender: {detailsList[selectedID][2]}</li>
              <br />
              <li>Season: {detailsList[selectedID][3]}</li>
              <br />
              <li>Material: {detailsList[selectedID][4]}</li>
              <br />
              <li>Quantity: {detailsList[selectedID][5]}</li>
            </ul>
          )}
        </div>
      </ViewPopup>
      <Headerofsection title={"Clothes Requests"} />

      <ClothesFilter
        handleAgeFilter={handleAgeFilter}
        handleGenderFilter={handleGenderFilter}
        handleSeasonFilter={handleSeasonFilter}
      />
      <div className="requests-conainer">
        {cardData
          .filter(
            (card) =>
              (detailsList[card.buttonID][1] === selectedAge ||
                selectedAge === "") &&
              (detailsList[card.buttonID][2] === selectedGender ||
                selectedGender === "") &&
              (detailsList[card.buttonID][3] === selectedSeason ||
                selectedSeason === ""),
          )
          .map((card) => (
            <DonationRequestCard
              key={card.buttonID}
              buttonID={card.buttonID}
              handleClick={handleLearnMoreClick}
              image={card.image}
              description={card.description}
              postedby={card.postedby}
              postdate={card.postdate}
            />
          ))}
      </div>
    </>
  );
}

export default ClothesRequests;
