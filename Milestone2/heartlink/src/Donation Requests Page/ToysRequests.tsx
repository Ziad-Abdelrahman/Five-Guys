import DonorNavigationBar from "../components/NavigationBar/Donor Navigation Bar/DonorNavigationBar.tsx";
import Headerofsection from "../components/Header/HeaderOfSection.tsx";
import ChildrenHospital from "../assets/57357.jpeg";
import Turin from "../assets/Turin.jpg";
import ResalaLogo from "../assets/Resala.png";
import "./AllDonationRequests.css";
import DonationRequestCard from "../components/Card/DonationRequestCard.tsx";
import ToysDonationFilter from "../components/DonorFilterCard/ToysDonationFilter.tsx";
import hashSet from "../hashSet";
import ViewPopup from "../components/View Request Popup/ViewPopup.tsx";
import { useState } from "react";
import toy from "../assets/toyexample.png";

function ToysRequests() {
  const detailsList: hashSet = {
    "70": ["Educational", "6-12", "Male", "Board Games", "50"],
    "71": ["Interactive", "0-2", "Unisex", "Stuffed Toys", "30"],
    "72": ["Traditional", "2-6", "Female", "Dolls", "40"],
    "73": ["Musical", "0-2", "Unisex", "Stuffed Toys", "25"],
    "74": ["Electronic", "6-12", "Male", "Cars", "20"],
    "75": ["Interactive", "2-6", "Female", "Outdoor", "35"],
    "76": ["Educational", "0-2", "Unisex", "Board Games", "15"],
    "77": ["Musical", "2-6", "Male", "Sports", "22"],
    "78": ["Traditional", "6-12", "Female", "Board Games", "18"],
    "79": ["Electronic", "2-6", "Unisex", "Dolls", "12"],
    "80": ["Interactive", "0-2", "Male", "Cars", "30"],
    "81": ["Educational", "6-12", "Unisex", "Sports", "24"],
  };
  const cardData = [
    {
      image: ChildrenHospital,
      description: "Toys Donation",
      postedby: "57357 ",
      postdate: "5/1/2024",
      handleClick: { handleLearnMoreClick },
      buttonID: "70",
    },
    {
      image: Turin,
      description: "Toys Donation",
      postedby: "Turin ",
      postdate: "5/1/2024",
      handleClick: { handleLearnMoreClick },
      buttonID: "2",
    },
    {
      image: ResalaLogo,
      description: "Toys Donation",
      postedby: "Resala",
      postdate: "5/1/2024",
      handleClick: { handleLearnMoreClick },
      buttonID: "3",
    },
    {
      image: Turin,
      description: "Toys Donation",
      postedby: "Turin ",
      postdate: "5/1/2024",
      handleClick: { handleLearnMoreClick },
      buttonID: "4",
    },
    {
      image: ChildrenHospital,
      description: "Toys Donation",
      postedby: "57357 ",
      postdate: "5/1/2024",
      handleClick: { handleLearnMoreClick },
      buttonID: "5",
    },
    {
      image: ChildrenHospital,
      description: "Toys Donation",
      postedby: "57357 ",
      postdate: "5/1/2024",
      handleClick: { handleLearnMoreClick },
      buttonID: "6",
    },
    {
      image: ResalaLogo,
      description: "Toys Donation",
      postedby: "Resala ",
      postdate: "5/1/2024",
      handleClick: { handleLearnMoreClick },
      buttonID: "7",
    },
    {
      image: Turin,
      description: "Toys Donation",
      postedby: "Turin ",
      postdate: "5/1/2024",
      handleClick: { handleLearnMoreClick },
      buttonID: "77",
    },
    {
      image: ResalaLogo,
      description: "Toys Donation",
      postedby: "Resala ",
      postdate: "5/1/2024",
      handleClick: { handleLearnMoreClick },
      buttonID: "78",
    },
    {
      image: Turin,
      description: "Toys Donation",
      postedby: "Turin ",
      postdate: "5/1/2024",
      handleClick: { handleLearnMoreClick },
      buttonID: "79",
    },
    {
      image: ChildrenHospital,
      description: "Toys Donation",
      postedby: "57357 ",
      postdate: "5/1/2024",
      handleClick: { handleLearnMoreClick },
      buttonID: "80",
    },
    {
      image: ResalaLogo,
      description: "Toys Donation",
      postedby: "Resala ",
      postdate: "5/1/2024",
      handleClick: { handleLearnMoreClick },
      buttonID: "81",
    },
  ];

  const [selectedID, setSelectedID] = useState("");
  function handleClosePopUp() {
    setSelectedID("");
  }
  function handleLearnMoreClick(id: string) {
    setSelectedID(id);
  }

  /////////////////////
  const [selectedAge, setSelectedAge] = useState("");
  const [selectedGender, setSelectedGender] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");

  const handleAgeFilter = (age: string) => {
    age === "Age" ? setSelectedAge("") : setSelectedAge(age);
  };
  const handleGenderFilter = (gender: string) => {
    gender === "Gender" ? setSelectedGender("") : setSelectedGender(gender);
  };
  const handleCategoryFilter = (category: string) => {
    category === "Category"
      ? setSelectedCategory("")
      : setSelectedCategory(category);
  };
  return (
    <>
      <DonorNavigationBar />
      <ViewPopup trigger={selectedID != ""} handleClick={handleClosePopUp}>
        <div>
          {detailsList[selectedID] && (
            <ul>
              <li>Type: {detailsList[selectedID][0]}</li>
              <li>Age: {detailsList[selectedID][1]}</li>
              <li>Gender: {detailsList[selectedID][2]}</li>
              <li>Category: {detailsList[selectedID][3]}</li>
              <li>Quantity: {detailsList[selectedID][4]}</li>
            </ul>
          )}
        </div>
        <img style={{ width: "30%" }} src={toy} />
      </ViewPopup>
      <Headerofsection title={"Toys Requests"} />

      <ToysDonationFilter
        handleAgeFilter={handleAgeFilter}
        handleGender={handleGenderFilter}
        handleCategory={handleCategoryFilter}
      />

      <div className="requests-conainer">
        {cardData
          .filter(
            (card) =>
              (detailsList[card.buttonID][1] === selectedAge ||
                selectedAge === "") &&
              (detailsList[card.buttonID][2] === selectedGender ||
                selectedGender === "") &&
              (detailsList[card.buttonID][3] === selectedCategory ||
                selectedCategory === ""),
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

export default ToysRequests;
