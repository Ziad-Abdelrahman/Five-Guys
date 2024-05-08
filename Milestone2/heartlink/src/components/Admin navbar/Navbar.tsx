import NavigationBar from "../NavigationBar/NavigationBar";
import AcceptRejectButton from "../Buttons/AcceptRejectButton";
import { Link } from "react-router-dom";
import "./Navbar.css";
const left = (
  <div className="right">
    <div className="listItems">
      <Link to="/Donors">Donors</Link>
      <Link to="/Organizations">Organizations</Link>
      <Link to="/Requests">Requests</Link>
    </div>
  </div>
);
const right = (
  <div className="left">
    <div className="listItems">
      <Link to="/changePassword">Change Password</Link>
    </div>
    <AcceptRejectButton text="Logout" />
  </div>
);

const Navbar = () => {
  return (
    <div>
      <NavigationBar leftDiv={left} rightDiv={right} />
    </div>
  );
};

export default Navbar;
