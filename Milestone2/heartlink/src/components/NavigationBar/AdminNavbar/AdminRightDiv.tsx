import ProfileCircle from "../ProfileCircle.tsx";

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
            <ProfileCircle initials={"MH"} />
          </label>
          {/* Dropdown content that shows up when checkbox is checked */}
          <ul className="profiledropdownContent">
            <li>
              <a href="/Admin/ChangePass">Change Password</a>
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
