import "./DonorFilter.css";
import filtericon from "../../assets/filter-icon.png";

function BloodDonationFilter() {
  return (
    <>
      <div className="three-categories-filter">
        <div className="clothes-filter-icon">
          <img src={filtericon} alt="Filter Icon" className="filter-icon" />
          <strong>Filters</strong>
        </div>

        <select className="form-select" aria-label="Default select example">
          <option selected>Hospital</option>
          <option value="1">57357</option>
          <option value="2">Magdy Yakoub</option>
          <option value="3">Red Cresent</option>
        </select>

        <select className="form-select" aria-label="Default select example">
          <option selected>Government</option>
          <option value="1">Cairo</option>
          <option value="2">Giza</option>
          <option value="3">Sharqia</option>
          <option value="4">Alexandria</option>
        </select>

        <select className="form-select" aria-label="Default select example">
          <option selected>Area</option>
          <option value="1">6th Of October</option>
          <option value="2">Sheikh Zayed</option>
          <option value="3">Zagazig</option>
          <option value="4">Maadi</option>
          <option value="5">Miami</option>
        </select>
      </div>
    </>
  );
}

export default BloodDonationFilter;
