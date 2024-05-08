import BackButton from "../Buttons/BackButton.tsx";
import Button from "../Buttons/Button.tsx";
import "./RightPanel.css";
import { ReactNode } from "react";
import { Link } from "react-router-dom";

interface RightPanelProps {
  text: string;
  backwardPath?: string;
  children: ReactNode;
  hasBackButton?: boolean;
  handleClick?: () => void;
}

function RightPanel({
  children,
  text,
  hasBackButton,
  backwardPath,
  handleClick,
}: RightPanelProps) {
  return (
    <div className="rightPanel-container">
      {children}
      <div className="footer">
        <div className="footerButtons-container">
          <Button text={text} handleClick={handleClick} />
          {hasBackButton && backwardPath && (
            <Link to={backwardPath}>
              <BackButton />{" "}
            </Link>
          )}
        </div>
      </div>
    </div>
  );
}

export default RightPanel;
