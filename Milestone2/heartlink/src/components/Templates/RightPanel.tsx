import BackButton from "../Buttons/BackButton.tsx";
import Button from "../Buttons/Button.tsx";
import "./RightPanel.css";
import { ReactNode } from "react";
import { Link, useNavigate } from "react-router-dom";

interface RightPanelProps {
  text: string;
  backwardPath?: string;
  children: ReactNode;
  forwardPath: string;
  hasBackButton?: boolean;
  handleClick?: () => boolean;
}

function RightPanel({
  children,
  text,
  hasBackButton,
  backwardPath,
  forwardPath,
  handleClick,
}: RightPanelProps) {
  let navigate = useNavigate();
  const routeChange = () => {
    if (handleClick && !handleClick()) return;
    if (text === "Next") {
      let path = forwardPath;
      navigate(path);
    }
  };

  return (
    <div className="rightPanel-container">
      {children}
      <div className="footer">
        <div className="footerButtons-container">
          <Button text={text} handleClick={routeChange} />
          {hasBackButton && backwardPath && (
            <Link to={backwardPath}>
              <BackButton />
            </Link>
          )}
        </div>
      </div>
    </div>
  );
}

export default RightPanel;