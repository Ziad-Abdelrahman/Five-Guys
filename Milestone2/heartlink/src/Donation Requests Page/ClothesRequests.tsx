import "./AllDonationRequests.css";
import ResalaLogo from "../assets/Resala.png";
import Turin from "../assets/Turin.jpg";
import Orman from "../assets/Orman.png";
import Clothingbank from "../assets/Clothingbank.png";
import RequestCard from "../components/Requests Section/RequestCard.tsx";
import DonorNavigationBar from "../components/NavigationBar/Donor Navigation Bar/DonorNavigationBar.tsx";
import Headerofsection from "../components/header/headerofsection.tsx";

function ClothesRequests() {
  return (
    <>
      <DonorNavigationBar />
      <Headerofsection title={"Clothes Requests"} />
      <div className="requests-conainer">
        <RequestCard
          image={Clothingbank}
          description="Clothes Donation"
          postedby="Egyptian Clothing Bank "
          postdate={"5/1/2024"}
        />
        <RequestCard
          image={Orman}
          description="Clothes Donation"
          postedby="Dar Al Orman "
          postdate={"5/1/2024"}
        />
        <RequestCard
          image={Turin}
          description="Clothes Donation"
          postedby="Turin "
          postdate={"5/1/2024"}
        />
        <RequestCard
          image={ResalaLogo}
          description="Clothes Donation"
          postedby="Resala"
          postdate={"5/1/2024"}
        />
        <RequestCard
          image={Turin}
          description="Clothes Donation"
          postedby="Turin "
          postdate={"5/1/2024"}
        />
        <RequestCard
          image={Orman}
          description="Clothes Donation"
          postedby="Dar Al Orman "
          postdate={"5/1/2024"}
        />
        <RequestCard
          image={Orman}
          description="Clothes Donation"
          postedby="Dar Al Orman "
          postdate={"5/1/2024"}
        />
        <RequestCard
          image={ResalaLogo}
          description="Clothes Donation"
          postedby="Resala "
          postdate={"5/1/2024"}
        />
        <RequestCard
          image={ResalaLogo}
          description="Clothes Donation"
          postedby="Resala "
          postdate={"5/1/2024"}
        />
        <RequestCard
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
