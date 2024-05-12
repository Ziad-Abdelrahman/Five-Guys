import "../NavigationBar.css";
import DonorLeftDiv from "./DonorLeftDiv";
import DonorRightDiv from "./DonorRightDiv";
import NavigationBar from "../NavigationBar.tsx";
import HowToUse from "../../../Welcome/HowToUse.tsx";

interface DonorNavigationBarProps {
  type?: string;
}
const howtomsg = (
  <>
    <p>
      As a donor, you can view organizations and their requests. You can also
      donate items to organizations.
    </p>
    <p>
      1. Click on the "Organization" button to view all the available
      organizations and their details
    </p>
    <p>
      2. Click on the "View All donations" button to view organizations and
      their requests, then you can click on the "Donate" button to donate an
      item, or click on the "Learn More" button to view the organization's
      request details.
    </p>
    <p>
      3. Click on the "View Donations Categories" button to view all the
      available donation categories, then you can filter the donations further.
    </p>
    <p>4.As a Doctor or a teacher, I can apply for probono</p>
  </>
);
const showHowTo = () => {
  var howto = document.getElementById("howto") as HTMLElement;
  howto.style.display = "flex";
};
function DonorNavigationBar({ type }: DonorNavigationBarProps) {
  const donorType =
    type === "teacher" ? "/Teacher" : type === "doctor" ? "/Doctor" : "/Donor";
  return (
    <>
      <HowToUse message={howtomsg} id={"howto"} />
      <NavigationBar
        leftDiv={<DonorLeftDiv type={type} />}
        rightDiv={<DonorRightDiv type={donorType} help={showHowTo} />}
        dashboard={donorType}
      />
    </>
  );
}

export default DonorNavigationBar;
