import Clothingbank from "../assets/Clothingbank.png";
import filtericon from "../assets/filter-icon.png";
import Orman from "../assets/Orman.png";
import Turin from "../assets/Turin.jpg";
import ResalaLogo from "../assets/Resala.png";
import "./AllDonationRequests.css";
import DonorNavigationBar from "../components/NavigationBar/Donor Navigation Bar/DonorNavigationBar.tsx";
import Headerofsection from "../components/header/headerofsection.tsx";
import SchoolSuppliesFilter from "../components/DonorFilterCard/SchoolSuppliesFilter.tsx";
import DonationRequestCard from "../components/Card/DonationRequestCard.tsx";
import ViewPopup from "../components/View Request Popup/ViewPopup.tsx";
function SchoolSuppliesRequests() {
  const detailsList: hashSet = {
    "1": ["stationary", "Writing Tools", "Pens", "100"],
    "2": ["books", "Textbooks", "Math", "50"],
    "3": ["Stationary", "Writing Tools", "Pencils", "200"],
    "4": ["Stationary", "Paper Products", "Copybooks", "100"],
    "5": ["Stationary", "Paper Products", "Notebooks", "100"],
    "6": ["Books", "Textbooks", "Science", "50"],
    "7": ["Books", "Textbooks", "English", "50"],
    "8": ["Stationary", "Writing Tools", "Erasers", "100"],
    "9": ["Books", "Textbooks", "History", "50"],
    "10": ["Stationary", "Paper Products", "Sticky Notes", "100"],
  };
  //responsible for filtering the requests
  let [filter, setFilter] = useState("All");

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
      <DonorNavigationBar />
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
        <SchoolSuppliesFilter filterChange={handleFilterChange} />
      </div>

      <div className="requests-conainer">
        <DonationRequestCard
          image={Clothingbank}
          description=" School Supplies Donation"
          postedby="Dar Al Orman "
          postdate={"5/1/2024"}
          handleClick={handleLearnMoreClick}
          buttonID={"1"}
          trigger={filter === "All" || filter === "Stationary"}
        />
        <DonationRequestCard
          image={Orman}
          description="School Supplies Donation"
          postedby="Dar Al Orman "
          postdate={"5/1/2024"}
          handleClick={handleLearnMoreClick}
          buttonID={"2"}
          trigger={filter === "All" || filter === "Books"}
        />
        <DonationRequestCard
          image={Turin}
          description="School Supplies Donation"
          postedby="Turin "
          postdate={"5/1/2024"}
          handleClick={handleLearnMoreClick}
          buttonID={"3"}
          trigger={filter === "All" || filter === "Stationary"}
        />
        <DonationRequestCard
          image={ResalaLogo}
          description="School Supplies Donation"
          postedby="Resala"
          postdate={"5/1/2024"}
          handleClick={handleLearnMoreClick}
          buttonID={"4"}
          trigger={filter === "All" || filter === "Stationary"}
        />
        <DonationRequestCard
          image={Turin}
          description="School Supplies Donation"
          postedby="Turin "
          postdate={"5/1/2024"}
          handleClick={handleLearnMoreClick}
          buttonID={"5"}
          trigger={filter === "All" || filter === "Stationary"}
        />
        <DonationRequestCard
          image={Orman}
          description="School Supplies Donation"
          postedby="Dar Al Orman "
          postdate={"5/1/2024"}
          handleClick={handleLearnMoreClick}
          buttonID={"6"}
          trigger={filter === "All" || filter === "Books"}
        />
        <DonationRequestCard
          image={Orman}
          description="School Supplies Donation"
          postedby="Dar Al Orman "
          postdate={"5/1/2024"}
          handleClick={handleLearnMoreClick}
          buttonID={"7"}
          trigger={filter === "All" || filter === "Books"}
        />
        <DonationRequestCard
          image={ResalaLogo}
          description="School Supplies Donation"
          postedby="Resala "
          postdate={"5/1/2024"}
          handleClick={handleLearnMoreClick}
          buttonID={"8"}
          trigger={filter === "All" || filter === "Stationary"}
        />
        <DonationRequestCard
          image={ResalaLogo}
          description="School Supplies Donation"
          postedby="Resala "
          postdate={"5/1/2024"}
          handleClick={handleLearnMoreClick}
          buttonID={"9"}
          trigger={filter === "All" || filter === "Books"}
        />
        <DonationRequestCard
          image={Clothingbank}
          description="School Supplies Donation"
          postedby="Resala "
          postdate={"5/1/2024"}
          handleClick={handleLearnMoreClick}
          buttonID={"10"}
          trigger={filter === "All" || filter === "Stationary"}
        />
      </div>
    </>
  );
}
import { useState } from "react";

import hashSet from "../hashSet";

export default SchoolSuppliesRequests;
