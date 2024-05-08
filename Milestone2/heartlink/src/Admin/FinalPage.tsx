import Navbar from "../components/Admin navbar/Navbar.tsx";
import ChangePass from "./change password/ChangePass.tsx";
import { Routes, Route } from 'react-router-dom';
import Donors from './Donor/Donors.tsx';
import Organizations from "./Organization/Organizations.tsx";
import ViewOrganization from "./Organization/ViewOrganization.tsx";
import ViewDonors from './Donor/ViewDonors.tsx'
import DonorSubmission from '../Admin/Donor/DonorSubmission.tsx'
import OrganizationSubmission from './Organization/OrganizationSubmitions.tsx'
import DonorRequests from "./Donor/DonorRequests.tsx";
import OrganizationRequests from "./Organization/OrganizationRequests.tsx";
import HomePage from "./HomePage.tsx";



function FinalPage() {
    

  return (
    <>
    <Navbar></Navbar>
    <div className='Container'>
      <Routes>
        <Route path ="" element={<HomePage/>}/>
        <Route path ="/ViewDonors" element={<ViewDonors/>}/>
        <Route path ="/ViewOrganizations" element={<ViewOrganization/>}/>
        <Route path ="/DonorSubmissions" element={<DonorSubmission/>}/>
        <Route path ="/OrganizationSubmissions" element={<OrganizationSubmission/>}/>
        <Route path ="/DonorRequests" element={<DonorRequests/>}/>
        <Route path ="/OrganizationRequests" element={<OrganizationRequests/>}/>
        <Route path ="/Donors" element={<Donors/>}/>
        <Route path ="/Organizations" element={<Organizations/>}/>
        <Route path ="/ChangePass" element={<ChangePass/>}/>
      </Routes>
    </div>
    </>
    
  );
}


export default FinalPage;
