import OrganizationAccountProfileCard from "./OrganizationAccountProfileCard.tsx";
import OrgNavgBar from "../components/NavigationBar/Organization Navigation Bar/OrgNavgBar.tsx";
import HeaderOfSection from "../components/Header/HeaderOfSection.tsx";
import RepresentativeDetailsCard from "./RepresentativeDetailsCard.tsx";
import UploadMaps from "./UploadMaps.tsx";
import { BsThreeDots } from "react-icons/bs";

interface OrganizationAccountInfoProps {
  name: string;
  type: string;
  email: string;
  telephone1: string;
  telephone2: string;
  area: string;
  city: string;
  address: string;
  repName: string;
  repEmail: string;
  repGender: string;
  repContactNumber: string;
  setName: React.Dispatch<React.SetStateAction<string>>;
  setType: React.Dispatch<React.SetStateAction<string>>;
  setEmail: React.Dispatch<React.SetStateAction<string>>;
  setTelephone1: React.Dispatch<React.SetStateAction<string>>;
  setTelephone2: React.Dispatch<React.SetStateAction<string>>;
  setArea: React.Dispatch<React.SetStateAction<string>>;
  setCity: React.Dispatch<React.SetStateAction<string>>;
  setAddress: React.Dispatch<React.SetStateAction<string>>;
  setRepName: React.Dispatch<React.SetStateAction<string>>;
  setRepEmail: React.Dispatch<React.SetStateAction<string>>;
  setRepGender: React.Dispatch<React.SetStateAction<string>>;
  setRepContactNumber: React.Dispatch<React.SetStateAction<string>>;
  setPage: React.Dispatch<React.SetStateAction<string>>;
}

function OrganizationAccountInfo(props: OrganizationAccountInfoProps) {
  const handleClick = () => {
    props.setPage("edit");
  };
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
              <div className="card-dropdown-content" onClick={handleClick}>
                Edit Info
              </div>
            </div>
          </>
        }
      />
      <div className={"organization-account-info"}>
        <OrganizationAccountProfileCard
          name={props.name}
          type={props.type}
          email={props.email}
          hotline={props.telephone1}
          telephone={props.telephone2}
        />
        <div className={"two-card-upload-maps-holder"}>
          <RepresentativeDetailsCard
            name={props.repName}
            email={props.repEmail}
            gender={props.repGender}
            contactNumber={props.repContactNumber}
          />
          <UploadMaps
            city={props.city}
            area={props.area}
            address={props.address}
          />
        </div>
      </div>
    </div>
  );
}

export default OrganizationAccountInfo;
