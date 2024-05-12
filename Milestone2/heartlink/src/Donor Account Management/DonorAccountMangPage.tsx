import DonorNavigationBar from "../components/NavigationBar/Donor Navigation Bar/DonorNavigationBar.tsx";
import HeaderOfSection from "../components/Header/HeaderOfSection.tsx";
import DonorAccountProfileCard from "../components/Card/DonorAccountProfileCard.tsx";
import DonorProbonoCard from "../components/Card/DonorProbonoCard.tsx";

import "./donorAccountMangPage.css";
import Doctor from "../assets/doctor.png";
import Teacher from "../assets/teachervector.png";
import { useState } from "react";
import DonorAddTeacherInfo from "./DonorAddTeacherInfo.tsx";
import DonorAddDoctorInfo from "./DonorAddDoctorInfo.tsx";
import DonorClinicAddress from "./DonorClinicAddress.tsx";
import DonorClinicMapMarker from "./DonorClinicMapMarker.tsx";

interface DonorAccountMangPageProps {
  name: string;
  age: string;
  gender: string;
  governorate: string;
  address: string;
  tel1: string;
  tel2: string;
  setPage: React.Dispatch<React.SetStateAction<string>>;
  type?: string;
}

function DonorAccountMangPage(props: DonorAccountMangPageProps) {
  const [currentStep, setCurrentStep] = useState(0);

  const [selectedProbono, setSelectedProbono] = useState("");

  // Function to toggle the visibility of the dropdown based on the card clicked
  const toggleProbonoInfo = (probonoType: string) => {
    if (selectedProbono === probonoType) {
      setSelectedProbono(""); // If the same type is clicked again, it will hide
    } else {
      setSelectedProbono(probonoType); // Set to the selected type
    }
  };
  return (
    <>
      <DonorNavigationBar type={props.type} />
      <HeaderOfSection title={"Account"} />
      <div className="management-cards-container">
        <DonorAccountProfileCard
          age={props.age}
          address={props.address}
          gender={props.gender}
          governorate={props.governorate}
          name={props.name}
          tel1={props.tel1}
          tel2={props.tel2}
          setPage={props.setPage}
        />
        <div className={"master-probono-container"}>
          <div className={"pro-bono-cards-container"}>
            {props.type != "doctor" && (
              <div
                className={"card-and-drop-down-container"}
                onClick={() => toggleProbonoInfo("doctor")}
              >
                <DonorProbonoCard image={Doctor} title={"Become a Doctor"} />
              </div>
            )}

            {props.type != "teacher" && (
              <div
                className={"card-and-drop-down-container"}
                onClick={() => toggleProbonoInfo("teacher")}
              >
                <DonorProbonoCard image={Teacher} title={"Become a Teacher"} />
              </div>
            )}
          </div>
          {selectedProbono === "teacher" && <DonorAddTeacherInfo />}
          {selectedProbono === "doctor" && currentStep === 0 && (
            <DonorAddDoctorInfo setCurrentStep={setCurrentStep} />
          )}
          {selectedProbono === "doctor" && currentStep === 1 && (
            <DonorClinicAddress setCurrentStep={setCurrentStep} />
          )}
          {selectedProbono === "doctor" && currentStep === 2 && (
            <DonorClinicMapMarker />
          )}
        </div>
      </div>
    </>
  );
}

export default DonorAccountMangPage;
