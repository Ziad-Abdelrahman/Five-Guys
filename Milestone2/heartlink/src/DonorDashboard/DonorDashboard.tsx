import DonorNavigationBar from "../components/NavigationBar/Donor Navigation Bar/DonorNavigationBar.tsx";
import "../Organization/Organization.css";

interface DonorDashboardProps {
  type?: string;
}

function DonorDashboard({ type }: DonorDashboardProps) {
  return (
    <>
      <DonorNavigationBar type={type} />
      <div className="organizationDashboard">
        <div className="organizationCards">
          <div
            className="organizationDetailsDashboard"
            style={{ width: "100%" }}
          >
            <h4>Name: Abdallah Ahmed</h4>
            <h6>Joined: May 2024</h6>{" "}
            {/* Organization's date of establishment */}
            <h6>Job: Doctor</h6> {/* Organization's location */}
            <h6>Email: abdallah22a92@gmail.com</h6>{" "}
            {/* Organization's description */}
          </div>
        </div>
        <div className="organizationCards" style={{ margin: "8% 0" }}>
          <div className="organizationCard">
            <div>
              <h4>Volunteers</h4>
              <h6>Number of times volunteered for probonos</h6>
            </div>
            <div className="insideTheCard">
              <h1 style={{ color: "#01A95D" }}>3</h1>
              <h6>volunteer(s)</h6>
            </div>
          </div>
          <div className="organizationCard">
            <div>
              <h4>Volunteering time</h4>
              <h6>Time spent by volunteering</h6>
            </div>
            <div className="insideTheCard">
              <h1 style={{ color: "#01A95D" }}>63</h1>
              <h6>minute(s)</h6>
            </div>
          </div>
          <div className="organizationCard">
            <div>
              <h4>Organizations Activity</h4>
              <h6>Number of organizations interacted with</h6>
            </div>
            <div className="insideTheCard">
              <h1 style={{ color: "#01A95D" }}>2</h1>
              <h6>organization(s)</h6>
            </div>
          </div>
          <div className="organizationCard">
            <div>
              <h4>Donations</h4>
              <h6>Number of items donated</h6>
            </div>
            <div className="insideTheCard">
              <h1 style={{ color: "#01A95D" }}>13</h1>
              <h6>donation(s)</h6>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default DonorDashboard;
