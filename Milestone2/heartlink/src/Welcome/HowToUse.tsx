import minilogo from "../assets/minilogo.png";
import { IoClose } from "react-icons/io5";
import { hideLogin } from "./BackgroundPhoto.tsx";
import "./Login.css";
import { ReactNode } from "react";
interface LoginProps {
  message: ReactNode;
  id: string;
}
const stop = (e: any) => {
  e.stopPropagation();
};
function HowToUse({ message, id }: LoginProps) {
  return (
    <div className="howto-container" onClick={hideLogin} id={id}>
      <div className="howto" onClick={stop}>
        <div className="topOfLogin">
          <img src={minilogo} alt="logo" />
          <IoClose className="xLogin" onClick={hideLogin} />
        </div>
        <h1>How To Use</h1>
        <div className="howtoText">{message}</div>
      </div>
    </div>
  );
}

export default HowToUse;
