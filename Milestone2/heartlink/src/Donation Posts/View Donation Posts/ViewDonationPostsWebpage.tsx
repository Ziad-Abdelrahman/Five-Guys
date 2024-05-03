import NavigationBar from "../../components/NavigationBar/NavigationBar.tsx";
import HeaderOfSection from "../../components/header/HeaderOfSection.tsx";
import DonationPostCard from "../../components/Card/Organization Cards/DonationPostCard.tsx";
import SchoolSuppliesFilter from "../../components/DonorFilterCard/SchoolSuppliesFilter.tsx";
import filtericon from "../../assets/filter-icon.png";
import "../../Donation Requests Page/AllDonationRequests.css";

function ViewDonationPostsWebpage() {
  return (
    <div
      style={{ display: "flex", flexDirection: "column", alignItems: "center" }}
    >
      <NavigationBar />
      <HeaderOfSection title={"Donation Posts"} style={{ width: "1050px" }} />
      <div
        className="filters-container"
        style={{ marginLeft: "14.5em", marginBottom: "10px" }}
      >
        <div className="filters-label">
          <img src={filtericon} alt="Filter Icon" className="filter-icon" />
          <strong>Filters</strong>
        </div>

        {/*filter component*/}
        <SchoolSuppliesFilter
          buttonName1={"All"}
          buttonName2={"Stationary"}
          buttonName3={"Books"}
        />
      </div>
      <DonationPostCard typeOfRequest={"Clothes"} />
    </div>
  );
}

export default ViewDonationPostsWebpage;
