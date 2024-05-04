import DonorNavigationBar from "../components/NavigationBar/Donor Navigation Bar/DonorNavigationBar.tsx";
import HeaderOfSection from "../components/Header/HeaderOfSection.tsx";
import TeacherFilter from "../components/DonorFilterCard/TeacherFilter.tsx";
import "./AllDonationRequests.css";
import hashSet from "../hashSet";
import ChildrenCancer from "../assets/57357.jpeg";
import Turin from "../assets/Turin.jpg";
import ResalaLogo from "../assets/Resala.png";
import DonationRequestCard from "../components/Card/DonationRequestCard.tsx";
import { useState } from "react";
import ViewPopup from "../components/View Request Popup/ViewPopup.tsx";

function TeacherPosts() {
  const detailsList: hashSet = {
    "1": ["Math", "Cairo", "Maadi", "30"],
    "2": ["Physics", "Giza", "Sheikh Zayed", "40"],
    "3": ["Biology", "Sharqia", "Zagazig", "50"],
    "4": ["Arabic", "Alexandria", "Miami", "60"],
    "5": ["English", "Cairo", "Nasr City", "10"],
    "6": ["Relegion", "Giza", "6th Of October", "40"],
    "7": ["Math", "Cairo", "Maadi", "30"],
    "8": ["English", "Cairo", "Maadi", "20"],
    "9": ["English", "Giza", "Sheikh Zayed", "40"],
    "10": ["Arabic", "Cairo", "New Cairo", "40"],
  };
  const cardData = [
    {
      buttonID: "1",
      image: ChildrenCancer,
      description: "Teacher Needed",
      postedby: "57357 Hospital",
      postdate: "5/1/2024",
    },
    {
      buttonID: "2",
      image: ResalaLogo,
      description: "Teacher Needed",
      postedby: "Resala",
      postdate: "10/2/2024",
    },
    {
      buttonID: "3",
      image: ChildrenCancer,
      description: "Teacher Needed",
      postedby: "57357 Hospital",
      postdate: "25/4/2024",
    },
    {
      buttonID: "4",
      image: ChildrenCancer,
      description: "Teacher Needed",
      postedby: "57357 Hospital",
      postdate: "29/4/2024",
    },
    {
      buttonID: "5",
      image: Turin,
      description: "Teacher Needed",
      postedby: "Turin",
      postdate: "15/4/2024",
    },
    {
      buttonID: "6",
      image: ResalaLogo,
      description: "Teacher Needed",
      postedby: "Resala",
      postdate: "13/4/2024",
    },
    {
      buttonID: "7",
      image: Turin,
      description: "Teacher Needed",
      postedby: "Turin",
      postdate: "12/3/2024",
    },
    {
      buttonID: "8",
      image: Turin,
      description: "Teacher Needed",
      postedby: "Turin",
      postdate: "12/3/2024",
    },
    {
      buttonID: "9",
      image: Turin,
      description: "Teacher Needed",
      postedby: "Turin",
      postdate: "12/3/2024",
    },
    {
      buttonID: "10",
      image: ChildrenCancer,
      description: "Teacher Needed",
      postedby: "57357 Hospital",
      postdate: "12/3/2024",
    },
  ];
  const [selectedID, setSelectedID] = useState("");
  const [selectedSubject, setSelectedSubject] = useState("");
  const [selectedGovernment, setSelectedGovernment] = useState("");
  const [selectedArea, setSelectedArea] = useState("");
  //responsible for getting the id of the request to view its details
  function handleLearnMoreClick(id: string) {
    setSelectedID(id);
  }
  function handleClosePopUp() {
    setSelectedID("");
  }

  function handleSubjectChange(subject: string) {
    subject === "Subject"
      ? setSelectedSubject("")
      : setSelectedSubject(subject);
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
              <li>Subject: {detailsList[selectedID][0]}</li>
              <li>Government: {detailsList[selectedID][1]}</li>
              <li>Area: {detailsList[selectedID][2]}</li>
              <li>Quantity: {detailsList[selectedID][3]}</li>
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
              src="https://maps.google.com/maps?width=200&amp;height=200&amp;hl=en&amp;q=Albashaer+()&amp;t=&amp;z=15&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
              title="Children Cancer Hospital Location"
            >
              {/* The content inside iframe will not display if the iframe loads properly */}
              <a href="https://www.gps.ie/">gps tracker sport</a>
            </iframe>
          </div>
        </div>
      </ViewPopup>
      <HeaderOfSection title={"Teacher Posts"} />
      <TeacherFilter
        handleSubjectFilter={handleSubjectChange}
        handleAreaFilter={handleAreaChange}
        handleGovernmentFilter={handleGovernmentChange}
      />
      <div className="requests-conainer">
        {cardData
          .filter(
            (card) =>
              (detailsList[card.buttonID][0] === selectedSubject ||
                selectedSubject === "") &&
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
              showDonateButton={true}
              donateButtonText={"Fulfill"}
            />
          ))}
      </div>
    </>
  );
}

export default TeacherPosts;
