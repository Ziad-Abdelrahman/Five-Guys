
import { Link } from "react-router-dom";
import Profilecircle from "./Profilecircle";


function AdminRightDiv() {


  return (
    <>
      <div
        style={{ display: "flex", flexDirection: "row", alignItems: "center" }}
      >
       

        {/*profile picture drop down*/}
        <div className="profiledropdown">
          {/* Hidden checkbox */}
          <input
            type="checkbox"
            id="dropdownCheckbox"
            className="dropdownCheckbox"
            style={{ display: "none" }}
          />
          {/* Label for the checkbox, which will be the clickable area */}
          <label htmlFor="dropdownCheckbox" className="profileCircleContainer">
            <Profilecircle />
          </label>
          {/* Dropdown content that shows up when checkbox is checked */}
          <ul className="profiledropdownContent">
            <li>
              <a href="/admin/ChangePass">Change Password</a>
            </li>
            <li>
              <a href="/">Logout</a>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default AdminRightDiv;