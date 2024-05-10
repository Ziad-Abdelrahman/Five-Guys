import { useState } from "react";
import { IoNotificationsOutline } from "react-icons/io5";
import { TbTruckDelivery } from "react-icons/tb";
import { Link } from "react-router-dom";
import ProfileCircle from "../ProfileCircle.tsx";

function DonorRightDiv() {
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
            <div className="donor-notifications-dropdown">
              <div className="donor-notification-container-inside-dropdown">
                <div style={{ display: "flex", alignItems: "center", flex: 1 }}>
                  <TbTruckDelivery style={{ fontSize: "30px" }} />
                  <p>Driver Arrived!</p>
                </div>
                <div
                  style={{
                    fontSize: "12px",
                    textAlign: "right",
                    marginTop: "20px",
                  }}
                >
                  10 min ago
                </div>
              </div>
              <hr />
              <div
                className="donor-notification-container-inside-dropdown"
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

                  <span>Driver Is On the Way!</span>
                  <span className="tooltipText">ETA:10 Minutes</span>
                </div>
                <div
                  style={{
                    fontSize: "12px",
                    textAlign: "right",
                    marginTop: "20px",
                  }}
                >
                  20 min ago
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
            <ProfileCircle initials={"AA"} />
          </label>
          {/* Dropdown content that shows up when checkbox is checked */}
          <ul className="profiledropdownContent">
            <li>
              <Link to={"AccountInfo"}>Account info</Link>
            </li>
            <li>
              <Link to={"/"}> Logout</Link>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default DonorRightDiv;
