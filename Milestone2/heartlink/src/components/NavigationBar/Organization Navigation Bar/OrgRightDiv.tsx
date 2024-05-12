import { IoNotificationsOutline } from "react-icons/io5";
import { TbTruckDelivery } from "react-icons/tb";
import { useState } from "react";
import { BsEnvelopeOpenHeart } from "react-icons/bs";

import "./OrgRightDiv.css";
import { Link } from "react-router-dom";
import ProfileCircle from "../ProfileCircle.tsx";
interface OrgRightDivProps {
  help?: () => void;
}
function OrgRightDiv({ help }: OrgRightDivProps) {
  // State to manage the visibility of the notifications dropdown
  const [showNotifications, setNotifications] = useState(false);

  // Function to toggle the visibility of the dropdown
  const toggleDropdown = () => {
    setNotifications((prevState) => !prevState); // Correct toggle function
  };
  return (
    <>
      <div
        style={{ display: "flex", flexDirection: "row", alignItems: "center" }}
      >
        <div>
          <IoNotificationsOutline
            style={{ fontSize: "28px", marginRight: "40px", cursor: "pointer" }}
            className="notification-icon"
            onClick={toggleDropdown}
          />
          {showNotifications && (
            <div className="org-notifications-dropdown">
              <div className="org-notification-container-inside-dropdown">
                <div style={{ display: "flex", alignItems: "center", flex: 1 }}>
                  <BsEnvelopeOpenHeart className={"envelope-icon"} />
                  <p style={{ marginTop: "17px" }}>Toys Donation fulfilled!</p>
                </div>
                <div
                  style={{
                    fontSize: "12px",
                    textAlign: "right",
                    marginTop: "30px",
                    marginBottom: "10px",
                  }}
                >
                  Just Now
                </div>
              </div>
              <hr />
              <div
                className="org-notification-container-inside-dropdown"
                style={{ cursor: "pointer" }}
              >
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    flex: 1,
                    cursor: "pointer",
                  }}
                >
                  <TbTruckDelivery style={{ fontSize: "30px" }} />
                  <p style={{ marginTop: "17px" }}>Driver drop-off arrived!</p>
                </div>
                <div
                  style={{
                    fontSize: "12px",
                    textAlign: "right",
                    marginTop: "30px",
                    marginBottom: "10px",
                  }}
                >
                  10 min ago
                </div>
              </div>
              <hr />
              <div className="org-notification-container-inside-dropdown">
                <div style={{ display: "flex", alignItems: "center", flex: 1 }}>
                  <BsEnvelopeOpenHeart className={"envelope-icon"} />
                  <p style={{ marginTop: "17px" }}>Blood Donation fulfilled!</p>
                </div>
                <div
                  style={{
                    fontSize: "12px",
                    textAlign: "right",
                    marginTop: "30px",
                    marginBottom: "10px",
                  }}
                >
                  Just Now
                </div>
              </div>
            </div>
          )}
        </div>

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
            <ProfileCircle initials={"FF"} />
          </label>
          {/* Dropdown content that shows up when checkbox is checked */}
          <ul className="profiledropdownContent">
            <li>
              <Link to="/Organization/AccountInfo">Account info</Link>
            </li>
            <li>
              <a onClick={help}>Help</a>
            </li>
            <li>
              <Link to="/">Logout</Link>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default OrgRightDiv;
