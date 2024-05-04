import NavigationBar from "../../components/NavigationBar/NavigationBar.tsx";
import DonationPostCard from "../../components/Card/Organization Cards/DonationPostCard.tsx";
import SchoolSuppliesFilter from "../../components/DonorFilterCard/SchoolSuppliesFilter.tsx";
import filtericon from "../../assets/filter-icon.png";
import HeaderOfSection from "../../components/Header/HeaderOfSection.tsx";
import "../../Donation Requests Page/AllDonationRequests.css";
import { useState } from "react";

function ViewDonationPostsWebpage() {
  const [selectedRadioButton, setSelectedRadioButton] = useState("");
  function handleRadioButtonChange(status: string) {
    status === "All"
      ? setSelectedRadioButton("")
      : setSelectedRadioButton(status);
  }
  const cardData = [
    {
      typeOfRequest: "Book",
      datePosted: "20/04/2024",
      children: (
        <>
          <p>Book Name: H is for Hope</p>
          <p>Author Name: Elizabeth Kolbert</p>
          <p>Language: English</p>
          <p>Edition: First</p>
          <p>Copies: 1</p>
        </>
      ),

      status: "Pending",
    },
    {
      typeOfRequest: "Clothes",
      datePosted: "12/04/2024",
      children: (
        <>
          <p>Age: Adults</p>
          <p>Gender: Male</p>
          <p>Kind: Sweaters</p>
          <p>Season: Winter</p>
          <p>Material: Velvet</p>
          <p>Size: Large</p>
          <p>Pieces: 2</p>
        </>
      ),
      status: "Fulfilled",
    },
    {
      typeOfRequest: "Food",
      datePosted: "01/05/2024",
      children: (
        <>
          <p>Category: Bakery</p>
          <p>Item: Muffins</p>
          <p>Quantity: 3</p>
        </>
      ),
      status: "Pending",
    },
    {
      typeOfRequest: "Stationary",
      datePosted: "25/04/2024",
      children: (
        <>
          <p>Category: Calculators and Math Supplies</p>
          <p>Item: Scientific Calculator</p>
          <p>Quantity: 1</p>
        </>
      ),
      status: "Fulfilled",
    },
    {
      typeOfRequest: "Medical Equipment",
      datePosted: "19/04/2024",
      children: (
        <>
          <p>Category: Diagnostic</p>
        </>
      ),
      status: "Fulfilled",
    },
    {
      typeOfRequest: "Medical Tools",
      datePosted: "23/04/2024",
      children: (
        <>
          <p>Tool: Endoscope</p>
        </>
      ),
      status: "Pending",
    },
    {
      typeOfRequest: "Medication",
      datePosted: "10/04/2024",
      children: (
        <>
          <p>Category: Antibiotics</p>
          <p>Name: Augmentin</p>
          <p>Quantity: 3</p>
        </>
      ),
      status: "Fulfilled",
    },
    {
      typeOfRequest: "Toys",
      datePosted: "29/04/2024",
      children: (
        <>
          <p>Age Group: 5-7 years</p>
          <p>Category: Dolls and Stuffed Animals</p>
          <p>Gender: Girl</p>
          <p>Name: Barbie</p>
          <p>Quantity: 3</p>
        </>
      ),
      status: "Pending",
    },
    {
      typeOfRequest: "Clothes",
      datePosted: "30/04/2024",
      children: (
        <>
          <p>Age : Infants</p>
          <p>Gender: Female</p>
          <p>Kind: Skirts</p>
          <p>Season: Summer</p>
          <p>Material: Linen</p>
          <p>Size: Small</p>
          <p>Pieces: 1</p>
        </>
      ),
      status: "Fulfilled",
    },
    {
      typeOfRequest: "Book",
      datePosted: "03/04/2024",
      children: (
        <>
          <p>Book Name: Neighbors and Other Stories</p>
          <p>Author Name: Diane Oliver</p>
          <p>Language: English</p>
          <p>Edition: First</p>
          <p>Copies: 2</p>
        </>
      ),
      status: "Pending",
    },
    {
      typeOfRequest: "Food",
      datePosted: "15/04/2024",
      children: (
        <>
          <p>Category: Fruits</p>
          <p>Item: Apples</p>
          <p>Quantity: 4 kg</p>
        </>
      ),
      status: "Fulfilled",
    },
    {
      typeOfRequest: "Toys",
      datePosted: "29/04/2024",
      children: (
        <>
          <p>Age Group: 13+ years</p>
          <p>Category: Puzzles and Brain Teasers</p>
          <p>Gender: Boy</p>
          <p>Name: Crosswords</p>
          <p>Quantity: 2</p>
        </>
      ),
      status: "Pending",
    },
  ];
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
          buttonName2={"Pending"}
          buttonName3={"Fulfilled"}
          filterChange={handleRadioButtonChange}
        />
      </div>
      {cardData
        .filter(
          (card) =>
            selectedRadioButton === "" || card.status === selectedRadioButton,
        )

        .map((card) => (
          <DonationPostCard
            typeOfRequest={card.typeOfRequest}
            datePosted={card.datePosted}
            status={card.status}
          >
            {card.children}
          </DonationPostCard>
        ))}
    </div>
  );
}

export default ViewDonationPostsWebpage;
