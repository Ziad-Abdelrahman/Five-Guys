import BackButton from "../Buttons/BackButton.tsx";
import Button from "../Buttons/Button.tsx";
import "./RightPanel.css";
import { ReactNode } from "react";
import { Link } from "react-router-dom";

interface RightPanelProps {
  text: string;
  path: string;
  children: ReactNode;
  hasBackButton?: boolean;
}

function RightPanel({ children, text, hasBackButton, path }: RightPanelProps) {
  return (
    <div className="rightPanel-container">
      {children}
      <div className="footer">
        <div className="footerButtons-container">
          <Link to={path}>
            <Button text={text} />{" "}
          </Link>
          {hasBackButton && <BackButton />}
        </div>
      </div>
    </div>
  );
}

export default RightPanel;
