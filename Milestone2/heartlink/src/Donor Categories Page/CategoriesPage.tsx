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
  const donorType =
    type === "teacher" ? "/Teacher" : type === "doctor" ? "/Doctor" : "/Donor";
  return (
    <>
      <DonorNavigationBar type={type} />
      <HeadOfSection title="Donation Categories" />
      <div className="card-container">
        <div className="three-cards-holder">
          <Category
            image={clothes}
            title="Clothing"
            forwardPath={donorType + "/ClothingRequests"}
          />
          <Category
            image={food}
            title="Food"
            forwardPath={donorType + "/FoodRequests"}
          />
          <Category
            image={Toys}
            title="Toys"
            forwardPath={donorType + "/ToysRequests"}
          />
        </div>
        <div className="three-cards-holder">
          <Category
            image={medication}
            title="Medications"
            forwardPath={donorType + "/MedicationRequests"}
          />
          <Category
            image={SchoolsSupplies}
            title="School Supplies"
            forwardPath={donorType + "/SchoolRequests"}
          />
          <Category
            image={blood}
            title="Blood Donation"
            forwardPath={donorType + "/BloodRequests"}
          />
        </div>
      </div>
    </>
  );
}

export default CategoriesPage;
