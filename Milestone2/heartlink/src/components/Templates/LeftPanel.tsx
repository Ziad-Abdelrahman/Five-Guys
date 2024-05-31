import logo from "../../assets/minilogo.png";
import "./LeftPanel.css";
import { ReactNode } from "react";
import { Link } from "react-router-dom";

interface CreateProcessStepsProps {
  children?: ReactNode;
}

function LeftPanel({ children }: CreateProcessStepsProps) {
  return (
    <div className="leftPart">
      <div
        className="logo-container"
        style={{ display: "flex", alignItems: "start" }}
      >
        <Link to="/Organization" className="noLink">
          <img src={logo} className="logo" alt="logo" />
        </Link>
      </div>
      {children}
    </div>
  );
}
export default LeftPanel;
