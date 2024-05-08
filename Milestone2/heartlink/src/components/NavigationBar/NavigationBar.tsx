import img from "../../assets/logo.png";
import "./NavigationBar.css";

interface NavigationBarProps {
  leftDiv?: React.ReactNode;
  rightDiv?: React.ReactNode;
}

function NavigationBar({ leftDiv, rightDiv }: NavigationBarProps) {
  return (
    <nav className="navigation-bar">
      <div className="leftDiv">{leftDiv}</div>
      <div className="middleDiv">
        <img src={img} draggable="false" className="logonav" alt={"icon"} />
      </div>
      <div className="rightDiv">{rightDiv}</div>
    </nav>
  );
}

export default NavigationBar;
