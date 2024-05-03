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
function FoodRequests() {
  const detailsList: hashSet = {
    "1": ["Canned Food", "Beans", "100"],
    "2": ["Canned Food", "Tomato Paste", "50"],
    "3": ["Canned Food", "Corn", "200"],
    "4": ["Fruits", "Apples", "50 KG"],
    "5": ["Fruits", "Bananas", "100 KG"],
    "6": ["Vegetables", "Tomatoes", "100 KG"],
    "7": ["Vegetables", "Potatoes", "100 KG"],
    "8": ["Fresh Meals", "Koshary", "500"],
    "9": ["Fresh Meals", "Molokhia", "300"],
    "10": ["Fresh Meals", "Fattah", "200"],
    "11": ["Baked Goods", "Bread", "160"],
    "12": ["Baked Goods", "Croissant", "50"],
    "13": ["Baked Goods", "Cake", "100"],
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
      <DonorNavigationBar />
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
          buttonID={"1"}
          image={Turin}
          description="Food Donation"
          postedby="57357 Hospital"
          postdate={"5/1/2024"}
          trigger={filter === "All" || filter === "Canned"}
        />
        <DonationRequestCard
          handleClick={handleLearnMoreClick}
          buttonID={"2"}
          image={Turin}
          description="Food Donation"
          postedby="57357 Hospital"
          postdate={"5/1/2024"}
          trigger={filter === "All" || filter === "Canned"}
        />
        <DonationRequestCard
          handleClick={handleLearnMoreClick}
          buttonID={"3"}
          image={FoodBank}
          description="Food Donation"
          postedby="57357 Hospital"
          postdate={"5/1/2024"}
          trigger={filter === "All" || filter === "Canned"}
        />
        <DonationRequestCard
          handleClick={handleLearnMoreClick}
          buttonID={"4"}
          image={Misrelkheir}
          description="Food Donation"
          postedby="57357 Hospital"
          postdate={"5/1/2024"}
          trigger={filter === "All" || filter === "Fruits"}
        />
        <DonationRequestCard
          handleClick={handleLearnMoreClick}
          buttonID={"5"}
          image={FoodBank}
          description="Food Donation"
          postedby="57357 Hospital"
          postdate={"5/1/2024"}
          trigger={filter === "All" || filter === "Fruits"}
        />
        <DonationRequestCard
          handleClick={handleLearnMoreClick}
          buttonID={"6"}
          image={Misrelkheir}
          description="Food Donation"
          postedby="57357 Hospital"
          postdate={"5/1/2024"}
          trigger={filter === "All" || filter === "Vegetables"}
        />
        <DonationRequestCard
          handleClick={handleLearnMoreClick}
          buttonID={"7"}
          image={FoodBank}
          description="Food Donation"
          postedby="Egyptian Food Bank"
          postdate={"5/1/2024"}
          trigger={filter === "All" || filter === "Vegetables"}
        />
        <DonationRequestCard
          handleClick={handleLearnMoreClick}
          buttonID={"8"}
          image={FoodBank}
          description="Food Donation"
          postedby="Egyptian Food Bank"
          postdate={"5/1/2024"}
          trigger={filter === "All" || filter === "FreshMeals"}
        />
        <DonationRequestCard
          handleClick={handleLearnMoreClick}
          buttonID={"9"}
          image={Turin}
          description="Food Donation"
          postedby="Turin"
          postdate={"5/1/2024"}
          trigger={filter === "All" || filter === "FreshMeals"}
        />
        <DonationRequestCard
          handleClick={handleLearnMoreClick}
          buttonID={"10"}
          image={Turin}
          description="Turin"
          postedby="57357 Hospital"
          postdate={"5/1/2024"}
          trigger={filter === "All" || filter === "FreshMeals"}
        />
        <DonationRequestCard
          handleClick={handleLearnMoreClick}
          buttonID={"11"}
          image={Turin}
          description="Food Donation"
          postedby="Turin"
          postdate={"5/1/2024"}
          trigger={filter === "All" || filter === "BakedGoods"}
        />
        <DonationRequestCard
          handleClick={handleLearnMoreClick}
          buttonID={"12"}
          image={Misrelkheir}
          description="Food Donation"
          postedby="MisrElkheir"
          postdate={"5/1/2024"}
          trigger={filter === "All" || filter === "BakedGoods"}
        />
        <DonationRequestCard
          handleClick={handleLearnMoreClick}
          buttonID={"13"}
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
