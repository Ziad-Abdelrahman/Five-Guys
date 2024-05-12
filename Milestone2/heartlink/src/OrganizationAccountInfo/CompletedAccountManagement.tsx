import { useState } from "react";
import OrganizationAccountInfo from "./OrganizationAccountInfo.tsx";
import EditOrganizationAccountInfo from "./EditOrganizationAccountInfo.tsx";
import "../components/Card/Organization Cards/DonationPostCard.css";
import "./OrganizationAccountManagement.css";

function CompletedAccountManagement() {
  const [name, setName] = useState("Baheyya");
  const [type, setType] = useState("Breast Cancer");
  const [email, setEmail] = useState("baheya@baheya.org");
  const [telephone1, setTelephone1] = useState("16602");
  const [telephone2, setTelephone2] = useState("+225362211");
  const [area, setArea] = useState("El Haram");
  const [city, setCity] = useState("Giza");
  const [address, setAddress] = useState("4, Allouba St");
  const [repName, setRepName] = useState("Farah");
  const [repEmail, setRepEmail] = useState("farahh_faisall@hotmail");
  const [repGender, setRepGender] = useState("Female");
  const [repContactNumber, setRepContactNumber] = useState("01113190357");
  const [page, setPage] = useState("Account Info");

  return page === "Account Info" ? (
    <OrganizationAccountInfo
      name={name}
      type={type}
      email={email}
      telephone1={telephone1}
      telephone2={telephone2}
      repName={repName}
      repEmail={repEmail}
      repGender={repGender}
      repContactNumber={repContactNumber}
      area={area}
      address={address}
      city={city}
      setName={setName}
      setType={setType}
      setEmail={setEmail}
      setTelephone1={setTelephone1}
      setTelephone2={setTelephone2}
      setArea={setArea}
      setCity={setCity}
      setAddress={setAddress}
      setRepName={setRepName}
      setRepEmail={setRepEmail}
      setRepGender={setRepGender}
      setRepContactNumber={setRepContactNumber}
      setPage={setPage}
    />
  ) : (
    <EditOrganizationAccountInfo
      name={name}
      type={type}
      email={email}
      telephone1={telephone1}
      telephone2={telephone2}
      repName={repName}
      repEmail={repEmail}
      repGender={repGender}
      repContactNumber={repContactNumber}
      area={area}
      address={address}
      city={city}
      setName={setName}
      setType={setType}
      setEmail={setEmail}
      setTelephone1={setTelephone1}
      setTelephone2={setTelephone2}
      setArea={setArea}
      setCity={setCity}
      setAddress={setAddress}
      setRepName={setRepName}
      setRepEmail={setRepEmail}
      setRepGender={setRepGender}
      setRepContactNumber={setRepContactNumber}
      setPage={setPage}
    />
  );
}

export default CompletedAccountManagement;
