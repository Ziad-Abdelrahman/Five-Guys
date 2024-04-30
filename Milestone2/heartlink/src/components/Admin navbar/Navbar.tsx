import React from 'react'
import NavigationBar from '../NavigationBar/NavigationBar';
import AcceptRejectButton from '../Buttons/AcceptRejectButton';
import "./Navbar.css";
const left = (
  <div className="right">
    <div className='listItems'>
    <a href="/Donors">Donors</a>
    <a href="/Organizations">Organizations</a>
    <a href="/Requests">Requests</a>
  
    </div>

  </div>);
  const right = (<div className="left">
   <div className='listItems'>
   <a href="/changePassword">Change Password</a>
   </div>
    <AcceptRejectButton text = "Logout"/>
  </div>);


const Navbar = () => {
  return (
    <div>
          <NavigationBar leftDiv={left} rightDiv={right}/>

    </div>
  )
}

export default Navbar
