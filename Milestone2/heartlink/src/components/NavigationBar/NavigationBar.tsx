import img from "../../assets/logo.png";
import "./NavigationBar.css";
import { Link } from "react-router-dom";

interface NavigationBarProps {
  leftDiv?: React.ReactNode;
  rightDiv?: React.ReactNode;
  dashboard: string;
}

function NavigationBar({ leftDiv, rightDiv, dashboard }: NavigationBarProps) {
  return (
    <nav className="navigation-bar">
      <div className="leftDiv">{leftDiv}</div>
      <div className="middleDiv">
        <Link to={dashboard}>
          <img
            src={img}
            draggable="false"
            className="logoNavBar"
            alt={"icon"}
          />
        </Link>
      </div>
      <div className="rightDiv">{rightDiv}</div>
    </nav>
  );
}

export default NavigationBar;
