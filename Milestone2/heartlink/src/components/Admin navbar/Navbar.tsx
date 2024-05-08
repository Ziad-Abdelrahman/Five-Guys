import NavigationBar from '../NavigationBar/NavigationBar';
import { Link } from 'react-router-dom';
import "./Navbar.css";
import arrow from "../../assets/right-arrow.png"
import Setting from '../../assets/settings_icon.png'
const left = (
  <div className="right">
     <div className="dropdown">
                <button className="dropbtn">List
                    <img className="arrow-in-button" src={arrow} alt="arrow"/>
                </button>
                <div className="dropdown-content">
                  <Link to="/ViewDonors">Donors List</Link>
                  <Link to="/ViewOrganizations">Organizations List</Link>
                </div>
      </div>
      <div className="dropdown">
                <button className="dropbtn">submissions
                    <img className="arrow-in-button" src={arrow} alt="arrow"/>
                </button>
                <div className="dropdown-content">
                  <Link to="/DonorSubmissions">Donor Submitions</Link>
                  <Link to="/OrganizationSubmissions">Organization Submissions</Link>
                </div>
      </div>
      <div className="dropdown">
                <button className="dropbtn">Requests
                    <img className="arrow-in-button" src={arrow} alt="arrow"/>
                </button>
                <div className="dropdown-content">
                  <Link to="/DonorRequests"> Donor Requests</Link>
                  <Link to="/OrganizationRequests">Organization Requests</Link>
                </div>
      </div>
      <div className="dropdown">
                <button className="dropbtn">Accounts
                    <img className="arrow-in-button" src={arrow} alt="arrow"/>
                </button>
                <div className="dropdown-content">
                  <Link to="/Donors"> Donor Accounts</Link>
                  <Link to="/Organizations">Organization Accounts</Link>
                </div>
      </div>
  </div>);

  const right = (
    <div className='right'>
      <h3 className='adminName'>Admin_Name</h3>
  <div className="profiledropdown">
  {/* Hidden checkbox */}
  <input type="checkbox" id="dropdownCheckbox" className="dropdownCheckbox" style={{display: 'none'}} />
  {/* Label for the checkbox, which will be the clickable area */}
  <label htmlFor="dropdownCheckbox" className="profileCircleContainer">
    <img className='img' src={Setting} alt="Setting"/>  
  </label>
  {/* Dropdown content that shows up when checkbox is checked */}
  <ul className="profiledropdownContent">
      <li><Link to="/ChangePass">Change Password</Link></li>
      <li><Link to="/login">Logout</Link></li>

  </ul>
</div>
</div>);


const Navbar = () => {
  return (
    <div>
          <NavigationBar leftDiv={left} rightDiv={right}/>

    </div>
  )
}
export default Navbar
