import "./Login.css";
import InputBox from "../components/InputBox/InputBox.tsx";
import minilogo from "../assets/minilogo.png";
import { IoClose } from "react-icons/io5";
import { hideLogin } from "./BackgroundPhoto.tsx";
import { Link } from "react-router-dom";
import { useState } from "react";
import WrongPassword from "./WrongPassword.tsx";
function Login() {
  const [loginTo, setLoginTo] = useState("");
  const [wrong, setWrong] = useState(false);
  const handleGo = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.value === "donor") setLoginTo("/Donor");
    else if (e.target.value === "org") setLoginTo("/Organization");
    else if (e.target.value === "admin") setLoginTo("/Admin");
    else {
      setLoginTo("");
    }
  };

  const checkLogin = () => {
    if (loginTo === "") {
      setWrong(true);
      setTimeout(() => {
        setWrong(false);
      }, 3000);
    }
  };

  return (
    <div className="login">
      <div className="topOfLogin">
        <img src={minilogo} alt="logo" />
        <IoClose className="xLogin" onClick={hideLogin} />
      </div>
      <h1>Login</h1>

      <form>
        {wrong && <WrongPassword />}
        <InputBox type={"text"} label={"Username"} width={"370px"} />
        <InputBox
          type={"password"}
          label={"Password"}
          width={"370px"}
          onChange={handleGo}
        />
        <Link to={loginTo}>
          <button type="submit" onClick={checkLogin}>
            Login
          </button>
        </Link>
      </form>
    </div>
  );
}

export default Login;
