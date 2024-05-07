import DonationPostCard from "../components/Card/Organization Cards/DonationPostCard.tsx";
import SchoolSuppliesFilter from "../components/DonorFilterCard/SchoolSuppliesFilter.tsx";
import filtericon from "../assets/filter-icon.png";
import HeaderOfSection from "../components/Header/HeaderOfSection.tsx";
import "../Donation Requests Page/AllDonationRequests.css";
import { useState } from "react";
import OrgNavgBar from "../components/NavigationBar/Organization Navigation Bar/OrgNavgBar.tsx";
import { useLoaderData } from "react-router-dom";

function ViewDonationPostsWebpage() {
  const [selectedRadioButton, setSelectedRadioButton] = useState("");
  function handleRadioButtonChange(status: string) {
    status === "All"
      ? setSelectedRadioButton("")
      : setSelectedRadioButton(status);
  }

  const allDataList = useLoaderData() as any[];

  return (
    <div
      style={{ display: "flex", flexDirection: "column", alignItems: "center" }}
    >
      <OrgNavgBar />
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
          buttonName2={"Pending"}
          buttonName3={"Fulfilled"}
          filterChange={handleRadioButtonChange}
        />
      </div>
      {allDataList
        .filter(
          (card) =>
            (card.id === "1" || card.id === "2") &&
            (selectedRadioButton === "" ||
              card["status"] === selectedRadioButton),
        )
        .map((card) => (
          <DonationPostCard
            id={card.id}
            typeOfRequest={card.typeOfRequest}
            datePosted={card.datePosted}
            status={card.status}
            bookname={card.bookname}
            authorname={card.authorname}
            language={card.language}
            edition={card.edition}
            copies={card.copies}
          ></DonationPostCard>
        ))}
      {allDataList
        .filter(
          (card) =>
            (card.id === "3" || card.id === "4") &&
            (selectedRadioButton === "" || card.status === selectedRadioButton),
        )
        .map((card) => (
          <DonationPostCard
            id={card.id}
            typeOfRequest={card.typeOfRequest}
            datePosted={card.datePosted}
            status={card.status}
            equipment={card.Equipment}
          ></DonationPostCard>
        ))}
      {allDataList
        .filter(
          (card) =>
            (card.id === "5" || card.id === "6") &&
            (selectedRadioButton === "" || card.status === selectedRadioButton),
        )
        .map((card) => (
          <DonationPostCard
            id={card.id}
            typeOfRequest={card.typeOfRequest}
            datePosted={card.datePosted}
            status={card.status}
            tool={card.tool}
          ></DonationPostCard>
        ))}
      {allDataList
        .filter(
          (card) =>
            (card.id === "7" || card.id === "8") &&
            (selectedRadioButton === "" || card.status === selectedRadioButton),
        )
        .map((card) => (
          <DonationPostCard
            id={card.id}
            typeOfRequest={card.typeOfRequest}
            datePosted={card.datePosted}
            status={card.status}
            bloodtype={card.bloodtype}
            patientname={card.patientname}
          ></DonationPostCard>
        ))}
      {allDataList
        .filter(
          (card) =>
            (card.id === "9" || card.id === "10") &&
            (selectedRadioButton === "" || card.status === selectedRadioButton),
        )
        .map((card) => (
          <DonationPostCard
            id={card.id}
            typeOfRequest={card.typeOfRequest}
            datePosted={card.datePosted}
            status={card.status}
            clothesage={card.clothesage}
            clothesgender={card.clothesgender}
            kind={card.kind}
            season={card.season}
            material={card.material}
            size={card.size}
            pieces={card.pieces}
          ></DonationPostCard>
        ))}
      {allDataList
        .filter(
          (card) =>
            (card.id === "11" || card.id === "12") &&
            (selectedRadioButton === "" || card.status === selectedRadioButton),
        )
        .map((card) => (
          <DonationPostCard
            id={card.id}
            typeOfRequest={card.typeOfRequest}
            datePosted={card.datePosted}
            status={card.status}
            fcategory={card.fcategory}
            item={card.item}
            fquantity={card.fquantity}
          ></DonationPostCard>
        ))}
      {allDataList
        .filter(
          (card) =>
            (card.id === "13" || card.id === "14") &&
            (selectedRadioButton === "" || card.status === selectedRadioButton),
        )
        .map((card) => (
          <DonationPostCard
            id={card.id}
            typeOfRequest={card.typeOfRequest}
            datePosted={card.datePosted}
            status={card.status}
            stcategory={card.stcategory}
            supply={card.supply}
            stquantity={card.stquantity}
          ></DonationPostCard>
        ))}
      {allDataList
        .filter(
          (card) =>
            (card.id === "15" || card.id === "16") &&
            (selectedRadioButton === "" || card.status === selectedRadioButton),
        )
        .map((card) => (
          <DonationPostCard
            id={card.id}
            typeOfRequest={card.typeOfRequest}
            datePosted={card.datePosted}
            status={card.status}
            toyage={card.toyage}
            toycategory={card.toycategory}
            toygender={card.toygender}
            toyname={card.toyname}
            toyquantity={card.toyquantity}
          ></DonationPostCard>
        ))}
      {allDataList
        .filter(
          (card) =>
            card.id === "17" &&
            (selectedRadioButton === "" || card.status === selectedRadioButton),
        )
        .map((card) => (
          <DonationPostCard
            id={card.id}
            typeOfRequest={card.typeOfRequest}
            datePosted={card.datePosted}
            status={card.status}
            medcategory={card.medcategory}
            medicationname={card.medicationname}
            medquantity={card.medquantity}
          ></DonationPostCard>
        ))}
    </div>
  );
}

const AllDataLoader = async () => {
  const res = await fetch("http://localhost:4000/AllData");
  return res.json();
};
export { ViewDonationPostsWebpage, AllDataLoader };
