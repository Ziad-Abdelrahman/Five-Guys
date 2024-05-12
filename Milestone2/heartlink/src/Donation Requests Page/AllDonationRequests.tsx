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
import Toy from "../assets/toyexample.png";
import Ventilator from "../assets/medicaltool.png";

interface DonationProps {
  type?: string;
}
function AllDonationRequests({ type }: DonationProps) {
  const detailsList: hashSet = {
    "14": [
      "Category: Stationary",
      "Type: Writing Tools",
      "Item: Pens",
      "Quantity: 100",
    ],
    "15": ["Category: Canned Food", "Item: Beans", "Quantity: 100"],
    "16": [
      "Category: Swimwear",
      "Type: SwimSuit",
      "Gender: Male",
      "Season: Winter",
      "Material: Cotton",
      "Quantity: 100",
    ],
    "17": ["Category: Medical Equipment", "Item: Syringes", "Quantity: 1000"],
    "18": [
      "Category: Educational",
      "Age Group: 6-12",
      "Gender: Male",
      "Item: Board Games",
      "Quantity: 50",
    ],
    "19": ["Category: Vegetables", "Item: Tomatoes", "Quantity: 100 KG"],
    "20": [
      "Category: Clothing",
      "Type: Coat",
      "Gender: Kids",
      "Season: Autumn",
      "Material: Cotton",
      "Quantity: 10",
    ],
    "21": [
      "Name: Abdallah",
      "Blood Type: B+",
      "Category: Charity Organization",
      "Organization: Red Crescent",
      "Location: Cairo, Maadi",
    ],
    "22": ["Category: Medical Equipment", "Item: Masks", "Quantity: 1000"],
    "23": [
      "Category: Clothing",
      "Type: Dress",
      "Gender: Infants",
      "Season: Fall",
      "Material: Cotton",
      "Quantity: 90",
    ],
  };
  const viewData = [
    {
      id: "14",
      image: ResalaLogo,
      description: "School Supplies",
      postedby: "Resala Charity Foundation",
      postdate: "25/ 4/2024",
    },
    {
      id: "15",
      image: FoodBank,
      description: "Food Supplies",
      postedby: "Food Bank",
      postdate: "20/3/2023",
    },
    {
      id: "16",
      image: Misrelkheir,
      description: "Clothes",
      postedby: "Misr El Kheir",
      postdate: "29/3/2024",
    },
    {
      id: "17",
      image: RedCresent,
      description: "Medicine Supplies",
      postedby: "Red Cresent",
      postdate: "20/3/2024",
      sampleimage: Ventilator,
    },
    {
      id: "18",
      image: ChildrenCancer,
      description: "Toys ",
      postedby: "57357",
      postdate: "20/4/2024",
      sampleimage: Toy,
    },
    {
      id: "19",
      image: Orman,
      description: "Food Supplies",
      postedby: "EL Orman",
      postdate: "27/3/2024",
    },
    {
      id: "20",
      image: Turin,
      description: "Clothes",
      postedby: "Turin Organization",
      postdate: "27/3/2024",
    },
    {
      id: "21",
      image: RedCresent,
      description: "Blood Donation",
      postedby: "Red Cresent",
      postdate: "29/3/2024",
      iframeSrc: (
        <div style={{ width: "100%" }}>
          <iframe
            width="95%"
            height="100"
            src="https://maps.google.com/maps?width=100%25&amp;height=200&amp;hl=en&amp;q=30.075198104444514,%2031.346477893798525+(Red%20Crescent)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
          >
            <a href="https://www.gps.ie/">gps vehicle tracker</a>
          </iframe>
        </div>
      ),
    },
    {
      id: "22",
      image: MagdyYakoub,
      description: "Medical Equipment",
      postedby: "Magdy Yakoub Heart Foundation",
      postdate: "29/3/2024",
      sampleimage: Ventilator,
    },
    {
      id: "23",
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
      <NavigationBar type={type} />
      <ViewPopup trigger={selectedID !== ""} handleClick={handleClosePopUp}>
        <div>
          {detailsList[selectedID] && (
            <ul>
              {detailsList[selectedID].map((item, index) => {
                if (item) {
                  // Check if the item is not undefined or empty
                  return <li key={index}>{item}</li>; // Display with numbering
                }
                return null; // Return null for empty or undefined items
              })}
            </ul>
          )}
          {viewData.find((item) => item.id === selectedID)?.iframeSrc && (
            <div>
              {viewData.find((item) => item.id === selectedID)?.iframeSrc}
            </div>
          )}
          {viewData.find((item) => item.id === selectedID)?.sampleimage && (
            <img
              src={viewData.find((item) => item.id === selectedID)?.sampleimage}
              alt="Example"
              style={{ width: "30%" }}
            />
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
              showDonateButton={viewData.description != "Blood Donation"}
            />
          ))}
      </div>
    </>
  );
}

export default AllDonationRequests;
