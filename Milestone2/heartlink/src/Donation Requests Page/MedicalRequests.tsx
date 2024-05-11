import DonorNavigationBar from "../components/NavigationBar/Donor Navigation Bar/DonorNavigationBar.tsx";
import Headerofsection from "../components/Header/HeaderOfSection.tsx";
import DonationRequestCard from "../components/Card/DonationRequestCard.tsx";
import ChildrenCancer from "../assets/57357.jpeg";
import RedCresent from "../assets/Redcrescent.png";
import MagdyYakoub from "../assets/MagdyYakoub.png";
import "./AllDonationRequests.css";
import SchoolSuppliesFilter from "../components/DonorFilterCard/SchoolSuppliesFilter.tsx";
import filtericon from "../assets/filter-icon.png";
import hashSet from "../hashSet";
import ViewPopup from "../components/View Request Popup/ViewPopup.tsx";
import { useState } from "react";
import medicaltool from "../assets/medicaltool.png";

interface MedicalRequestsProps {
  type?: string;
}

function MedicalRequests({ type }: MedicalRequestsProps) {
  const detailsList: hashSet = {
    "47": ["Tools", "Ventilator", "5"],
    "48": ["Tools", "ECG Machine", "3"],
    "49": ["Tools", "Ultrasound Machine", "2"],
    "50": ["Equipment", "Syringes", "1000"],
    "51": ["Equipment", "Gloves", "500"],
    "52": ["Equipment", "Masks", "1000"],
    "53": ["Medications", "Antidiabetics", "100"],
    "54": ["Medications", "Antiemetics", "100"],
    "55": ["Medications", "Antibiotics", "50"],
    "56": ["Medications", "Vitamins", "100"],
    "57": ["Medications", "First Aid Kit", "50"],
    "58": ["Medications", "Vitamins", "50"],
    "59": ["Medications", "Eye drops", "50"],
  };
  const cardData = [
    {
      image: ChildrenCancer,
      description: "Medical Supplies",
      postedby: "Red Crescent",
      postdate: "10/6/2023",
      buttonID: "47",
    },
    {
      image: ChildrenCancer,
      description: "Medical Supplies",
      postedby: "57357 Hospital",
      postdate: "5/1/2024",
      buttonID: "48",
    },
    {
      image: RedCresent,
      description: "Medical Supplies",
      postedby: "Red Cresent",
      postdate: "10/2/2024",
      buttonID: "49",
    },
    {
      image: ChildrenCancer,
      description: "Medical Supplies",
      postedby: "57357 Hospital",
      postdate: "25/4/2024",
      buttonID: "50",
    },
    {
      image: ChildrenCancer,
      description: "Medical Supplies",
      postedby: "57357 Hospital",
      postdate: "20/2/2024",
      buttonID: "51",
    },
    {
      image: MagdyYakoub,
      description: "Medical Supplies",
      postedby: "Magdi Yacoub Heart Foundation",
      postdate: "15/3/2024",
      buttonID: "52",
    },
    {
      image: MagdyYakoub,
      description: "Medical Supplies",
      postedby: "Magdi Yacoub Heart Foundation",
      postdate: "10/2/2024",
      buttonID: "53",
    },
    {
      image: RedCresent,
      description: "Medical Supplies",
      postedby: "Red Cresent",
      postdate: "12/2/2024",
      buttonID: "54",
    },
    {
      image: MagdyYakoub,
      description: "Medical Supplies",
      postedby: "Magdi Yacoub Heart Foundation",
      postdate: "12/3/2024",
      buttonID: "55",
    },
    {
      image: ChildrenCancer,
      description: "57357 Hospital",
      postedby: "Children Cancer Hospital",
      postdate: "12/4/2024",
      buttonID: "56",
    },
    {
      image: ChildrenCancer,
      description: "57357 Hospital",
      postedby: "Children Cancer Hospital",
      postdate: "12/4/2024",
      buttonID: "57",
    },
    {
      image: ChildrenCancer,
      description: "57357 Hospital",
      postedby: "Children Cancer Hospital",
      postdate: "12/4/2024",
      buttonID: "58",
    },
    {
      image: ChildrenCancer,
      description: "57357 Hospital",
      postedby: "Children Cancer Hospital",
      postdate: "12/4/2024",
      buttonID: "59",
    },
  ];

  //responsible for viewing the details of the request
  const [selectedID, setSelectedID] = useState("");
  const [selectedRadioButton, setSelectedRadioButton] = useState("");
  const [selectedMedication, setSelectedMedicaton] = useState("");

  //responsible for getting the id of the request to view its details
  function handleLearnMoreClick(id: string) {
    setSelectedID(id);
  }
  //responsible for closing the popup
  function handleClosePopUp() {
    setSelectedID("");
  }
  function handleRadioButtonClick(filter: string) {
    filter === "All"
      ? setSelectedRadioButton("")
      : setSelectedRadioButton(filter);
  }

  function handleMedicationClick(medication: string) {
    console.log(medication);
    medication === "All"
      ? setSelectedMedicaton("")
      : setSelectedMedicaton(medication);
  }
  return (
    <>
      <DonorNavigationBar type={type} />
      <ViewPopup trigger={selectedID != ""} handleClick={handleClosePopUp}>
        <div>
          {detailsList[selectedID] && (
            <ul>
              <li>Type: {detailsList[selectedID][0]}</li>
              <br />
              <li>Use: {detailsList[selectedID][1]}</li>
              <br />
              <li>Quantity: {detailsList[selectedID][2]}</li>
            </ul>
          )}
        </div>
        <img style={{ width: "30%" }} src={medicaltool} />
      </ViewPopup>
      <Headerofsection title={"Medical Supplies"} />
      <div className="filters-container">
        <div className="filters-label">
          <img src={filtericon} alt="Filter Icon" className="filter-icon" />
          <strong>Filters</strong>
        </div>

        {/*filter component*/}
        <SchoolSuppliesFilter
          hasMoreFilters={selectedRadioButton == "Medications"}
          buttonAll={"All"}
          buttonName1={"Tools"}
          buttonName2={"Equipment"}
          buttonName3={"Medications"}
          handleMedicationFilter={handleMedicationClick}
          filterChange={handleRadioButtonClick}
        />
      </div>
      <div className="requests-conainer">
        {cardData
          .filter(
            (card) =>
              selectedRadioButton === "" ||
              (selectedRadioButton === "Medications" &&
                selectedRadioButton === detailsList[card.buttonID][0] &&
                (selectedMedication === "" ||
                  selectedMedication === detailsList[card.buttonID][1])) ||
              (selectedRadioButton != "Medications" &&
                selectedRadioButton === detailsList[card.buttonID][0]),
          )

          .map((card) => (
            <DonationRequestCard
              buttonID={card.buttonID}
              image={card.image}
              description={card.description}
              postedby={card.postedby}
              postdate={card.postdate}
              handleClick={handleLearnMoreClick}
            />
          ))}
      </div>
    </>
  );
}

export default MedicalRequests;
