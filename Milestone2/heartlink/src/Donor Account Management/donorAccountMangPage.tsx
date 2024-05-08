import DonorNavigationBar from "../components/NavigationBar/Donor Navigation Bar/DonorNavigationBar.tsx";
import HeaderOfSection from "../components/Header/HeaderOfSection.tsx";
import DonorAccountProfileCard from "../components/Card/DonorAccountProfileCard.tsx";
import DonorProbonoCard from "../components/Card/DonorProbonoCard.tsx";

import "./donorAccountMangPage.css";

import Doctor from "../assets/doctor.png";
import Teacher from "../assets/teachervector.png";
import { useState } from "react";

import DonorAddTeacherInfo from "./donorAddTeacherInfo.tsx";
import DonorAddDoctorInfo from "./donorAddDoctorInfo.tsx"; // Ensure this component exists and is imported correctly

function donorAccountMangPage() {
  const [selectedProbono, setSelectedProbono] = useState(null);

  // Function to toggle the visibility of the dropdown based on the card clicked
  const toggleProbonoInfo = (probonoType) => {
    if (selectedProbono === probonoType) {
      setSelectedProbono(null); // If the same type is clicked again, it will hide
    } else {
      setSelectedProbono(probonoType); // Set to the selected type
    }
  };

  return (
    <>
      <DonorNavigationBar />
      <HeaderOfSection title={"Account"} />
      <div className="management-cards-container">
        <DonorAccountProfileCard />
        <div className={"master-probono-container"}>
          <div className={"pro-bono-cards-container"}>
            <div
              className={"card-and-drop-down-container"}
              onClick={() => toggleProbonoInfo("doctor")}
            >
              <DonorProbonoCard image={Doctor} title={"Become a Doctor"} />
            </div>

            <div
              className={"card-and-drop-down-container"}
              onClick={() => toggleProbonoInfo("teacher")}
            >
              <DonorProbonoCard image={Teacher} title={"Become a Teacher"} />
            </div>
          </div>
          {selectedProbono === "teacher" && <DonorAddTeacherInfo />}
          {selectedProbono === "doctor" && <DonorAddDoctorInfo />}
        </div>
      </div>
    </>
  );
}

export default donorAccountMangPage;
