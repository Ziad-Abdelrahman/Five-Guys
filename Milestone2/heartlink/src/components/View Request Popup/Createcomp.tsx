import "./Createcomp.css";
import LoginButton from "../Buttons/LoginButton.tsx";
import { Link } from "react-router-dom";

interface CreatecompProps {
  message?: string;
  show: boolean;
}

function Createcomp({ message, show }: CreatecompProps): JSX.Element {
  return (
    <>
      {show && (
        <div className="org-backdrop" style={{ display: "block" }}></div>
      )}
      {show && (
        <div
          className="Submit"
          style={{
            borderRadius: "5%",
            width: "450px",
            height: "350px",
            top: "25%",
            left: "36%",
            justifyContent: "center",
          }}
        >
          <h1 style={{ fontSize: "40px", margin: "10% 0" }}>{message}</h1>
          <div className="button-container" style={{ marginTop: "10%" }}>
            <Link to={"/Organization/ViewPosts"}>
              <LoginButton text="View Posts" height={"40px"} />
            </Link>
            <Link to={"/Organization"}>
              <LoginButton text="Dashboard" height={"40px"} />
            </Link>
          </div>
        </div>
      )}
    </>
  );
}

export default Createcomp;
