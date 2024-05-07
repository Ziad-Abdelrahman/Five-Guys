import OrganizationAccountProfileCard from "./OrganizationAccountProfileCard.tsx";
import OrgNavgBar from "../components/NavigationBar/Organization Navigation Bar/OrgNavgBar.tsx";
import HeaderOfSection from "../components/Header/HeaderOfSection.tsx";
import RepresentativeDetailsCard from "./RepresentativeDetailsCard.tsx";
import UploadMaps from "./UploadMaps.tsx";
import { BsThreeDots } from "react-icons/bs";
import "../components/Card/Organization Cards/DonationPostCard.css";
import { Link } from "react-router-dom";

function OrganizationAccountInfo() {
  return (
    <div>
      <OrgNavgBar />
      <HeaderOfSection
        title={"Account Info"}
        smallDivStyle={{
          display: "flex",
          justifyContent: "space-between",
          width: "100%",
        }}
        children={
          <>
            <div className="card-dropdown" style={{ margin: "0 2%" }}>
              <BsThreeDots
                size={"30px"}
                style={{
                  display: "flex",
                  marginTop: "10px",
                  cursor: "pointer",
                }}
              />
              <div className="card-dropdown-content">
                <Link to={"*"}>Edit Info</Link>
              </div>
            </div>
          </>
        }
      />
      <div className={"organization-account-info"}>
        <OrganizationAccountProfileCard
          name={"Baheyya"}
          type={"Breast Cancer"}
          area={"El Haram"}
          address={"4 ش علوبة مدكور"}
          city={"Cairo"}
        />
        <div className={"two-card-upload-maps-holder"}>
          <RepresentativeDetailsCard
            name={"Farah"}
            email={"farahh_faisall@hotmail.com"}
            gender={"Female"}
            contactNumber={"01113190357"}
          />
          <UploadMaps />
        </div>
      </div>
    </div>
  );
}

export default OrganizationAccountInfo;
