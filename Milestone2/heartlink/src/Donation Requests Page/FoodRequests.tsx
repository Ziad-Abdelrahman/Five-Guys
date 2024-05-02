import "./AllDonationRequests.css";
import DonorNavigationBar from "../components/NavigationBar/Donor Navigation Bar/DonorNavigationBar.tsx";
import Headerofsection from "../components/header/headerofsection.tsx";
import RequestCard from "../components/Requests Section/RequestCard.tsx";
import FoodBank from "../assets/EgyptianFoodBank.png";
import Misrelkheir from "../assets/Misrelkheir.jpeg";
import Turin from "../assets/Turin.jpg";
function FoodRequests() {
  return (
    <>
      <DonorNavigationBar />
      <Headerofsection title="Food Requests" />
      <div className="requests-conainer">
        <RequestCard
          image={Turin}
          description="Food Donation"
          postedby="57357 Hospital"
          postdate={"5/1/2024"}
        />
        <RequestCard
          image={Turin}
          description="Food Donation"
          postedby="57357 Hospital"
          postdate={"5/1/2024"}
        />
        <RequestCard
          image={FoodBank}
          description="Food Donation"
          postedby="57357 Hospital"
          postdate={"5/1/2024"}
        />
        <RequestCard
          image={Misrelkheir}
          description="Food Donation"
          postedby="57357 Hospital"
          postdate={"5/1/2024"}
        />
        <RequestCard
          image={FoodBank}
          description="Food Donation"
          postedby="57357 Hospital"
          postdate={"5/1/2024"}
        />
        <RequestCard
          image={Misrelkheir}
          description="Food Donation"
          postedby="57357 Hospital"
          postdate={"5/1/2024"}
        />
        <RequestCard
          image={FoodBank}
          description="Food Donation"
          postedby="57357 Hospital"
          postdate={"5/1/2024"}
        />
        <RequestCard
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
