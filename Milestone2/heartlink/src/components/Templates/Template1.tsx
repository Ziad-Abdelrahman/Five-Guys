import LeftPanel from "./LeftPanel.tsx";
import RightPanel from "./RightPanel.tsx";
import "./Template1.css";
import React from "react";

interface templateProps {
  leftPanelDiv: React.ReactNode;
  rightPanelDiv: React.ReactNode;
  rightPanelButtonText: string;
  hasButton?: boolean;
}

function Template1({
  leftPanelDiv,
  rightPanelDiv,
  rightPanelButtonText,
  hasButton,
}: templateProps) {
  return (
    <div className="main">
      <LeftPanel>{leftPanelDiv}</LeftPanel>
      <RightPanel text={rightPanelButtonText} hasBackButton={hasButton}>
        {rightPanelDiv}
      </RightPanel>
    </div>
  );
}

export default Template1;
