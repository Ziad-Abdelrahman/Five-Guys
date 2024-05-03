import RedCresent from "../assets/Redcrescent.png";
import MagdyYakoub from "../assets/MagdyYakoub.png";
import ChildrenCancer from "../assets/57357.jpeg";
import "./AllDonationRequests.css";
import DonorNavigationBar from "../components/NavigationBar/Donor Navigation Bar/DonorNavigationBar.tsx";
import Headerofsection from "../components/header/HeaderOfSection.tsx";
import DonationRequestCard from "../components/Card/DonationRequestCard.tsx";
import BloodDonationFilter from "../components/DonorFilterCard/BloodDonationFilter.tsx";
import hashSet from "../hashSet";
import ViewPopup from "../components/View Request Popup/ViewPopup.tsx";
import { useState } from "react";

function BloodRequests() {
  const detailsList: hashSet = {
    "1": ["57357", "Cairo", "6th Of October"],
    "2": ["Red Cresent", "Giza", "Sheikh Zayed"],
    "3": ["57357", "Alexandria", "Miami"],
    "4": ["57357", "Cairo", "Maadi"],
    "5": ["Magdy Yakoub", "Sharkia", "Zagazig"],
    "6": ["Magdy Yakoub", "Cairo", "Maadi"],
    "7": ["Red Cresent", "Giza", "Sheikh Zayed"],
  };
  const [selectedID, setSelectedID] = useState("");
  //responsible for getting the id of the request to view its details
  function handleLearnMoreClick(id: string) {
    setSelectedID(id);
  }
  function handleClosePopUp() {
    setSelectedID("");
  }
  return (
    <>
      <DonorNavigationBar />
      <ViewPopup trigger={selectedID != ""} handleClick={handleClosePopUp}>
        <div>
          {detailsList[selectedID] && (
            <ul>
              <li>Hospital: {detailsList[selectedID][0]}</li>
              <br />
              <li>Government: {detailsList[selectedID][1]}</li>
              <br />
              <li>Area: {detailsList[selectedID][2]}</li>
            </ul>
          )}
        </div>
      </ViewPopup>
      <Headerofsection title={"Blood Requests"} />
      <BloodDonationFilter />
      <div className="requests-conainer">
        <DonationRequestCard
          buttonID={"1"}
          handleClick={handleLearnMoreClick}
          image={ChildrenCancer}
          description="Blood Donation"
          postedby="57357 Hospital"
          postdate={"5/1/2024"}
        />
        <DonationRequestCard
          buttonID={"2"}
          handleClick={handleLearnMoreClick}
          image={RedCresent}
          description="Blood Donation"
          postedby="Red Cresent"
          postdate={"10/2/2024"}
        />
        <DonationRequestCard
          buttonID={"3"}
          handleClick={handleLearnMoreClick}
          image={ChildrenCancer}
          description="Blood Donation"
          postedby="57357 Hospital"
          postdate={"25/4/2024"}
        />
        <DonationRequestCard
          buttonID={"4"}
          handleClick={handleLearnMoreClick}
          image={ChildrenCancer}
          description="Blood Donation"
          postedby="57357 Hospital"
          postdate={"29/4/2024"}
        />
        <DonationRequestCard
          buttonID={"5"}
          handleClick={handleLearnMoreClick}
          image={MagdyYakoub}
          description="Blood Donation"
          postedby="Magdi Yacoub Heart Foundation"
          postdate={"15/4/2024"}
        />
        <DonationRequestCard
          buttonID={"6"}
          handleClick={handleLearnMoreClick}
          image={MagdyYakoub}
          description="Blood Donation"
          postedby="Magdi Yacoub Heart Foundation"
          postdate={"13/4/2024"}
        />
        <DonationRequestCard
          buttonID={"7"}
          handleClick={handleLearnMoreClick}
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
