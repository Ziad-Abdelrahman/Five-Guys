interface RepresentativeDetailsCardProps {
  name: string;
  gender: string;
  email: string;
  contactNumber: string;
}
function RepresentativeDetailsCard(props: RepresentativeDetailsCardProps) {
  return (
    <div className={"upload-doc-card"}>
      <div style={{ width: "100%" }}>
        <h2>Representative Info</h2>
        <hr />
        <p>Name: {props.name}</p>
        <p>Gender: {props.gender}</p>
        <p>Email: {props.email}</p>
        <p>Contact Number:{props.contactNumber}</p>
      </div>
    </div>
  );
}

export default RepresentativeDetailsCard;
