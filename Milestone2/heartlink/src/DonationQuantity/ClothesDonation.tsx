import DonationParent from "./DonationParent.tsx";
import './Donate.css';
import DonationPic from "../assets/DonationGeneral.jpeg";
function ClothesDonation(){

    return(
        <>
        <DonationParent>
           <h1> You're helping Warmth and Wear</h1>
           <p> Your contribution supports the Local Shelter Network</p>
            <img src={DonationPic} alt="Donation box"/>
        </DonationParent>
        </>
    );


}

export default ClothesDonation;