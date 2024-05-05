
import { SetStateAction, useState } from 'react';
import DropDown from '../../components/DropDown/DropDown';
import "./requests.css";
import "../../components/DropDown/DropDown.css"
import OrganizationRequests from "../Organization requests/OrganizationRequests"
import DonorRequests from '../Donor requests/DonorRequests';

const Requests = () => {
  const [selected, setSelected] = useState("Organization");

  const handleSelectChange = (event: { target: { value: SetStateAction<string>; }; }) => {
    setSelected(event.target.value); 
  };


  return (
    <div>
      <div>
        <br /><br />
      </div>
      <div>
        <h1 className='pageTitle'>Requests</h1>
      </div>
      <div className='dropdownList'>
        <select className='form-select' onChange={handleSelectChange}>
          <option value="Organization">Organization Requests</option>
          <option value="Donor">Donor Requests</option>
        </select>
      </div>
      <div>
        {selected === "Organization" && (
          <div>
            <OrganizationRequests/>
          </div>
        )}
        {selected === "Donor" && (
          <div>
            <DonorRequests/>
          </div>
        )}
      </div>
    </div>
  );
};

export default Requests;
