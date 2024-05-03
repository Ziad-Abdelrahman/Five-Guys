import "./AllDonationRequests.css";
import DonorNavigationBar from "../components/NavigationBar/Donor Navigation Bar/DonorNavigationBar.tsx";
import Headerofsection from "../components/header/HeaderOfSection.tsx";
import FoodBank from "../assets/EgyptianFoodBank.png";
import Misrelkheir from "../assets/Misrelkheir.jpeg";
import Turin from "../assets/Turin.jpg";
import DonationRequestCard from "../components/Card/DonationRequestCard.tsx";
import filtericon from "../assets/filter-icon.png";
import FoodDonationFilter from "../components/DonorFilterCard/FoodDonationFilter.tsx";
function FoodRequests() {
  return (
    <>
      <DonorNavigationBar />
      <Headerofsection title="Food Requests" />
      <div className="filters-container">
        <div className="filters-label">
          <img src={filtericon} alt="Filter Icon" className="filter-icon" />
          <strong>Filters</strong>
        </div>
        <FoodDonationFilter />
      </div>

      <div className="requests-conainer">
        <DonationRequestCard
          image={Turin}
          description="Food Donation"
          postedby="57357 Hospital"
          postdate={"5/1/2024"}
        />
        <DonationRequestCard
          image={Turin}
          description="Food Donation"
          postedby="57357 Hospital"
          postdate={"5/1/2024"}
        />
        <DonationRequestCard
          image={FoodBank}
          description="Food Donation"
          postedby="57357 Hospital"
          postdate={"5/1/2024"}
        />
        <DonationRequestCard
          image={Misrelkheir}
          description="Food Donation"
          postedby="57357 Hospital"
          postdate={"5/1/2024"}
        />
        <DonationRequestCard
          image={FoodBank}
          description="Food Donation"
          postedby="57357 Hospital"
          postdate={"5/1/2024"}
        />
        <DonationRequestCard
          image={Misrelkheir}
          description="Food Donation"
          postedby="57357 Hospital"
          postdate={"5/1/2024"}
        />
        <DonationRequestCard
          image={FoodBank}
          description="Food Donation"
          postedby="57357 Hospital"
          postdate={"5/1/2024"}
        />
        <DonationRequestCard
          image={Turin}
          description="Food Donation"
          postedby="57357 Hospital"
          postdate={"5/1/2024"}
        />
      </div>
    </>
  );
}

export default FoodRequests;
