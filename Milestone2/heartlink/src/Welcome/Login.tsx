import "./Login.css";
import InputBox from "../components/InputBox/InputBox.tsx";
import minilogo from "../assets/minilogo.png";
import { IoClose } from "react-icons/io5";
import { hideLogin } from "./BackgroundPhoto.tsx";
function Login() {
  return (
    <div className="login">
      <div className="topOfLogin">
        <img src={minilogo} />
        <IoClose className="xLogin" onClick={hideLogin} />
      </div>
      <h1>Login</h1>
      <form>
        <InputBox type={"text"} label={"Username"} width={"370px"} />

        <InputBox type={"password"} label={"Password"} width={"370px"} />

        <button type="submit">Login</button>
      </form>
    </div>
  );
}

export default Login;
