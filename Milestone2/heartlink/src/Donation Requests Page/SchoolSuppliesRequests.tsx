import Clothingbank from "../assets/Clothingbank.png";
import filtericon from "../assets/filter-icon.png";
import Orman from "../assets/Orman.png";
import Turin from "../assets/Turin.jpg";
import ResalaLogo from "../assets/Resala.png";
import "./AllDonationRequests.css";
import DonorNavigationBar from "../components/NavigationBar/Donor Navigation Bar/DonorNavigationBar.tsx";
import Headerofsection from "../components/Header/HeaderOfSection.tsx";
import SchoolSuppliesFilter from "../components/DonorFilterCard/SchoolSuppliesFilter.tsx";
import DonationRequestCard from "../components/Card/DonationRequestCard.tsx";
import ViewPopup from "../components/View Request Popup/ViewPopup.tsx";
import GreatGatsby from "../assets/the_great_gatspy.jpg";
import DataBase from "../assets/DatabaseBook1.jpeg";
import HforHope from "../assets/book1.jpeg";
import Mocking from "../assets/toKillMockingBird.webp";
import { useState } from "react";
import hashSet from "../hashSet";

interface SchoolSuppliesRequestsProps {
  type?: string;
}

function SchoolSuppliesRequests({ type }: SchoolSuppliesRequestsProps) {
  const detailsList: hashSet = {
    "60": ["Stationary", "Writing Tools", "Pens", "100"],
    "61": [
      "Books",
      "H for hope",
      "Elizabeth Kolbert",
      "English",
      "First",
      "This book is for a child who is in need of hope and inspiration.",
      "50",
    ],
    "62": ["Stationary", "Writing Tools", "Pencils", "200"],
    "63": ["Stationary", "Paper Products", "Copybooks", "100"],
    "64": ["Stationary", "Paper Products", "Notebooks", "100"],
    "65": [
      "Books",
      "To Kill a Mockingbird",
      "Harper Lee",
      "English",
      "First",
      "A powerful story of racial injustice and moral growth in the American South.",
      "50",
    ],
    "66": [
      "Books",
      "The Great Gatsby",
      "F. Scott Fitzgerald",
      "English",
      "1st",
      "A classic novel depicting the roaring twenties in America.",
      "50",
    ],
    "67": ["Stationary", "Writing Tools", "Erasers", "100"],
    "68": [
      "Books",
      "DATABASE SYSTEMS",
      "Ullman",
      "English",
      "Second",
      "This books explains dbms",
      "50",
    ],
    "69": ["Stationary", "Paper Products", "Sticky Notes", "100"],
  };
  //responsible for filtering the requests
  const [filter, setFilter] = useState("All");

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

  //function responsible to handle the filter change
  function handleFilterChange(filter: string) {
    setFilter(filter);
  }

  return (
    <>
      <DonorNavigationBar type={type} />
      {selectedID != "" && (
        <ViewPopup trigger={selectedID != ""} handleClick={handleClosePopUp}>
          {detailsList[selectedID][0] == "Stationary" && (
            <div>
              {detailsList[selectedID] && (
                <ul>
                  <li>Type: {detailsList[selectedID][0]}</li>
                  <br />
                  <li>Category: {detailsList[selectedID][1]}</li>
                  <br />
                  <li>Item: {detailsList[selectedID][2]}</li>
                  <br />
                  <li>Quantity: {detailsList[selectedID][3]}</li>
                </ul>
              )}
            </div>
          )}
          {detailsList[selectedID][0] == "Books" && (
            <div style={{ display: "flex", justifyContent: "space-between" }}>
              {detailsList[selectedID] && (
                <ul style={{ width: "340px" }}>
                  <li>Type: {detailsList[selectedID][0]}</li>
                  <li>Book name: {detailsList[selectedID][1]}</li>
                  <li>Author name: {detailsList[selectedID][2]}</li>
                  <li>language: {detailsList[selectedID][3]}</li>
                  <li>edition: {detailsList[selectedID][4]}</li>
                  <li>summary: {detailsList[selectedID][5]}</li>
                </ul>
              )}
              {selectedID == "61" && (
                <img
                  style={{ width: "20%", height: "14%" }}
                  src={HforHope}
                  alt="H for hope"
                />
              )}
              {selectedID == "65" && (
                <img
                  style={{ width: "20%", height: "14%" }}
                  src={Mocking}
                  alt="Mocking"
                />
              )}
              {selectedID == "66" && (
                <img
                  style={{ width: "20%", height: "14%" }}
                  src={GreatGatsby}
                  alt="The Great Gatsby"
                />
              )}
              {selectedID == "68" && (
                <img
                  style={{ width: "20%", height: "14%" }}
                  src={DataBase}
                  alt={"DataBase"}
                />
              )}
            </div>
          )}
        </ViewPopup>
      )}
      <Headerofsection title={"School Supplies Requests"} />
      <div className="filters-container">
        <div className="filters-label">
          <img src={filtericon} alt="Filter Icon" className="filter-icon" />
          <strong>Filters</strong>
        </div>

        {/*filter component*/}
        <SchoolSuppliesFilter
          filterChange={handleFilterChange}
          buttonName1={"All"}
          buttonName2={"Stationary"}
          buttonName3={"Books"}
        />
      </div>

      <div className="requests-conainer">
        <DonationRequestCard
          image={Clothingbank}
          description=" School Supplies Donation"
          postedby="Egyptian Clothing Bank "
          postdate={"5/1/2024"}
          handleClick={handleLearnMoreClick}
          buttonID={"60"}
          trigger={filter === "All" || filter === "Stationary"}
        />
        <DonationRequestCard
          image={Orman}
          description="School Supplies Donation"
          postedby="Dar Al Orman "
          postdate={"5/1/2024"}
          handleClick={handleLearnMoreClick}
          buttonID={"61"}
          trigger={filter === "All" || filter === "Books"}
        />
        <DonationRequestCard
          image={Turin}
          description="School Supplies Donation"
          postedby="Turin "
          postdate={"5/1/2024"}
          handleClick={handleLearnMoreClick}
          buttonID={"62"}
          trigger={filter === "All" || filter === "Stationary"}
        />
        <DonationRequestCard
          image={ResalaLogo}
          description="School Supplies Donation"
          postedby="Resala"
          postdate={"5/1/2024"}
          handleClick={handleLearnMoreClick}
          buttonID={"63"}
          trigger={filter === "All" || filter === "Stationary"}
        />
        <DonationRequestCard
          image={Turin}
          description="School Supplies Donation"
          postedby="Turin "
          postdate={"5/1/2024"}
          handleClick={handleLearnMoreClick}
          buttonID={"64"}
          trigger={filter === "All" || filter === "Stationary"}
        />
        <DonationRequestCard
          image={Orman}
          description="School Supplies Donation"
          postedby="Dar Al Orman "
          postdate={"5/1/2024"}
          handleClick={handleLearnMoreClick}
          buttonID={"65"}
          trigger={filter === "All" || filter === "Books"}
        />
        <DonationRequestCard
          image={Orman}
          description="School Supplies Donation"
          postedby="Dar Al Orman "
          postdate={"5/1/2024"}
          handleClick={handleLearnMoreClick}
          buttonID={"66"}
          trigger={filter === "All" || filter === "Books"}
        />
        <DonationRequestCard
          image={ResalaLogo}
          description="School Supplies Donation"
          postedby="Resala "
          postdate={"5/1/2024"}
          handleClick={handleLearnMoreClick}
          buttonID={"67"}
          trigger={filter === "All" || filter === "Stationary"}
        />
        <DonationRequestCard
          image={ResalaLogo}
          description="School Supplies Donation"
          postedby="Resala "
          postdate={"5/1/2024"}
          handleClick={handleLearnMoreClick}
          buttonID={"68"}
          trigger={filter === "All" || filter === "Books"}
        />
        <DonationRequestCard
          image={Clothingbank}
          description="School Supplies Donation"
          postedby="Egyptian Clothing Bank "
          postdate={"5/1/2024"}
          handleClick={handleLearnMoreClick}
          buttonID={"69"}
          trigger={filter === "All" || filter === "Stationary"}
        />
      </div>
    </>
  );
}

export default SchoolSuppliesRequests;
