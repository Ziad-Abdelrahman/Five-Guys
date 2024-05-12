import "./Createcomp.css";

import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

function CreateSignUp() {
  const navigate = useNavigate();
  const [countdown, setCountdown] = useState(5);
  const [dots, setDots] = useState(".");
  useEffect(() => {
    const intervalId = setInterval(() => {
      setCountdown((prevCountdown) => prevCountdown - 1);
      setDots((prevDots) => {
        if (prevDots === "...") {
          return ".";
        } else {
          return prevDots + ".";
        }
      });
    }, 1000);

    if (countdown === 0) {
      clearInterval(intervalId);
      navigate("/");
    }

    return () => clearInterval(intervalId);
  }, [countdown, navigate]);

  return (
    <>
      <div
        className="Submit"
        style={{
          borderRadius: "5%",
          width: "550px",
          height: "350px",
          top: "25%",
          left: "36%",
          justifyContent: "center",
          display: "flex",
          alignItems: "center",
        }}
      >
        <h1 style={{ fontSize: "40px", margin: "10% 0" }}>
          Sign up successful!
        </h1>
        <h6 style={{ fontSize: "20px" }}>Waiting for admin confirmation </h6>
        <h6 style={{ fontSize: "20px" }}>
          You will be redirected to the dashboard in {countdown} seconds {dots}
        </h6>
      </div>
    </>
  );
}

export default CreateSignUp;
