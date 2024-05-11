import "./RejectedPopup.css";
import { useEffect } from "react";
type AcceptedPopupProps = {
  text1: string;
};
function RejectedPopup({ text1 }: AcceptedPopupProps) {
  useEffect(() => {
    setTimeout(() => {
      document.querySelector(".rejected-popup")?.classList.add("hidden");
      setTimeout(() => {
        document.querySelector(".rejected-popup")?.remove();
      }, 500);
    }, 5000);
  }, []);
  return <div className="rejected-popup">{text1}</div>;
}

export default RejectedPopup;
