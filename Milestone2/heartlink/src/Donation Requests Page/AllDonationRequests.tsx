import NavigationBar from "../components/NavigationBar/Donor Navigation Bar/DonorNavigationBar.tsx";
import HeaderOfSection from "../components/header/headerofsection.tsx";
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

function AllDonationRequests() {
  return (
    <>
      <NavigationBar />
      <HeaderOfSection title="All Donation Requests" />
      <div className="requests-conainer">
        <DonationRequestCard
          image={ResalaLogo}
          description="Clothes Supplies"
          postedby="Resala Charity Foundation"
          postdate={"25/4/2024"}
        ></DonationRequestCard>
        <DonationRequestCard
          image={FoodBank}
          description="Food Supplies"
          postedby="Food Bank"
          postdate={"20/3/2023"}
        />
        <DonationRequestCard
          image={Misrelkheir}
          description="Clothes"
          postedby="Misr El Kheir"
          postdate={"29/3/2024"}
        />
        <DonationRequestCard
          image={RedCresent}
          description="Medicine Supplies"
          postedby="Red Cresent"
          postdate={"20/3/2024"}
        />
        <DonationRequestCard
          image={ChildrenCancer}
          description="Toys "
          postedby="57357"
          postdate={"20/4/2024"}
        />
        <DonationRequestCard
          image={Orman}
          description="Food Supplies"
          postedby="EL Orman"
          postdate={"27/3/2024"}
        />
        <DonationRequestCard
          image={Turin}
          description="Clothes"
          postedby="Turin Organization"
          postdate={"27/3/2024"}
        />
        <DonationRequestCard
          image={RedCresent}
          description="Blood Donation"
          postedby="Red Cresent"
          postdate={"29/3/2024"}
        />
        <DonationRequestCard
          image={MagdyYakoub}
          description="Medical Supplies"
          postedby="Magdy Yakoub Heart Foundation"
          postdate={"29/3/2024"}
        />
        <DonationRequestCard
          image={ClothingBank}
          description="Clothes Donation"
          postedby="Egyptain Clothing Bank"
          postdate={"30/4/2024"}
        />
      </div>
    </>
  );
}

export default AllDonationRequests;
