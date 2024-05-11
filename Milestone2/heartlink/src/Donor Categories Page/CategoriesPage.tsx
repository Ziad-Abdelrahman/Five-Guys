import Category from "../components/Categories Section/CategoryCard.tsx";
import clothes from "../assets/ClothesCategory.png";
import medication from "../assets/Medications.jpeg";
import food from "../assets/Food.jpeg";
import SchoolsSupplies from "../assets/School.jpeg";
import Toys from "../assets/Toys.jpeg";
import blood from "../assets/blood.jpeg";
import DonorNavigationBar from "../components/NavigationBar/Donor Navigation Bar/DonorNavigationBar.tsx";
import HeadOfSection from "../components/Header/HeaderOfSection.tsx";
import "./DonorCategories.css";

interface CategoriesPageProps {
  type?: string;
}

function CategoriesPage({ type }: CategoriesPageProps) {
  return (
    <>
      <DonorNavigationBar type={type} />
      <HeadOfSection title="Donation Categories" />
      <div className="card-container">
        <div className="three-cards-holder">
          <Category
            image={clothes}
            title="Clothing"
            forwardPath={"/Donor/ClothingRequests"}
          />
          <Category
            image={food}
            title="Food"
            forwardPath={"/Donor/FoodRequests"}
          />
          <Category
            image={Toys}
            title="Toys"
            forwardPath={"/Donor/ToysRequests"}
          />
        </div>
        <div className="three-cards-holder">
          <Category
            image={medication}
            title="Medications"
            forwardPath={"/Donor/MedicationRequests"}
          />
          <Category
            image={SchoolsSupplies}
            title="School Supplies"
            forwardPath={"/Donor/SchoolRequests"}
          />
          <Category
            image={blood}
            title="Blood Donation"
            forwardPath={"/Donor/BloodRequests"}
          />
        </div>
      </div>
    </>
  );
}

export default CategoriesPage;
