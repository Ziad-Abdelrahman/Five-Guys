import "../NavigationBar.css";
import DonorLeftDiv from "./DonorLeftDiv";
import DonorRightDiv from "./DonorRightDiv";
import NavigationBar from "../NavigationBar.tsx";

interface DonorNavigationBarProps {
  type?: string;
}

function DonorNavigationBar({ type }: DonorNavigationBarProps) {
  const donorType =
    type === "teacher" ? "/Teacher" : type === "doctor" ? "/Doctor" : "/Donor";
  return (
    <NavigationBar
      leftDiv={<DonorLeftDiv type={type} />}
      rightDiv={<DonorRightDiv type={donorType} />}
      dashboard={donorType}
    />
  );
}

export default DonorNavigationBar;
