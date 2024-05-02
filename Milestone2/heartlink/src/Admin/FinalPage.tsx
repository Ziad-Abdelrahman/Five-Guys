import React, { useEffect } from 'react';
import Navbar from "../components/Admin navbar/Navbar.tsx";
import ChangePass from "./change password/ChangePass.tsx";
import { Routes, Route } from 'react-router-dom';
import Donors from './Donors/Donors.tsx';
import Requests from "./Requests/Requests.tsx"
import Organizations from "./Organizations/Organizations.tsx";
import { useLocation } from 'react-router-dom';
import HeadOfSection from "../components/header/headerofsection.tsx"



function FinalPage() {
    const PageTitle = useLocation();
        const getTitle = () => {
            switch (PageTitle.pathname) {
              case '/Donors':
                return 'Donors';
              case '/Organizations':
                return 'Organizations';
              case '/Requests':
                return 'Requests';
              case '/changePassword':
                return 'Change Password';
              default:
                return 'Heart Link'; 
            }
        };
        useEffect(() => {
            const title = getTitle();
            document.title = title; 
          }, [PageTitle.pathname]); 
        

  return (
    <>
    <Navbar></Navbar>
    <HeadOfSection title={getTitle()} />
    <title>getTitle</title>

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
