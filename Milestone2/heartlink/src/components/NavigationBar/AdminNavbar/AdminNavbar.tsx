import "../NavigationBar.css";
import AdminLeftDiv from "./AdminLeftDiv.tsx";
import AdminRightDiv from "./AdminRightDiv.tsx";
import NavigationBar from "../NavigationBar.tsx";

function AdminNavbar() {
  return (
    <NavigationBar
      leftDiv={<AdminLeftDiv />}
      rightDiv={<AdminRightDiv />}
      dashboard={"/Admin"}
    />
  );
}

export default AdminNavbar;
