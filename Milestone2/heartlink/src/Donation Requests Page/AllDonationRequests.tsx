import NavigationBar from "../components/NavigationBar/Donor Navigation Bar/DonorNavigationBar.tsx";
import "./AllDonationRequests.css";
import ResalaLogo from "../assets/Resala.png";
import ChildrenCancer from "../assets/57357.jpeg";
import FoodBank from "../assets/EgyptianFoodBank.png";
import Orman from "../assets/Orman.png";
import RedCresent from "../assets/Redcrescent.png";
import Misrelkheir from "../assets/Misrelkheir.jpeg";
import Turin from "../assets/Turin.jpg";
import ClothingBank from "../assets/Clothingbank.png";
import MagdyYakoub from "../assets/MagdyYakoub.png";
import DonationRequestCard from "../components/Card/DonationRequestCard.tsx";
import Search from "../components/Search/Search.tsx";
import Headerofsection from "../components/Header/HeaderOfSection.tsx";
import { useState } from "react";

function AllDonationRequests() {
  const viewData = [
    {
      id: "1",
      image: ResalaLogo,
      description: "Clothes Supplies",
      postedby: "Resala Charity Foundation",
      postdate: "25/ 4/2024",
    },
    {
      id: "2",
      image: FoodBank,
      description: "Food Supplies",
      postedby: "Food Bank",
      postdate: "20/3/2023",
    },
    {
      id: "3",
      image: Misrelkheir,
      description: "Clothes",
      postedby: "Misr El Kheir",
      postdate: "29/3/2024",
    },
    {
      id: "4",
      image: RedCresent,
      description: "Medicine Supplies",
      postedby: "Red Cresent",
      postdate: "20/3/2024",
    },
    {
      id: "5",
      image: ChildrenCancer,
      description: "Toys ",
      postedby: "57357",
      postdate: "20/4/2024",
    },
    {
      id: "6",
      image: Orman,
      description: "Food Supplies",
      postedby: "EL Orman",
      postdate: "27/3/2024",
    },
    {
      id: "7",
      image: Turin,
      description: "Clothes",
      postedby: "Turin Organization",
      postdate: "27/3/2024",
    },
    {
      id: "8",
      image: RedCresent,
      description: "Blood Donation",
      postedby: "Red Cresent",
      postdate: "29/3/2024",
    },
    {
      id: "9",
      image: MagdyYakoub,
      description: "Medical Supplies",
      postedby: "Magdy Yakoub Heart Foundation",
      postdate: "29/3/2024",
    },
    {
      id: "10",
      image: ClothingBank,
      description: "Clothes Donation",
      postedby: "Egyptain Clothing Bank",
      postdate: "30/4/2024",
    },
  ];

  const [search, setSearch] = useState("");

  const handleSearch = (written: string) => {
    setSearch(written);
  };
  // @ts-ignore
  return (
    <>
      <NavigationBar />

      <Headerofsection
        title="All Donation Requests"
        smallDivStyle={{
          display: "flex",
          justifyContent: "space-between",
          width: "100%",
        }}
        children={<Search handleSearch={handleSearch} />}
      />

      <div className="requests-conainer">
        {viewData
          .filter((item) => item.description.toLowerCase().includes(search))
          .map((viewData) => (
            <DonationRequestCard
              key={viewData.id}
              description={viewData.description}
              postedby={viewData.postedby}
              postdate={viewData.postdate}
              image={viewData.image}
            />
          ))}
      </div>
    </>
  );
}

export default AllDonationRequests;
