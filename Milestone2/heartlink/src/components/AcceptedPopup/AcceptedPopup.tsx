import "./AcceptedPopup.css";
import { useEffect } from "react";
type AcceptedPopupProps = {
  text1: string;
};
function AcceptedPopup({ text1 }: AcceptedPopupProps) {
  useEffect(() => {
    setTimeout(() => {
      document.querySelector(".accepted-popup")?.classList.add("hidden");
      setTimeout(() => {
        document.querySelector(".accepted-popup")?.remove();
      }, 500);
    }, 5000);
  }, []);
  return <div className="accepted-popup">{text1}</div>;
}

export default AcceptedPopup;
