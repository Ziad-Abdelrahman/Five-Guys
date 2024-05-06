import Profilecircle from "./Profilecircle";
import { IoNotificationsOutline } from "react-icons/io5";
import { TbTruckDelivery } from "react-icons/tb";
import { useState } from "react";
import { BsEnvelopeOpenHeart } from "react-icons/bs";

import "./OrgRightDiv.css";

function OrgRightDiv() {
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
            className="notification-icon"
            style={{ fontSize: "28px", marginRight: "40px", cursor: "pointer" }}
            onClick={toggleDropdown}
          />
          {showNotifications && (
            <div className="notifications-dropdown">
              <div className="notification-container">
                <div style={{ display: "flex", alignItems: "center", flex: 1 }}>
                  <BsEnvelopeOpenHeart className={"envelope-icon"} />
                  <p>Toys Donation fulfilled!</p>
                </div>
                <div
                  style={{
                    fontSize: "12px",
                    textAlign: "right",
                    marginTop: "5px",
                  }}
                >
                  Just Now
                </div>
              </div>
              <div className="notification-container">
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    flex: 1,
                    marginTop: "20px",
                  }}
                >
                  <TbTruckDelivery style={{ fontSize: "30px" }} />
                  <p>Your Driver arrived!</p>
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
              <div className="notification-container">
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    flex: 1,
                    marginTop: "10px",
                  }}
                >
                  <BsEnvelopeOpenHeart className={"envelope-icon"} />
                  <p>Blood Donation fulfilled!</p>
                </div>
                <div
                  style={{
                    fontSize: "12px",
                    textAlign: "right",
                    marginTop: "10px",
                  }}
                >
                  5 min ago
                </div>
              </div>
              <hr />
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
            <Profilecircle />
          </label>
          {/* Dropdown content that shows up when checkbox is checked */}
          <ul className="profiledropdownContent">
            <li>
              <a href="#">Account info</a>
            </li>
            <li>
              <a href="#">Settings</a>
            </li>
            <li>
              <a href="#">Logout</a>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default OrgRightDiv;
