import LeftPanel from "./LeftPanel.tsx";
import RightPanel from "./RightPanel.tsx";
import "./Template1.css";
import React from "react";

interface templateProps {
  leftPanelDiv: React.ReactNode;
  rightPanelDiv: React.ReactNode;
  rightPanelButtonText: string;
  hasButton?: boolean;
  forwardPath: string;
  backButtonPath?: string;
}

function Template1({
  leftPanelDiv,
  rightPanelDiv,
  rightPanelButtonText,
  hasButton,
  forwardPath,
  backButtonPath,
}: templateProps) {
  return (
    <div className="main">
      <LeftPanel>{leftPanelDiv}</LeftPanel>
      <RightPanel
        text={rightPanelButtonText}
        hasBackButton={hasButton}
        forwardPath={forwardPath}
        backwardPath={backButtonPath}
      >
        {rightPanelDiv}
      </RightPanel>
    </div>
  );
}

export default Template1;
