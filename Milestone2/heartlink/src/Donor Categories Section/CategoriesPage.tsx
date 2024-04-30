import Category from "../components/Categories Section/CategoryCard.tsx";
import clothes from '../assets/ClothesCategory.png';
import medication from '../assets/Medications.jpeg';
import food from '../assets/Food.jpeg';
import SchoolsSupplies from '../assets/School.jpeg';
import Toys from '../assets/Toys.jpeg';
import blood from '../assets/blood.jpeg'
import DonorNavigationBar from "../components/NavigationBar/DonorNavigationBar.tsx";
import HeadOfSection from "../components/header/headerofsection.tsx";
import './DonorCategories.css'

function CategoriesPage(){

    return(
       <>

       <DonorNavigationBar  />
       <HeadOfSection title="Donation Categories" />
                <div className="card-container">

                    <div className= "three-cards-holder">
                        <Category image={clothes} title="Clothing"/>
                        <Category image={food} title="Food"/>
                        <Category image={Toys} title="Toys"/>
                    </div>
                    <div className= "three-cards-holder">
                        <Category image={medication} title="Medications"/>
                        <Category image={SchoolsSupplies} title="School Supplies"/>
                        <Category image={blood} title="Blood Donation"/>
                    </div>

                </div>

       </>
    );

}

export default CategoriesPage;