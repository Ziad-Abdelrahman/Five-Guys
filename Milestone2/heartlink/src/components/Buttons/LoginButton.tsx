import "./Buttons.css";

interface LoginButtonProps {
  text?: string;
  height?: string;
  handleClick?: () => void;
}
function LoginButton({ text, height, handleClick }: LoginButtonProps) {
  const showLogin = () => {
    var login = document.querySelector(".login") as HTMLElement;
    var welcome = document.querySelector(".welcomeDashboard") as HTMLElement;
    var app = document.querySelector(".app") as HTMLElement;
    login.style.display = "flex";
    welcome.classList.add("shade");
    app.classList.add("shade");
    if (handleClick) handleClick();
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
