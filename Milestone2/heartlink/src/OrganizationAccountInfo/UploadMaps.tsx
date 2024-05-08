import LoginButton from "../components/Buttons/LoginButton.tsx";

function UploadMaps() {
  return (
    <div className={"upload-doc-card"}>
      <div style={{ width: "48%" }}>
        <h2>Add Location</h2>
        <p>Add your location to the map so that donors can easily find you</p>
        <br />
        <br />
        <br />
        <LoginButton text={"Add"} />
      </div>
    </div>
  );
}

export default UploadMaps;
