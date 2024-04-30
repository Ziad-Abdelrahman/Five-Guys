import BackButton from "../Buttons/BackButton.tsx";
import Button from "../Buttons/Button.tsx";
import "./RightPanel.css";
import { ReactNode } from "react";

interface RightPanelProps {
  text: string;
  children: ReactNode;
  hasBackButton?: boolean;
}

function RightPanel({ children, text, hasBackButton }: RightPanelProps) {
  return (
    <div className="rightPanel-container">
      {children}
      <div className="footer">
        <div className="footerButtons-container">
          <Button text={text} />
          {hasBackButton && <BackButton />}
        </div>
      </div>
    </div>
  );
}

export default RightPanel;
