import DonorNavigationBar from "../components/NavigationBar/Donor Navigation Bar/DonorNavigationBar.tsx";
import HeaderOfSection from "../components/Header/HeaderOfSection.tsx";
import DonorAccountProfileCard from "../components/Card/DonorAccountProfileCard.tsx";
import DonorProbonoCard from "../components/Card/DonorProbonoCard.tsx";
import "./donorAccountMangPage.css";

import Doctor from "../assets/doctor.png";
import Teacher from "../assets/teachervector.png";
function donorAccountMangPage() {
  return (
    <>
      <DonorNavigationBar />
      <HeaderOfSection title={"Account"} />
      <div className="management-cards-container">
        <DonorAccountProfileCard />
        <div className={"master-probono-container"}>
          <div id={"card-and-drop-down-container"} style={{ marginLeft: "4%" }}>
            <DonorProbonoCard image={Doctor} title={"Become a Doctor"} />
          </div>
          <div id={"card-and-drop-down-container"} style={{ marginLeft: "7%" }}>
            <DonorProbonoCard image={Teacher} title={"Become a Teacher"} />
          </div>
        </div>
      </div>
    </>
  );
}
export default donorAccountMangPage;
