import logo from "../../assets/minilogo.png";
import "./LeftPanel.css";
import { ReactNode } from "react";

interface CreateProcessStepsProps {
  children?: ReactNode;
}

function LeftPanel({ children }: CreateProcessStepsProps) {
  return (
    <div className="leftPart">
      <div className="logo-container">
        <img src={logo} className="logo" alt="logo" />
      </div>
      {children}
    </div>
  );
}
export default LeftPanel;
