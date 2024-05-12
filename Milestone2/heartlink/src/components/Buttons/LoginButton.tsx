import "./Buttons.css";

interface LoginButtonProps {
  text?: string;
  height?: string;
}
function LoginButton({ text, height }: LoginButtonProps) {
  const showLogin = () => {
    var login = document.querySelector(".login-container") as HTMLElement;
    login.style.display = "flex";
  };
  return (
    <button
      className="loginButton"
      onClick={showLogin}
      style={{ height: height }}
    >
      {text ? text : "Login"}
    </button>
  );
}

export default LoginButton;
