import NavigationBar from "../../components/NavigationBar/NavigationBar.tsx";
import HeaderOfSection from "../../components/header/headerofsection.tsx";
import DonationPostCard from "../../components/Card/Organization Cards/DonationPostCard.tsx";

function ViewDonationPostsWebpage() {
  return (
    <div
      style={{ display: "flex", flexDirection: "column", alignItems: "center" }}
    >
      <NavigationBar />
      <HeaderOfSection title={"Donation Posts"} style={{ width: "1050px" }} />
      <DonationPostCard typeOfRequest={"Clothes"} />
    </div>
  );
}

export default ViewDonationPostsWebpage;
