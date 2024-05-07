import "../NavigationBar.css";
import OrgLeftDiv from "./OrgLeftDiv";
import OrgRightDiv from "./OrgRightDiv";
import NavigationBar from "../NavigationBar.tsx";

function OrgNavgBar() {
  return (
    <NavigationBar leftDiv={<OrgLeftDiv />} rightDiv={<OrgRightDiv />} />
  );
}

export default OrgNavgBar;