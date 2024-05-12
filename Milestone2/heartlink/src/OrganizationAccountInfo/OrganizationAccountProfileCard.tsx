import "./OrganizationAccountManagement.css";
import img from "../assets/baheya.png";
interface OrganizationAccountProfileCardProps {
  name: string;
  type: string;
  email: string;
  hotline: string;
  telephone: string;
}
function OrganizationAccountProfileCard(
  props: OrganizationAccountProfileCardProps,
) {
  return (
    <>
      <div className="Personal-Info-card">
        <div className="image-in-personalinfo-card">
          <img className={"profile-image"} src={img} />
        </div>
        <div className={"header-in-personal-info-card"}>
          <h3>My Profile</h3>
          <hr />
        </div>
        <div className={"text-in-personal-info-card"}>
          <div className={"org-info-header"}>
            <h5>Name</h5>
            <h5>Type</h5>
            <h5>Email</h5>
            <h5>Telephone(s)</h5>
          </div>

          <div className={"my-profile-info"}>
            <p>{props.name}</p>
            <p>{props.type}</p>
            <p>{props.email}</p>
            <p>{props.hotline}</p>
            {props.telephone && <p>{props.telephone}</p>}
          </div>
        </div>
      </div>
    </>
  );
}

export default OrganizationAccountProfileCard;
