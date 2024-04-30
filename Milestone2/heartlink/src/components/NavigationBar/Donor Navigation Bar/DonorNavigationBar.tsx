import img from "../../../assets/logo.png";
import "../NavigationBar.css";
import DonorLeftDiv from "./DonorLeftDiv";
import DonorRightDiv from "./DonorRightDiv";



function NavigationBar() {
  return (
    <nav className="donor-navigation-bar">
      <div className="leftDiv"><DonorLeftDiv/></div>
      <div className="middleDiv">
        <img src={img} draggable="false" className="logo" alt={"icon"} />
      </div>
      <div className="rightDiv"><DonorRightDiv/></div>
    </nav>
  );
}

export default NavigationBar;
