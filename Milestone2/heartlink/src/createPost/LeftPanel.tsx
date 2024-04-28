import logo from "../assets/minilogo.png";
import "./LeftPanel.css";

interface CreateProcessStepsProps {
  children?: React.ReactNode;
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
