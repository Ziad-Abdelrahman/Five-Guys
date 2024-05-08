import "./OrgLeftDiv.css";
import "../Donor Navigation Bar/DonorLeftDiv.css";
import "../../Buttons/Buttons.css";
import arrow from "../../../assets/right-arrow.png";
import React, { useState } from "react";
import minilogo from "../../../assets/minilogo.png";
import { IoClose } from "react-icons/io5";
import DropDown from "../../DropDown/DropDown";
import { IoCheckmarkCircleOutline } from "react-icons/io5";
import { Link } from "react-router-dom";

function OrgLeftDiv() {
  const [showSubmit, setShowSubmit] = useState(false);
  const [confirmed, setConfirmed] = useState(false);
  const [selectedTiming, setSelectedTiming] = useState("");
  const [pendingTiming, setPendingTiming] = useState("");

  const handleCloseEvent = () => {
    setShowSubmit(false);
    setConfirmed(false);
  };
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setConfirmed(true);
    setSelectedTiming(pendingTiming);
  };
  const handleTimingSelect = (timing: string) => {
    setPendingTiming(timing);
  };

  return (
    <>
      {showSubmit && (
        <div className="org-backdrop" style={{ display: "block" }}></div>
      )}
      <div className="dropdown">
        <button className="dropbtn">
          Posts
          <img className="arrow-in-button" src={arrow} alt="arrow" />
        </button>
        <div className="dropdown-content">
          <Link to="/Organization/ViewPosts">View All Posts</Link>
          <Link to="/Organization/CreateAPost">Create Post</Link>
        </div>
      </div>
      <div className="dropdown">
        <button className="dropbtn">
          Drop-off Time
          <img className="arrow-in-button" src={arrow} alt="arrow" />
        </button>
        <div className="dropdown-content">
          <a onClick={() => setShowSubmit(true)}>Specify Drop-off timing </a>
        </div>
      </div>
      <div className="dropdown">
        <button className="dropbtn">
          Probono
          <img className="arrow-in-button" src={arrow} alt="arrow" />
        </button>
        <div className="dropdown-content">
          <Link to="/Organization/CreateMedicalRequest/1">
            Request a Doctor
          </Link>
          <Link to="/Organization/CreateTeachingPost">Request a Teacher</Link>
          <Link to="/Organization/FulfilledProboPosts">
            View Fulfilled Posts
          </Link>
        </div>
      </div>
      {showSubmit && (
        <div className="Submit">
          <div className="topOfSubmit">
            <img src={minilogo} />
            <IoClose className="xSubmit" onClick={() => handleCloseEvent()} />
          </div>
          <h4 className={"specify-timing"}>Specify Preferred Drop-off Time</h4>
          <form onSubmit={handleSubmit}>
            <DropDown
              options={[
                "10:00 AM- 12:00 PM",
                "12:00 PM - 2:00 PM",
                "2:00 PM - 4:00 PM",
                "4:00 PM - 6:00 PM",
              ]}
              selected={"From .. To .. "}
              onChange={handleTimingSelect}
              width={"280px"}
            />
            <button type="submit" className="confirm-button">
              Confirm
            </button>
          </form>
          {confirmed && (
            <div className="confirmation-message">
              <div className="confirmation-div">
                <IoCheckmarkCircleOutline className="confirmation-icon" />
                <p> Delivery Confirmed: {selectedTiming} </p>
              </div>
            </div>
          )}
        </div>
      )}
    </>
  );
}

export default OrgLeftDiv;
