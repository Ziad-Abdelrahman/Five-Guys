import DonorNavigationBar from "../components/NavigationBar/Donor Navigation Bar/DonorNavigationBar.tsx";
import Headerofsection from "../components/header/headerofsection.tsx";
import RequestCard from "../components/Requests Section/RequestCard.tsx";
import ChildrenHospital from "../assets/57357.jpeg";
import Turin from "../assets/Turin.jpg";
import ResalaLogo from "../assets/Resala.png";
import "./AllDonationRequests.css";

function ToysRequests() {
  return (
    <>
      <DonorNavigationBar />
      <Headerofsection title={"Toys Requests"} />
      <div className="requests-conainer">
        <RequestCard
          image={ChildrenHospital}
          description="Toys Donation"
          postedby="57357 "
          postdate={"5/1/2024"}
        />
        <RequestCard
          image={Turin}
          description="Toys Donation"
          postedby="Turin "
          postdate={"5/1/2024"}
        />
        <RequestCard
          image={ResalaLogo}
          description="Toys Donation"
          postedby="Resala"
          postdate={"5/1/2024"}
        />
        <RequestCard
          image={Turin}
          description="Toys Donation"
          postedby="Turin "
          postdate={"5/1/2024"}
        />
        <RequestCard
          image={ChildrenHospital}
          description="Toys Donation"
          postedby="57357 "
          postdate={"5/1/2024"}
        />
        <RequestCard
          image={ChildrenHospital}
          description="Toys Donation"
          postedby="57357 "
          postdate={"5/1/2024"}
        />
        <RequestCard
          image={ResalaLogo}
          description="Toys Donation"
          postedby="Resala "
          postdate={"5/1/2024"}
        />
        <RequestCard
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
