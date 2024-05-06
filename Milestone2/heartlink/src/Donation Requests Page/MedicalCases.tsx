import DonorNavigationBar from "../components/NavigationBar/Donor Navigation Bar/DonorNavigationBar.tsx";
import HeaderOfSection from "../components/Header/HeaderOfSection.tsx";
import MedicalCasesFilter from "../components/DonorFilterCard/MedicalCasesFilter.tsx";
import "./AllDonationRequests.css";
import hashSet from "../hashSet";
import ChildrenCancer from "../assets/57357.jpeg";
import RedCresent from "../assets/Redcrescent.png";
import MagdyYakoub from "../assets/MagdyYakoub.png";
import { useState } from "react";
import DonationRequestCard from "../components/Card/DonationRequestCard.tsx";
import ViewPopup from "../components/View Request Popup/ViewPopup.tsx";

function MedicalCases() {
  const detailsList: hashSet = {
    "1": [
      "Ahmed Mahmoud",
      "45",
      "Male",
      "76",
      "Sharqia",
      "Zagazig",
      "15 El-Thawra Street, Heliopolis, Cairo",
      "57357 Hospital",
      "Cardiology",
      "Routine check-up for heart irregularities.",
    ],
    "2": [
      "Fatima Hassan",
      "34",
      "Female",
      "62",
      "Sharqia",
      "Zagazig",
      "23 El-Nasr Road, Maadi, Cairo",
      "57357 Hospital",
      "Pediatric",
      "Annual pediatric review and vaccination.",
    ],
    "3": [
      "Khaled Mohamed",
      "52",
      "Male",
      "82",
      "Cairo",
      "Nasr City",
      "78 Ramses Street, Alexandria",
      "Red Crescent",
      "Pediatric",
      "Follow-up treatment for lung cancer.",
    ],
    "4": [
      "Sara Ibrahim",
      "28",
      "Female",
      "58",
      "Alexandria",
      "Miami",
      "12 El-Gaish Road, Tanta",
      "57357 Hospital",
      "Neurology",
      "Diagnosis of chronic migraines.",
    ],
    "5": [
      "Youssef Ali",
      "47",
      "Male",
      "88",
      "Cairo",
      "New Cairo",
      "32 El-Horreya Avenue, Zagazig",
      "57357 Hospital",
      "Immunology",
      "Recovery from knee surgery.",
    ],
    "6": [
      "Amira Said",
      "37",
      "Female",
      "64",
      "Alexandria",
      "Miami",
      "5 El-Gomhoreya Street, Luxor",
      "Magdy Yakoub",
      "Immunology",
      "Assessment for possible thyroid issues.",
    ],
    "7": [
      "Omar Farouk",
      "40",
      "Male",
      "77",
      "Giza",
      "6th Of October",
      "48 El-Bahr Street, Aswan",
      "Magdy Yakoub",
      "Psychiatry",
      "Treatment for severe eczema.",
    ],
    "8": [
      "Nour El-Din",
      "30",
      "Female",
      "54",
      "Giza",
      "Sheikh Zayed",
      "90 El-Fateh Street, Ismailia",
      "Red Crescent",
      "Psychiatry",
      "Consultation for gastrointestinal disorders.",
    ],
    "9": [
      "Layla Fathi",
      "29",
      "Female",
      "61",
      "Cairo",
      "Maadi",
      "21 El-Shaheed Sayed Zakaria Street, Port Said",
      "Magdy Yakoub",
      "Neurology",
      "Management of type 1 diabetes.",
    ],
    "10": [
      "Mohamed Salah",
      "43",
      "Male",
      "90",
      "Giza",
      "Sheikh Zayed",
      "67 El-Salam Street, Mansoura",
      "57357 Hospital",
      "Cardiology",
      "Evaluation for hypertension management.",
    ],
  };

  const cardData = [
    {
      image: ChildrenCancer,
      description: "Medical Supplies",
      postedby: "57357 Hospital",
      postdate: "10/6/2023",
      buttonID: "1",
    },
    {
      image: ChildrenCancer,
      description: "Medical Supplies",
      postedby: "57357 Hospital",
      postdate: "5/1/2024",
      buttonID: "2",
    },
    {
      image: RedCresent,
      description: "Medical Supplies",
      postedby: "Red Cresent",
      postdate: "10/2/2024",
      buttonID: "3",
    },
    {
      image: ChildrenCancer,
      description: "Medical Supplies",
      postedby: "57357 Hospital",
      postdate: "25/4/2024",
      buttonID: "4",
    },
    {
      image: ChildrenCancer,
      description: "Medical Supplies",
      postedby: "57357 Hospital",
      postdate: "20/2/2024",
      buttonID: "5",
    },
    {
      image: MagdyYakoub,
      description: "Medical Supplies",
      postedby: "Magdi Yacoub Heart Foundation",
      postdate: "15/3/2024",
      buttonID: "6",
    },
    {
      image: MagdyYakoub,
      description: "Medical Supplies",
      postedby: "Magdi Yacoub Heart Foundation",
      postdate: "10/2/2024",
      buttonID: "7",
    },
    {
      image: RedCresent,
      description: "Medical Supplies",
      postedby: "Red Cresent",
      postdate: "12/2/2024",
      buttonID: "8",
    },
    {
      image: MagdyYakoub,
      description: "Medical Supplies",
      postedby: "Magdi Yacoub Heart Foundation",
      postdate: "12/3/2024",
      buttonID: "9",
    },
    {
      image: ChildrenCancer,
      description: "Medical Supplies",
      postedby: "57357 Hospital",
      postdate: "12/4/2024",
      buttonID: "10",
    },
  ];
  const [selectedID, setSelectedID] = useState("");
  const [selectedSpeciality, setSelectedSpeciality] = useState("");
  const [selectedGovernment, setSelectedGovernment] = useState("");
  const [selectedOrganization, setSelectedOrganization] = useState("");
  const [selectedArea, setSelectedArea] = useState("");
  //responsible for getting the id of the request to view its details
  function handleLearnMoreClick(id: string) {
    setSelectedID(id);
  }
  function handleClosePopUp() {
    setSelectedID("");
  }

  function handleSpecialityChange(Speciality: string) {
    Speciality === "Speciality"
      ? setSelectedSpeciality("")
      : setSelectedSpeciality(Speciality);
  }
  function handleOrganizationChange(Organization: string) {
    Organization === "Hospital"
      ? setSelectedOrganization("")
      : setSelectedOrganization(Organization);
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
      <ViewPopup
        trigger={selectedID != ""}
        handleClick={handleClosePopUp}
        width={"60%"}
        height={"80%"}
      >
        <div>
          {detailsList[selectedID] && (
            <ul>
              <li>Name: {detailsList[selectedID][0]}</li>
              <li>Age: {detailsList[selectedID][1]}</li>
              <li>Gender: {detailsList[selectedID][2]}</li>
              <li>Weight: {detailsList[selectedID][3]}</li>
              <li>Governorates: {detailsList[selectedID][4]}</li>
              <li>Area: {detailsList[selectedID][5]}</li>
              <li>Address: {detailsList[selectedID][6]}</li>
              <li>Hospital: {detailsList[selectedID][7]}</li>
              <li>Speciality: {detailsList[selectedID][8]}</li>
              <li>Case Description: {detailsList[selectedID][9]}</li>
            </ul>
          )}
          <div style={{ marginLeft: "40px" }}>
            <iframe
              width="700"
              height="220"
              src="https://maps.google.com/maps?width=200&amp;height=200&amp;hl=en&amp;q=Albashaer+()&amp;t=&amp;z=15&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
              title="Children Cancer Hospital Location"
            >
              {/* The content inside iframe will not display if the iframe loads properly */}
              <a href="https://www.gps.ie/">gps tracker sport</a>
            </iframe>
          </div>
        </div>
      </ViewPopup>
      <HeaderOfSection title={"Medical Cases"} />
      <MedicalCasesFilter
        handleOrganizationFilter={handleOrganizationChange}
        handleSpecialityFilter={handleSpecialityChange}
        handleAreaFilter={handleAreaChange}
        handleGovernmentFilter={handleGovernmentChange}
      />
      <div className="requests-conainer">
        {cardData
          .filter(
            (card) =>
              (detailsList[card.buttonID][8] === selectedSpeciality ||
                selectedSpeciality === "") &&
              (detailsList[card.buttonID][4] === selectedGovernment ||
                selectedGovernment === "") &&
              (detailsList[card.buttonID][5] === selectedArea ||
                selectedArea === "") &&
              (detailsList[card.buttonID][7] === selectedOrganization ||
                selectedOrganization === ""),
          )
          .map((card) => (
            <DonationRequestCard
              buttonID={card.buttonID}
              handleClick={handleLearnMoreClick}
              image={card.image}
              description={card.description}
              postedby={card.postedby}
              postdate={card.postdate}
              showDonateButton={true}
              donateButtonText={"Fulfill"}
            />
          ))}
      </div>
    </>
  );
}

export default MedicalCases;
