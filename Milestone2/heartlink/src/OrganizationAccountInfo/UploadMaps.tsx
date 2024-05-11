import Map from "../components/map/Map.tsx";

interface UploadMapsProps {
  area: string;
  city: string;
  address: string;
}

function UploadMaps(props: UploadMapsProps) {
  return (
    <div className={"upload-doc-card"}>
      <div style={{ width: "48%" }}>
        <h2>Address Details</h2>
        <hr />
        <div className={"text-in-personal-info-card"} style={{ marginLeft: 0 }}>
          <div className={"org-info-header"}>
            <h5>Area</h5>
            <h5>City</h5>
            <h5>Address</h5>
          </div>

          <div className={"my-profile-info"}>
            <p>{props.area}</p>
            <p>{props.city}</p>
            <p>{props.address}</p>
          </div>
        </div>
      </div>
      <Map height={"220px"} width={"300px"} />
    </div>
  );
}

export default UploadMaps;
