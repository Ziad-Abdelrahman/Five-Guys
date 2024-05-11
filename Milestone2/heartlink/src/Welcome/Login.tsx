import "./Login.css";
import InputBox from "../components/InputBox/InputBox.tsx";
import minilogo from "../assets/minilogo.png";
import { IoClose } from "react-icons/io5";
import { hideLogin } from "./BackgroundPhoto.tsx";
import { Form } from "react-router-dom";
import { useState } from "react";
import WrongPassword from "./WrongPassword.tsx";
import CorrectPassword from "./CorrectPassword.tsx";
function Login() {
  const [loginTo, setLoginTo] = useState("");
  const [wrong, setWrong] = useState(false);
  const [correct, setCorrect] = useState(false);
  const handleGo = (e: React.ChangeEvent<HTMLInputElement>) => {
    setWrong(false);
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
    } else {
      setCorrect(true);
      setTimeout(() => {
        console.log(loginTo);
        window.location.href = loginTo;
      }, 1000);
    }
  };

  return (
    <div className="login">
      <div className="topOfLogin">
        <img src={minilogo} alt="logo" />
        <IoClose className="xLogin" onClick={hideLogin} />
      </div>
      <h1>Login</h1>

      <Form onSubmit={checkLogin}>
        {wrong && <WrongPassword />}
        {correct && <CorrectPassword />}
        <InputBox
          type={"text"}
          label={"Username"}
          width={"370px"}
          required={true}
        />
        <InputBox
          type={"password"}
          label={"Password"}
          width={"370px"}
          onChange={handleGo}
          required={true}
        />
        <button type="submit">Login</button>
      </Form>
    </div>
  );
}

export default Login;
