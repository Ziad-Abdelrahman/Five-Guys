import Clothingbank from "../assets/Clothingbank.png";
import filtericon from "../assets/filter-icon.png";
import Orman from "../assets/Orman.png";
import Turin from "../assets/Turin.jpg";
import ResalaLogo from "../assets/Resala.png";
import "./AllDonationRequests.css";
import DonorNavigationBar from "../components/NavigationBar/Donor Navigation Bar/DonorNavigationBar.tsx";
import Headerofsection from "../components/Header/HeaderOfSection.tsx";
import SchoolSuppliesFilter from "../components/DonorFilterCard/SchoolSuppliesFilter.tsx";
import DonationRequestCard from "../components/Card/DonationRequestCard.tsx";

function SchoolSuppliesRequests() {
  return (
    <>
      <DonorNavigationBar />
      <Headerofsection title={"School Supplies Requests"} />
      <div className="filters-container">
        <div className="filters-label">
          <img src={filtericon} alt="Filter Icon" className="filter-icon" />
          <strong>Filters</strong>
        </div>
        <SchoolSuppliesFilter />
      </div>

      <div className="requests-conainer">
        <DonationRequestCard
          image={Clothingbank}
          description=" School Supplies Donation"
          postedby="Dar Al Orman "
          postdate={"5/1/2024"}
        />
        <DonationRequestCard
          image={Orman}
          description="School Supplies Donation"
          postedby="Dar Al Orman "
          postdate={"5/1/2024"}
        />
        <DonationRequestCard
          image={Turin}
          description="School Supplies Donation"
          postedby="Turin "
          postdate={"5/1/2024"}
        />
        <DonationRequestCard
          image={ResalaLogo}
          description="School Supplies Donation"
          postedby="Resala"
          postdate={"5/1/2024"}
        />
        <DonationRequestCard
          image={Turin}
          description="School Supplies Donation"
          postedby="Turin "
          postdate={"5/1/2024"}
        />
        <DonationRequestCard
          image={Orman}
          description="School Supplies Donation"
          postedby="Dar Al Orman "
          postdate={"5/1/2024"}
        />
        <DonationRequestCard
          image={Orman}
          description="School Supplies Donation"
          postedby="Dar Al Orman "
          postdate={"5/1/2024"}
        />
        <DonationRequestCard
          image={ResalaLogo}
          description="School Supplies Donation"
          postedby="Resala "
          postdate={"5/1/2024"}
        />
        <DonationRequestCard
          image={ResalaLogo}
          description="School Supplies Donation"
          postedby="Resala "
          postdate={"5/1/2024"}
        />
        <DonationRequestCard
          image={Clothingbank}
          description="School Supplies Donation"
          postedby="Resala "
          postdate={"5/1/2024"}
        />
      </div>
    </>
  );
}

export default SchoolSuppliesRequests;
