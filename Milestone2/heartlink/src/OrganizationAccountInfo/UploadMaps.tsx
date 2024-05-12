interface UploadMapsProps {
  area: string;
  city: string;
  address: string;
}

function UploadMaps(props: UploadMapsProps) {
  return (
    <div className={"upload-doc-card"}>
      <div style={{ width: "50%" }}>
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
      <iframe
        width="300"
        height="220"
        src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=4%20Alouba%20Street%20,%20Off%20Haram%20Street%20,%20Giza%20Egypt+(Baheya%20Foundation)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
        title="Children Cancer Hospital Location"
      />
    </div>
  );
}

export default UploadMaps;
