import BackButton from "../components/Buttons/BackButton.tsx";
import Button from "../components/Buttons/Button.tsx";
import "./RightPanel.css";

interface RightPanelProps {
  text: string;
  children: React.ReactNode;
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
