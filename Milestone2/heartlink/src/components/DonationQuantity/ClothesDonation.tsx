import DonationParent from "./DonationParent.tsx";

function ClothesDonation() {
  return (
    <>
      <DonationParent
        description={
          "Your donation will bring warmth and comfort to someone in need."
        }
        type={"Clothes Donation"}
        maxValue={200}
      />
    </>
  );
}

export default ClothesDonation;
