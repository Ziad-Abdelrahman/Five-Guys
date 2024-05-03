import Navbar from "../components/Admin navbar/Navbar.tsx";
import ChangePass from "./change password/ChangePass.tsx";
import { Routes, Route } from 'react-router-dom';
import Donors from './Donors/Donors.tsx';
import Requests from "./Requests/Requests.tsx"
import Organizations from "./Organizations/Organizations.tsx";



function FinalPage() {
    

  return (
    <>
    <Navbar></Navbar>
    <div className='Container'>
      <Routes>
        <Route path ="/Donors" element={<Donors/>}/>
        <Route path ="/Organizations" element={<Organizations/>}/>
        <Route path ="/Requests" element={<Requests/>}/>
        <Route path ="/changePassword" element={<ChangePass/>}/>

      </Routes>
    </div>
    </>
    
  );
}


export default FinalPage;
