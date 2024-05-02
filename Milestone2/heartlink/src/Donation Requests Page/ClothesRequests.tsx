import "./AllDonationRequests.css";
import ResalaLogo from "../assets/Resala.png";
import Turin from "../assets/Turin.jpg";
import Orman from "../assets/Orman.png";
import Clothingbank from "../assets/Clothingbank.png";
import DonorNavigationBar from "../components/NavigationBar/Donor Navigation Bar/DonorNavigationBar.tsx";
import Headerofsection from "../components/header/headerofsection.tsx";
import DonationRequestCard from "../components/Card/DonationRequestCard.tsx";

function ClothesRequests() {
  return (
    <>
      <DonorNavigationBar />
      <Headerofsection title={"Clothes Requests"} />
      <div className="requests-conainer">
        <DonationRequestCard
          image={Clothingbank}
          description="Clothes Donation"
          postedby="Egyptian Clothing Bank "
          postdate={"5/1/2024"}
        />
        <DonationRequestCard
          image={Orman}
          description="Clothes Donation"
          postedby="Dar Al Orman "
          postdate={"5/1/2024"}
        />
        <DonationRequestCard
          image={Turin}
          description="Clothes Donation"
          postedby="Turin "
          postdate={"5/1/2024"}
        />
        <DonationRequestCard
          image={ResalaLogo}
          description="Clothes Donation"
          postedby="Resala"
          postdate={"5/1/2024"}
        />
        <DonationRequestCard
          image={Turin}
          description="Clothes Donation"
          postedby="Turin "
          postdate={"5/1/2024"}
        />
        <DonationRequestCard
          image={Orman}
          description="Clothes Donation"
          postedby="Dar Al Orman "
          postdate={"5/1/2024"}
        />
        <DonationRequestCard
          image={Orman}
          description="Clothes Donation"
          postedby="Dar Al Orman "
          postdate={"5/1/2024"}
        />
        <DonationRequestCard
          image={ResalaLogo}
          description="Clothes Donation"
          postedby="Resala "
          postdate={"5/1/2024"}
        />
        <DonationRequestCard
          image={ResalaLogo}
          description="Clothes Donation"
          postedby="Resala "
          postdate={"5/1/2024"}
        />
        <DonationRequestCard
          image={Clothingbank}
          description="Egyptian Clothing Bank"
          postedby="Resala "
          postdate={"5/1/2024"}
        />
      </div>
    </>
  );
}

export default ClothesRequests;
