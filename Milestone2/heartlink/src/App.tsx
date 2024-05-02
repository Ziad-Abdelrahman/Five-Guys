import Donors from "./Admin/Donors/Donors.tsx";
import Requests from "./Admin/Requests/Requests.tsx";
import Organizations from "./Admin/Organizations/Organizations.tsx";
import Navbar from "./components/Admin navbar/Navbar";
import ChangePass from "./Admin/change password/ChangePass.tsx";
import { Routes, Route } from "react-router-dom";
import "./Admin/admin.css";

function App() {
  return (
    <>
      <Navbar></Navbar>
      <div className="container">
        <Routes>
          <Route path="/Donors" element={<Donors />} />
          <Route path="/Organizations" element={<Organizations />} />
          <Route path="/Requests" element={<Requests />} />
          <Route path="/changePassword" element={<ChangePass />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
