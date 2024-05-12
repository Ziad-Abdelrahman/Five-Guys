import { useState } from "react";
import DonorAccountMangPage from "./DonorAccountMangPage.tsx";
import EditProfileCard from "../components/Card/EditProfileCard.tsx";

interface CompleteDonorAccountInfoProps {
  type?: string;
}

function CompleteDonorAccountInfo({ type }: CompleteDonorAccountInfoProps) {
  const [name, setName] = useState("Nanna");
  const [age, setAge] = useState("20");
  const [gender, setGender] = useState("Male");
  const [governorate, setGovernorate] = useState("Cairo");
  const [address, setAddress] = useState("Villa88, Maadi");
  const [tel1, setTel1] = useState("1099224715");
  const [tel2, setTel2] = useState("01113190357");
  const [page, setPage] = useState("Account info");

  return page === "Account info" ? (
    <DonorAccountMangPage
      name={name}
      age={age}
      gender={gender}
      governorate={governorate}
      address={address}
      tel1={tel1}
      tel2={tel2}
      setPage={setPage}
      type={type}
    />
  ) : (
    <EditProfileCard
      name={name}
      age={age}
      gender={gender}
      governorate={governorate}
      address={address}
      tel1={tel1}
      tel2={tel2}
      setName={setName}
      setAge={setAge}
      setGender={setGender}
      setGovernorate={setGovernorate}
      setAddress={setAddress}
      setTel1={setTel1}
      setTel2={setTel2}
      setPage={setPage}
    />
  );
}
export default CompleteDonorAccountInfo;
