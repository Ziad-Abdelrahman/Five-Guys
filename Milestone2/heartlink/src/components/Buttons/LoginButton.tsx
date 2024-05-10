import "./Buttons.css";
const showLogin = () => {
  var login = document.querySelector(".login") as HTMLElement;
  var welcome = document.querySelector(".welcomeDashboard") as HTMLElement;
  var app = document.querySelector(".app") as HTMLElement;
  login.style.display = "flex";
  welcome.classList.add("shade");
  app.classList.add("shade");
};
interface LoginButtonProps {
  text?: string;
  height?: string;
}
function LoginButton({ text, height }: LoginButtonProps) {
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
