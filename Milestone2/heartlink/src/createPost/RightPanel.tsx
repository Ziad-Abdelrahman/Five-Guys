import BackButton from "../components/Buttons/BackButton.tsx";
import Button from "../components/Buttons/Button.tsx";
import "./RightPanel.css";

interface RightPanelProps {
  text: string;
  children: React.ReactNode;
}

function RightPanel({ children, text }: RightPanelProps) {
  return (
    <div className="rightPanel-container">
      {children}
      <div className="footer">
        <div className="footerButtons-container">
          <BackButton />
          <Button text={text} />
        </div>
      </div>
    </div>
  );
}

export default RightPanel;
