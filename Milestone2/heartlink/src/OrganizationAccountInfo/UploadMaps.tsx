import Map from "../components/map/Map.tsx";

function UploadMaps() {
  return (
    <div className={"upload-doc-card"}>
      <div style={{ width: "48%" }}>
        <h2>Address Details</h2>
        <hr />
        <div className={"text-in-personal-info-card"}>
          <div className={"org-info-header"}>
            <h5>Area</h5>
            <h5>City</h5>
            <h5>Address</h5>
          </div>

          <div className={"my-profile-info"}>
            <p>El Haram</p>
            <p>Giza</p>
            <p>4, Allouba St.</p>
          </div>
        </div>
      </div>
      <Map height={"220px"} width={"300px"} />
    </div>
  );
}

export default UploadMaps;
