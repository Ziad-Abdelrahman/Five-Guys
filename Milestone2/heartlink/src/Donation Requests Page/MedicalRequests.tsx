import DonorNavigationBar from "../components/NavigationBar/Donor Navigation Bar/DonorNavigationBar.tsx";
import Headerofsection from "../components/header/headerofsection.tsx";
import RequestCard from "../components/Requests Section/RequestCard.tsx";
import ChildrenCancer from "../assets/57357.jpeg";
import RedCresent from "../assets/Redcrescent.png";
import MagdyYakoub from "../assets/MagdyYakoub.png";
import "./AllDonationRequests.css";

function MedicalRequests() {
  return (
    <>
      <DonorNavigationBar />
      <Headerofsection title={"Medical Supplies"} />
      <div className="requests-conainer">
        <RequestCard
          image={ChildrenCancer}
          description="Medical Supplies"
          postedby="57357 Hospital"
          postdate={"5/1/2024"}
        />
        <RequestCard
          image={RedCresent}
          description="Medical Supplies"
          postedby="Red Cresent"
          postdate={"10/2/2024"}
        />
        <RequestCard
          image={ChildrenCancer}
          description="Medical Supplies"
          postedby="57357 Hospital"
          postdate={"25/4/2024"}
        />
        <RequestCard
          image={ChildrenCancer}
          description="Medical Supplies"
          postedby="57357 Hospital"
          postdate={"20/2/2024"}
        />
        <RequestCard
          image={MagdyYakoub}
          description="Medical Supplies"
          postedby="Magdi Yacoub Heart Foundation"
          postdate={"15/3/2024"}
        />
        <RequestCard
          image={MagdyYakoub}
          description="Medical Supplies"
          postedby="Magdi Yacoub Heart Foundation"
          postdate={"10/2/2024"}
        />
        <RequestCard
          image={RedCresent}
          description="Medical Supplies"
          postedby="Red Cresent"
          postdate={"12/2/2024"}
        />
        <RequestCard
          image={MagdyYakoub}
          description="Medical Supplies"
          postedby="Magdi Yacoub Heart Foundation"
          postdate={"12/3/2024"}
        />
        <RequestCard
          image={ChildrenCancer}
          description="57357 Hospital"
          postedby=""
          postdate={"12/4/2024"}
        />
      </div>
    </>
  );
}

export default MedicalRequests;
