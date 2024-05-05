import NavigationBar from "../components/NavigationBar/Donor Navigation Bar/DonorNavigationBar.tsx";
import "./AllDonationRequests.css";
import ResalaLogo from "../assets/Resala.png";
import ChildrenCancer from "../assets/57357.jpeg";
import FoodBank from "../assets/EgyptianFoodBank.png";
import Orman from "../assets/Orman.png";
import RedCresent from "../assets/Redcrescent.png";
import Misrelkheir from "../assets/Misrelkheir.jpeg";
import Turin from "../assets/Turin.jpg";
import ClothingBank from "../assets/Clothingbank.png";
import MagdyYakoub from "../assets/MagdyYakoub.png";
import DonationRequestCard from "../components/Card/DonationRequestCard.tsx";
import Search from "../components/Search/Search.tsx";
import Headerofsection from "../components/Header/HeaderOfSection.tsx";
import { useState } from "react";
import hashSet from "../hashSet";
import ViewPopup from "../components/View Request Popup/ViewPopup.tsx";

function AllDonationRequests() {
  const detailsList: hashSet = {
    "1": ["stationary", "Writing Tools", "Pens", "100"],
    "2": ["Canned Food", "Beans", "100"],
    "3": ["SwimSuit", "Adults", "Male", "Winter", "Cotton", "100"],
    "4": ["Equipment", "Syringes", "1000"],
    "5": ["Educational", "6-12", "Male", "Board Games", "50"],
    "6": ["Vegetables", "Tomatoes", "100 KG"],
    "7": ["Coat", "Kids", "Male", "Autumn", "Cotton", "10"],
    "8": ["57357", "Cairo", "Maadi"],
    "9": ["Equipment", "Masks", "1000"],
    "10": ["Dress", "Infants", "Male", "Fall", "Cotton", "90"],
  };
  const viewData = [
    {
      id: "1",
      image: ResalaLogo,
      description: "School Supplies",
      postedby: "Resala Charity Foundation",
      postdate: "25/ 4/2024",
    },
    {
      id: "2",
      image: FoodBank,
      description: "Food Supplies",
      postedby: "Food Bank",
      postdate: "20/3/2023",
    },
    {
      id: "3",
      image: Misrelkheir,
      description: "Clothes",
      postedby: "Misr El Kheir",
      postdate: "29/3/2024",
    },
    {
      id: "4",
      image: RedCresent,
      description: "Medicine Supplies",
      postedby: "Red Cresent",
      postdate: "20/3/2024",
    },
    {
      id: "5",
      image: ChildrenCancer,
      description: "Toys ",
      postedby: "57357",
      postdate: "20/4/2024",
    },
    {
      id: "6",
      image: Orman,
      description: "Food Supplies",
      postedby: "EL Orman",
      postdate: "27/3/2024",
    },
    {
      id: "7",
      image: Turin,
      description: "Clothes",
      postedby: "Turin Organization",
      postdate: "27/3/2024",
    },
    {
      id: "8",
      image: RedCresent,
      description: "Blood Donation",
      postedby: "Red Cresent",
      postdate: "29/3/2024",
    },
    {
      id: "9",
      image: MagdyYakoub,
      description: "Medical Supplies",
      postedby: "Magdy Yakoub Heart Foundation",
      postdate: "29/3/2024",
    },
    {
      id: "10",
      image: ClothingBank,
      description: "Clothes Donation",
      postedby: "Egyptain Clothing Bank",
      postdate: "30/4/2024",
    },
  ];

  const [search, setSearch] = useState("");
  const handleSearch = (written: string) => {
    setSearch(written);
  };
  //responsible for viewing the details of the request
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
      <NavigationBar />
      <ViewPopup trigger={selectedID !== ""} handleClick={handleClosePopUp}>
        <div>
          {detailsList[selectedID] && (
            <ul>
              {detailsList[selectedID].map((item, index) => {
                if (item) {
                  // Check if the item is not undefined or empty
                  return (
                    <p key={index}>
                      {index + 1}. {item}
                    </p>
                  ); // Display with numbering
                }
                return null; // Return null for empty or undefined items
              })}
            </ul>
          )}
        </div>
      </ViewPopup>
      <Headerofsection
        title="All Donation Requests"
        smallDivStyle={{
          display: "flex",
          justifyContent: "space-between",
          width: "100%",
        }}
        children={<Search handleSearch={handleSearch} />}
      />

      <div className="requests-conainer">
        {viewData
          .filter((item) =>
            item.description.toLowerCase().includes(search.toLowerCase()),
          )
          .map((viewData) => (
            <DonationRequestCard
              handleClick={handleLearnMoreClick}
              buttonID={viewData.id}
              key={viewData.id}
              description={viewData.description}
              postedby={viewData.postedby}
              postdate={viewData.postdate}
              image={viewData.image}
            />
          ))}
      </div>
    </>
  );
}

export default AllDonationRequests;
