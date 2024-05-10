import "./Createcomp.css";
import LoginButton from "../Buttons/LoginButton.tsx";

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
            <LoginButton text="View Posts" height={"40px"} />
            <LoginButton text="Dashboard" height={"40px"} />
          </div>
        </div>
      )}
    </>
  );
}

export default Createcomp;
