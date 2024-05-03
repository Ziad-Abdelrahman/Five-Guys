import DonorNavigationBar from "../components/NavigationBar/Donor Navigation Bar/DonorNavigationBar.tsx";
import Headerofsection from "../components/Header/HeaderOfSection.tsx";
import ChildrenHospital from "../assets/57357.jpeg";
import Turin from "../assets/Turin.jpg";
import ResalaLogo from "../assets/Resala.png";
import "./AllDonationRequests.css";
import DonationRequestCard from "../components/Card/DonationRequestCard.tsx";
import filtericon from "../assets/filter-icon.png";
import FoodDonationFilter from "../components/DonorFilterCard/FoodDonationFilter.tsx";
import ToysDonationFilter from "../components/DonorFilterCard/ToysDonationFilter.tsx";

function ToysRequests() {
  return (
    <>
      <DonorNavigationBar />
      <Headerofsection title={"Toys Requests"} />

      <ToysDonationFilter />

      <div className="requests-conainer">
        <DonationRequestCard
          image={ChildrenHospital}
          description="Toys Donation"
          postedby="57357 "
          postdate={"5/1/2024"}
        />
        <DonationRequestCard
          image={Turin}
          description="Toys Donation"
          postedby="Turin "
          postdate={"5/1/2024"}
        />
        <DonationRequestCard
          image={ResalaLogo}
          description="Toys Donation"
          postedby="Resala"
          postdate={"5/1/2024"}
        />
        <DonationRequestCard
          image={Turin}
          description="Toys Donation"
          postedby="Turin "
          postdate={"5/1/2024"}
        />
        <DonationRequestCard
          image={ChildrenHospital}
          description="Toys Donation"
          postedby="57357 "
          postdate={"5/1/2024"}
        />
        <DonationRequestCard
          image={ChildrenHospital}
          description="Toys Donation"
          postedby="57357 "
          postdate={"5/1/2024"}
        />
        <DonationRequestCard
          image={ResalaLogo}
          description="Toys Donation"
          postedby="Resala "
          postdate={"5/1/2024"}
        />
        <DonationRequestCard
          image={Turin}
          description="Toys Donation"
          postedby="Turin "
          postdate={"5/1/2024"}
        />
      </div>
    </>
  );
}

export default ToysRequests;
