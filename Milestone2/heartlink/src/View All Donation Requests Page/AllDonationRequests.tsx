import NavigationBar from "../components/NavigationBar/Donor Navigation Bar/DonorNavigationBar.tsx";
import RequestCard from "../components/Requests Section/RequestCard.tsx";
import ResalaLogo from "../assets/Resala.png";
import ChildrenCancer from "../assets/57357.jpeg";
import FoodBank from "../assets/EgyptianFoodBank.png";
import Orman from "../assets/Orman.png";
import RedCresent from "../assets/Redcresent.png";
import Misrelkheir from "../assets/Misrelkheir.jpeg";

function AllDonationRequests(){
    return(
        <>
            <NavigationBar/>
            <div>
                <RequestCard image={FoodBank} description="Food Supplies" postedby="Food Bank" postdate={"20/3/2023"}/>
            </div>
        </>
    )

}

export default AllDonationRequests;