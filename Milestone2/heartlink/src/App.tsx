import React from 'react';
import Donors from "./Admin/Donors/Donors.tsx";
import Requests from "./Admin/Requests/Requests.tsx";
import Organizations from "./Admin/Organizations/Organizations.tsx";
import Navbar from "./components/Admin navbar/Navbar";
import ChangePass from "./Admin/change password/ChangePass.tsx";

function App() {
  let Component;
  switch(window.location.pathname) {
    case "/Donors":
      Component = Donors;
      break;
    case "/Organizations":
      Component = Organizations;
      break;
    case "/Requests":
      Component = Requests; 
      break;
    case "/changePassword":
      Component = ChangePass; 
      break;  
      
  }

  return (
    <div>
      <Navbar />
      {Component ? <Component /> : <div />}
    </div>
  );
}

export default App;
