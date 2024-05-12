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

interface BloodRequestsProps {
  type?: string;
}
function BloodRequests({ type }: BloodRequestsProps) {
  const detailsList: hashSet = {
    "1": ["Ahmed", "A+", "57357", "Cairo", "6th Of October"],
    "2": ["Mohamed", "AB-", "Red Cresent", "Giza", "Sheikh Zayed"],
    "3": ["Omar", "AB+", "57357", "Alexandria", "Miami"],
    "4": ["Farah", "B+", "57357", "Cairo", "Maadi"],
    "5": ["Yassin", "O-", "Magdi Yacoub", "Sharkia", "Zagazig"],
    "6": ["Younis", "AB-", "Magdi Yacoub", "Cairo", "Maadi"],
    "7": ["Abdallah", "B-", "Red Cresent", "Giza", "Sheikh Zayed"],
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
      <DonorNavigationBar type={type} />
      <ViewPopup trigger={selectedID != ""} handleClick={handleClosePopUp}>
        <div>
          {detailsList[selectedID] && (
            <ul>
              <li>Name: {detailsList[selectedID][0]}</li>

              <li>Blood Type: {detailsList[selectedID][1]}</li>

              <li>Hospital: {detailsList[selectedID][2]}</li>

              <li>Government: {detailsList[selectedID][3]}</li>

              <li>Area: {detailsList[selectedID][4]}</li>
            </ul>
          )}
          <div style={{ marginLeft: "40px" }}>
            <iframe
              width="400"
              height="120"
              frameBorder="0"
              scrolling="no"
              marginHeight={0}
              marginWidth={0}
              src="https://maps.google.com/maps?width=200&height=200&hl=en&q=57357%20hospital+(Children%20Cancer%20Hospital)&t=&z=15&ie=UTF8&iwloc=B&output=embed"
              title="Children Cancer Hospital Location"
            >
              {/* The content inside iframe will not display if the iframe loads properly */}
              <a href="https://www.gps.ie/">gps tracker sport</a>
            </iframe>
          </div>
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
              (detailsList[card.buttonID][2] === selectedHospital ||
                selectedHospital === "") &&
              (detailsList[card.buttonID][3] === selectedGovernment ||
                selectedGovernment === "") &&
              (detailsList[card.buttonID][4] === selectedArea ||
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
              showDonateButton={false}
            />
          ))}
      </div>
    </>
  );
}
export default BloodRequests;
