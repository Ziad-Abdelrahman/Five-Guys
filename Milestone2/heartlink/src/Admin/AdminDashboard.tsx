import { useEffect, useRef } from "react";
import "../Organization/Organization.css";
import {
  Chart,
  LinearScale,
  CategoryScale,
  LineController,
  PointElement,
  LineElement,
} from "chart.js";
import AdminNavbar from "../components/NavigationBar/AdminNavbar/AdminNavbar.tsx";

Chart.register(LinearScale);
Chart.register(LineController);
Chart.register(CategoryScale);
Chart.register(PointElement);
Chart.register(LineElement);

function AdminDashboard() {
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
      <AdminNavbar />
      <div className="organizationDashboard">
        <div className="organizationCards">
          <div
            className="organizationDetailsDashboard"
            style={{ width: "100%" }}
          >
            <h1>Welcome back, Farouha</h1>
          </div>
        </div>
        <div className="organizationCards">
          <div className="organizationCard">
            <div>
              <h4>Donors</h4>
              <h6>Number of donors registered</h6>
            </div>
            <div className="insideTheCard">
              <h1>57</h1>
              <h6>donor(s)</h6>
            </div>
          </div>
          <div className="organizationCard">
            <div>
              <h4>Organizations</h4>
              <h6>Number of organizations registered</h6>
            </div>
            <div className="insideTheCard">
              <h1>10</h1>
              <h6>organization(s)</h6>
            </div>
          </div>
          <div className="organizationCard">
            <div>
              <h4>Posts</h4>
              <h6>Number of posts</h6>
            </div>
            <div className="insideTheCard">
              <h1>54</h1>
              <h6>post(s)</h6>
            </div>
          </div>
          <div className="organizationCard">
            <div>
              <h4>Donations</h4>
              <h6>Number of items donated</h6>
            </div>
            <div className="insideTheCard">
              <h1>65</h1>
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

export default AdminDashboard;
