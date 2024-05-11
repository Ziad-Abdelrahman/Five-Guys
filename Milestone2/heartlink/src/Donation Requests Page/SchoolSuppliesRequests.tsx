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
import { useState } from "react";
import hashSet from "../hashSet";

interface SchoolSuppliesRequestsProps {
  type?: string;
}

function SchoolSuppliesRequests({ type }: SchoolSuppliesRequestsProps) {
  const detailsList: hashSet = {
    "60": ["stationary", "Writing Tools", "Pens", "100"],
    "61": ["books", "Textbooks", "Math", "50"],
    "62": ["Stationary", "Writing Tools", "Pencils", "200"],
    "63": ["Stationary", "Paper Products", "Copybooks", "100"],
    "64": ["Stationary", "Paper Products", "Notebooks", "100"],
    "65": ["Books", "Textbooks", "Science", "50"],
    "66": ["Books", "Textbooks", "English", "50"],
    "67": ["Stationary", "Writing Tools", "Erasers", "100"],
    "68": ["Books", "Textbooks", "History", "50"],
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
      <ViewPopup trigger={selectedID != ""} handleClick={handleClosePopUp}>
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
      </ViewPopup>
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
