import "./AllDonationRequests.css";
import DonorNavigationBar from "../components/NavigationBar/Donor Navigation Bar/DonorNavigationBar.tsx";
import Headerofsection from "../components/Header/HeaderOfSection.tsx";
import FoodBank from "../assets/EgyptianFoodBank.png";
import Misrelkheir from "../assets/Misrelkheir.jpeg";
import Turin from "../assets/Turin.jpg";
import DonationRequestCard from "../components/Card/DonationRequestCard.tsx";
import filtericon from "../assets/filter-icon.png";
import FoodDonationFilter from "../components/DonorFilterCard/FoodDonationFilter.tsx";
import hashSet from "../hashSet";
import { useState } from "react";
import ViewPopup from "../components/View Request Popup/ViewPopup.tsx";
interface FoodRequestsProps {
  type?: string;
}
function FoodRequests({ type }: FoodRequestsProps) {
  const detailsList: hashSet = {
    "24": ["Canned Food", "Beans", "100"],
    "25": ["Canned Food", "Tomato Paste", "50"],
    "26": ["Canned Food", "Corn", "200"],
    "27": ["Fruits", "Apples", "50 KG"],
    "28": ["Fruits", "Bananas", "100 KG"],
    "29": ["Vegetables", "Tomatoes", "100 KG"],
    "30": ["Vegetables", "Potatoes", "100 KG"],
    "31": ["Fresh Meals", "Koshary", "500"],
    "32": ["Fresh Meals", "Molokhia", "300"],
    "33": ["Fresh Meals", "Fattah", "200"],
    "34": ["Baked Goods", "Bread", "160"],
    "35": ["Baked Goods", "Croissant", "50"],
    "36": ["Baked Goods", "Cake", "100"],
  };
  //responsible for filtering the requests
  let [filter, setFilter] = useState("All");
  //function responsible to handle the filter change
  function handleFilterChange(filter: string) {
    setFilter(filter);
  }

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
      <DonorNavigationBar type={type} />
      <ViewPopup trigger={selectedID != ""} handleClick={handleClosePopUp}>
        <div>
          {detailsList[selectedID] && (
            <ul>
              <li>Food Type: {detailsList[selectedID][0]}</li>
              <br />
              <li>Name: {detailsList[selectedID][1]}</li>
              <br />
              <li>Quantity: {detailsList[selectedID][2]}</li>
            </ul>
          )}
        </div>
      </ViewPopup>
      <Headerofsection title="Food Requests" />
      <div className="filters-container">
        <div className="filters-label">
          <img src={filtericon} alt="Filter Icon" className="filter-icon" />
          <strong>Filters</strong>
        </div>
        <FoodDonationFilter filterChange={handleFilterChange} />
      </div>

      <div className="requests-conainer">
        <DonationRequestCard
          handleClick={handleLearnMoreClick}
          buttonID={"24"}
          image={Turin}
          description="Food Donation"
          postedby="57357 Hospital"
          postdate={"5/1/2024"}
          trigger={filter === "All" || filter === "Canned"}
        />
        <DonationRequestCard
          handleClick={handleLearnMoreClick}
          buttonID={"25"}
          image={Turin}
          description="Food Donation"
          postedby="57357 Hospital"
          postdate={"5/1/2024"}
          trigger={filter === "All" || filter === "Canned"}
        />
        <DonationRequestCard
          handleClick={handleLearnMoreClick}
          buttonID={"26"}
          image={FoodBank}
          description="Food Donation"
          postedby="57357 Hospital"
          postdate={"5/1/2024"}
          trigger={filter === "All" || filter === "Canned"}
        />
        <DonationRequestCard
          handleClick={handleLearnMoreClick}
          buttonID={"27"}
          image={Misrelkheir}
          description="Food Donation"
          postedby="57357 Hospital"
          postdate={"5/1/2024"}
          trigger={filter === "All" || filter === "Fruits"}
        />
        <DonationRequestCard
          handleClick={handleLearnMoreClick}
          buttonID={"28"}
          image={FoodBank}
          description="Food Donation"
          postedby="57357 Hospital"
          postdate={"5/1/2024"}
          trigger={filter === "All" || filter === "Fruits"}
        />
        <DonationRequestCard
          handleClick={handleLearnMoreClick}
          buttonID={"29"}
          image={Misrelkheir}
          description="Food Donation"
          postedby="57357 Hospital"
          postdate={"5/1/2024"}
          trigger={filter === "All" || filter === "Vegetables"}
        />
        <DonationRequestCard
          handleClick={handleLearnMoreClick}
          buttonID={"30"}
          image={FoodBank}
          description="Food Donation"
          postedby="Egyptian Food Bank"
          postdate={"5/1/2024"}
          trigger={filter === "All" || filter === "Vegetables"}
        />
        <DonationRequestCard
          handleClick={handleLearnMoreClick}
          buttonID={"31"}
          image={FoodBank}
          description="Food Donation"
          postedby="Egyptian Food Bank"
          postdate={"5/1/2024"}
          trigger={filter === "All" || filter === "FreshMeals"}
        />
        <DonationRequestCard
          handleClick={handleLearnMoreClick}
          buttonID={"32"}
          image={Turin}
          description="Food Donation"
          postedby="Turin"
          postdate={"5/1/2024"}
          trigger={filter === "All" || filter === "FreshMeals"}
        />
        <DonationRequestCard
          handleClick={handleLearnMoreClick}
          buttonID={"33"}
          image={Turin}
          description="Turin"
          postedby="57357 Hospital"
          postdate={"5/1/2024"}
          trigger={filter === "All" || filter === "FreshMeals"}
        />
        <DonationRequestCard
          handleClick={handleLearnMoreClick}
          buttonID={"34"}
          image={Turin}
          description="Food Donation"
          postedby="Turin"
          postdate={"5/1/2024"}
          trigger={filter === "All" || filter === "BakedGoods"}
        />
        <DonationRequestCard
          handleClick={handleLearnMoreClick}
          buttonID={"35"}
          image={Misrelkheir}
          description="Food Donation"
          postedby="MisrElkheir"
          postdate={"5/1/2024"}
          trigger={filter === "All" || filter === "BakedGoods"}
        />
        <DonationRequestCard
          handleClick={handleLearnMoreClick}
          buttonID={"36"}
          image={Turin}
          description="Food Donation"
          postedby="Turin"
          postdate={"5/1/2024"}
          trigger={filter === "All" || filter === "BakedGoods"}
        />
      </div>
    </>
  );
}

export default FoodRequests;
