import RedCresent from "../assets/Redcrescent.png";
import MagdyYakoub from "../assets/MagdyYakoub.png";
import ChildrenCancer from "../assets/57357.jpeg";
import "./AllDonationRequests.css";
import DonorNavigationBar from "../components/NavigationBar/Donor Navigation Bar/DonorNavigationBar.tsx";
import Headerofsection from "../components/header/headerofsection.tsx";
import RequestCard from "../components/Requests Section/RequestCard.tsx";
import Popup from "../components/View Request Popup/ViewPopup.tsx";
// import { useState } from "react";

function BloodRequests() {
  return (
    <>
      <DonorNavigationBar />
      <Headerofsection title={"Blood Requests"} />

      <div className="requests-conainer">
        <Popup trigger={false}></Popup>
        <RequestCard
          buttonid={"1"}
          image={ChildrenCancer}
          description="Blood Donation"
          postedby="57357 Hospital"
          postdate={"5/1/2024"}
        />
        <RequestCard
          buttonid={"2"}
          image={RedCresent}
          description="Blood Donation"
          postedby="Red Cresent"
          postdate={"10/2/2024"}
        />
        <RequestCard
          buttonid={"3"}
          image={ChildrenCancer}
          description="Blood Donation"
          postedby="57357 Hospital"
          postdate={"25/4/2024"}
        />
        <RequestCard
          buttonid={"4"}
          image={ChildrenCancer}
          description="Blood Donation"
          postedby="57357 Hospital"
          postdate={"29/4/2024"}
        />
        <RequestCard
          buttonid={"5"}
          image={MagdyYakoub}
          description="Blood Donation"
          postedby="Magdi Yacoub Heart Foundation"
          postdate={"15/4/2024"}
        />
        <RequestCard
          buttonid={"6"}
          image={MagdyYakoub}
          description="Blood Donation"
          postedby="Magdi Yacoub Heart Foundation"
          postdate={"13/4/2024"}
        />
        <RequestCard
          buttonid={"7"}
          image={RedCresent}
          description="Blood Donation"
          postedby="Red Cresent"
          postdate={"12/3/2024"}
        />
      </div>
    </>
  );
}

export default BloodRequests;
