import "../NavigationBar.css";
import DonorLeftDiv from "./DonorLeftDiv";
import DonorRightDiv from "./DonorRightDiv";
import NavigationBar from "../NavigationBar.tsx";

function DonorNavigationBar() {
  return (
    <NavigationBar leftDiv={<DonorLeftDiv />} rightDiv={<DonorRightDiv />} />
  );
}

export default DonorNavigationBar;
