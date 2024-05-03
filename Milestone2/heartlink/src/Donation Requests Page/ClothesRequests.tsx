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

  //learn more functionality
  const [selectedID, setSelectedID] = useState("");
  //responsible for getting the id of the request to view its details
  function handleLearnMoreClick(id: string) {
    setSelectedID(id);
  }

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

      <ClothesFilter />
      <div className="requests-conainer">
        <DonationRequestCard
          buttonID={"1"}
          handleClick={handleLearnMoreClick}
          image={Clothingbank}
          description="Clothes Donation"
          postedby="Egyptian Clothing Bank "
          postdate={"5/1/2024"}
        />
        <DonationRequestCard
          buttonID={"2"}
          handleClick={handleLearnMoreClick}
          image={Orman}
          description="Clothes Donation"
          postedby="Dar Al Orman "
          postdate={"5/1/2024"}
        />
        <DonationRequestCard
          buttonID={"3"}
          handleClick={handleLearnMoreClick}
          image={Turin}
          description="Clothes Donation"
          postedby="Turin "
          postdate={"5/1/2024"}
        />
        <DonationRequestCard
          buttonID={"4"}
          handleClick={handleLearnMoreClick}
          image={ResalaLogo}
          description="Clothes Donation"
          postedby="Resala"
          postdate={"5/1/2024"}
        />
        <DonationRequestCard
          buttonID={"5"}
          handleClick={handleLearnMoreClick}
          image={Turin}
          description="Clothes Donation"
          postedby="Turin "
          postdate={"5/1/2024"}
        />
        <DonationRequestCard
          buttonID={"6"}
          handleClick={handleLearnMoreClick}
          image={Orman}
          description="Clothes Donation"
          postedby="Dar Al Orman "
          postdate={"5/1/2024"}
        />
        <DonationRequestCard
          buttonID={"7"}
          handleClick={handleLearnMoreClick}
          image={Orman}
          description="Clothes Donation"
          postedby="Dar Al Orman "
          postdate={"5/1/2024"}
        />
        <DonationRequestCard
          buttonID={"8"}
          handleClick={handleLearnMoreClick}
          image={ResalaLogo}
          description="Clothes Donation"
          postedby="Resala "
          postdate={"5/1/2024"}
        />
        <DonationRequestCard
          buttonID={"9"}
          handleClick={handleLearnMoreClick}
          image={ResalaLogo}
          description="Clothes Donation"
          postedby="Resala "
          postdate={"5/1/2024"}
        />
        <DonationRequestCard
          buttonID={"10"}
          handleClick={handleLearnMoreClick}
          image={Clothingbank}
          description="Clothes"
          postedby="Egyptian Clothing Bank "
          postdate={"5/1/2024"}
        />
        <DonationRequestCard
          buttonID={"11"}
          handleClick={handleLearnMoreClick}
          image={Orman}
          description="Clothes"
          postedby="Al Orman "
          postdate={"5/5/2023"}
        />
        <DonationRequestCard
          buttonID={"12"}
          handleClick={handleLearnMoreClick}
          image={Clothingbank}
          description="Clothes"
          postedby="Egyptian Clothing Bank "
          postdate={"5/1/2024"}
        />
        <DonationRequestCard
          buttonID={"13"}
          handleClick={handleLearnMoreClick}
          image={Turin}
          description="Clothes"
          postedby="Turin "
          postdate={"5/1/2024"}
        />
      </div>
    </>
  );
}

export default ClothesRequests;
