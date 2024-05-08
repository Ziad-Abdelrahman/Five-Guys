import OrgNavgBar from "../components/NavigationBar/Organization Navigation Bar/OrgNavgBar.tsx";
import "./Organization.css";
import { useEffect, useRef } from "react";
import {
  Chart,
  LinearScale,
  CategoryScale,
  LineController,
  PointElement,
  LineElement,
} from "chart.js";

Chart.register(LinearScale);
Chart.register(LineController);
Chart.register(CategoryScale);
Chart.register(PointElement);
Chart.register(LineElement);

function OrganizationDashboard() {
  const chartRef = useRef<Chart | null>(null);
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  var labels: string[] = [];
  for (var i = 0; i < 24; i++) {
    labels.push(2000 + i + "");
  }
  const datapoints = [
    "Sad",
    "Sad",
    "Sad",
    "Neutral",
    "Neutral",
    "Sad",
    "Happy",
    "Neutral",
    "Happy",
    "Happy",
    "Neutral",
    "Happy",
    "Neutral",
    "Neutral",
    "Happy",
    "Happy",
    "Happy",
    "Neutral",
    "Neutral",
    "Happy",
    "Happy",
    "Happy",
    "Happy",
    "Happy",
  ];
  useEffect(() => {
    if (canvasRef.current) {
      if (chartRef.current) {
        chartRef.current.destroy();
      }
      const ctx = canvasRef.current.getContext(
        "2d",
      ) as CanvasRenderingContext2D;
      // @ts-ignore
      chartRef.current = new Chart(ctx, {
        type: "line",
        data: {
          labels: labels,
          datasets: [
            {
              label: "# of Votes",
              data: datapoints,
              borderColor: "rgb(54, 162, 235)",
              fill: false,
              cubicInterpolationMode: "monotone",
              tension: 0.4,
              pointStyle: "false",
              pointRadius: 0,
              pointHoverRadius: 0,
            },
          ],
        },
        options: {
          responsive: true,
          maintainAspectRatio: false,
          plugins: {
            title: {
              display: true,
              text: "Clients Satisfaction Over the Years",
            },
          },
          scales: {
            y: {
              grid: {
                display: false,
              },
              type: "category",
              labels: ["Happy", "Neutral", "Sad"],
            },
            x: {
              grid: {
                display: false,
              },
              ticks: {
                autoSkip: true,
                maxTicksLimit: 8,
              },
            },
          },
        },
      });
    }
  }, []);

  return (
    <>
      <OrgNavgBar />
      <div className="organizationDashboard">
        <div className="organizationCards">
          <div className="organizationDetailsDashboard">
            <h4>Organization: name</h4>
            <h6>Established:</h6> {/* Organization's date of establishment */}
            <h6>Location:</h6> {/* Organization's location */}
            <h6>Type:</h6> {/* Organization's description */}
          </div>
          <div className="organizationDetailsDashboard">
            <h4>Representative: name</h4>
            <h6>Joined:</h6> {/* Organization's date of establishment */}
            <h6>Position:</h6> {/* Organization's location */}
            <h6>Email:</h6> {/* Organization's description */}
          </div>
        </div>
        <div className="organizationCards">
          <div className="organizationCard">
            <div>
              <h4>Volunteers</h4>
              <h6>Number of volunteers for probonos</h6>
            </div>
            <div className="insideTheCard">
              <h1>21</h1>
              <h6>volunteer(s)</h6>
            </div>
          </div>
          <div className="organizationCard">
            <div>
              <h4>Volunteering time</h4>
              <h6>Time spent by probonos volunteers</h6>
            </div>
            <div className="insideTheCard">
              <h1>254</h1>
              <h6>minute(s)</h6>
            </div>
          </div>
          <div className="organizationCard">
            <div>
              <h4>Posts</h4>
              <h6>Number of posts</h6>
            </div>
            <div className="insideTheCard">
              <h1>14</h1>
              <h6>post(s)</h6>
            </div>
          </div>
          <div className="organizationCard">
            <div>
              <h4>Donations</h4>
              <h6>Number of items received from donations</h6>
            </div>
            <div className="insideTheCard">
              <h1>25</h1>
              <h6>donation(s)</h6>
            </div>
          </div>
        </div>
        <div className="chartOrg">
          <div className="chartTitle">
            <h4>Volunteers Satisfaction Over the Years</h4>
            <h6>
              Average happiness of volunteers that volunteered for probonos
            </h6>
          </div>
          <canvas ref={canvasRef} id="myChart" className="myChart"></canvas>
        </div>
      </div>
    </>
  );
}

export default OrganizationDashboard;
