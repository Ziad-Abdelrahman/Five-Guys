import RedCresent from "../assets/Redcrescent.png";
import MagdyYakoub from "../assets/MagdyYakoub.png";
import ChildrenCancer from "../assets/57357.jpeg";
import "./AllDonationRequests.css";
import DonorNavigationBar from "../components/NavigationBar/Donor Navigation Bar/DonorNavigationBar.tsx";
import Headerofsection from "../components/Header/HeaderOfSection.tsx";
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
    "5": ["Magdi Yacoub", "Sharkia", "Zagazig"],
    "6": ["Magdi Yacoub", "Cairo", "Maadi"],
    "7": ["Red Cresent", "Giza", "Sheikh Zayed"],
  };

  const cardData = [
    {
      buttonID: "1",
      image: ChildrenCancer,
      description: "Blood Donation",
      postedby: "57357 Hospital",
      postdate: "5/1/2024",
    },
    {
      buttonID: "2",
      image: RedCresent,
      description: "Blood Donation",
      postedby: "Red Cresent",
      postdate: "10/2/2024",
    },
    {
      buttonID: "3",
      image: ChildrenCancer,
      description: "Blood Donation",
      postedby: "57357 Hospital",
      postdate: "25/4/2024",
    },
    {
      buttonID: "4",
      image: ChildrenCancer,
      description: "Blood Donation",
      postedby: "57357 Hospital",
      postdate: "29/4/2024",
    },
    {
      buttonID: "5",
      image: MagdyYakoub,
      description: "Blood Donation",
      postedby: "Magdi Yacoub Heart Foundation",
      postdate: "15/4/2024",
    },
    {
      buttonID: "6",
      image: MagdyYakoub,
      description: "Blood Donation",
      postedby: "Magdi Yacoub Heart Foundation",
      postdate: "13/4/2024",
    },
    {
      buttonID: "7",
      image: RedCresent,
      description: "Blood Donation",
      postedby: "Red Cresent",
      postdate: "12/3/2024",
    },
  ];

  const [selectedID, setSelectedID] = useState("");
  const [selectedHospital, setSelectedHospital] = useState("");
  const [selectedGovernment, setSelectedGovernment] = useState("");
  const [selectedArea, setSelectedArea] = useState("");
  //responsible for getting the id of the request to view its details
  function handleLearnMoreClick(id: string) {
    setSelectedID(id);
  }
  function handleClosePopUp() {
    setSelectedID("");
  }

  function handleHospitalChange(hospital: string) {
    hospital === "Hospital"
      ? setSelectedHospital("")
      : setSelectedHospital(hospital);
  }

  function handleGovernmentChange(government: string) {
    government === "Government"
      ? setSelectedGovernment("")
      : setSelectedGovernment(government);
  }

  function handleAreaChange(area: string) {
    area === "Area" ? setSelectedArea("") : setSelectedArea(area);
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
      <BloodDonationFilter
        handleHospitalFilter={handleHospitalChange}
        handleAreaFilter={handleAreaChange}
        handleGovernmentFilter={handleGovernmentChange}
      />
      <div className="requests-conainer">
        {cardData
          .filter(
            (card) =>
              (detailsList[card.buttonID][0] === selectedHospital ||
                selectedHospital === "") &&
              (detailsList[card.buttonID][1] === selectedGovernment ||
                selectedGovernment === "") &&
              (detailsList[card.buttonID][2] === selectedArea ||
                selectedArea === ""),
          )
          .map((card) => (
            <DonationRequestCard
              buttonID={card.buttonID}
              handleClick={handleLearnMoreClick}
              image={card.image}
              description={card.description}
              postedby={card.postedby}
              postdate={card.postdate}
            />
          ))}
      </div>
    </>
  );
}
export default BloodRequests;
