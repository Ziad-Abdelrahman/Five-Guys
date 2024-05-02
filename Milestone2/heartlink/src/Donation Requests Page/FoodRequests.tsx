import "./AllDonationRequests.css";
import DonorNavigationBar from "../components/NavigationBar/Donor Navigation Bar/DonorNavigationBar.tsx";
import Headerofsection from "../components/header/headerofsection.tsx";
import FoodBank from "../assets/EgyptianFoodBank.png";
import Misrelkheir from "../assets/Misrelkheir.jpeg";
import Turin from "../assets/Turin.jpg";
import DonationRequestCard from "../components/Card/DonationRequestCard.tsx";
function FoodRequests() {
  return (
    <>
      <DonorNavigationBar />
      <Headerofsection title="Food Requests" />
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
