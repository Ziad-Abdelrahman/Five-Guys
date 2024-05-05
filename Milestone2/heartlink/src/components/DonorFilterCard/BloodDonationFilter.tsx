import "./DonorFilter.css";
import filtericon from "../../assets/filter-icon.png";

interface BloodDonationFilterProps {
  handleHospitalFilter: (hospital: string) => void;
  handleGovernmentFilter: (government: string) => void;
  handleAreaFilter: (area: string) => void;
}

function BloodDonationFilter({
  handleHospitalFilter,
  handleGovernmentFilter,
  handleAreaFilter,
}: BloodDonationFilterProps) {
  return (
    <>
      <div className="three-categories-filter">
        <div className="clothes-filter-icon">
          <img src={filtericon} alt="Filter Icon" className="filter-icon" />
          <strong>Filters</strong>
        </div>

        <select
          className="form-select"
          aria-label="Default select example"
          onChange={(e) => handleHospitalFilter(e.target.value)}
        >
          <option selected value={"Hospital"}>
            Hospital
          </option>
          <option value="57357">57357</option>
          <option value="Magdi Yacoub">Magdi Yacoub</option>
          <option value="Red Cresent">Red Cresent</option>
        </select>

        <select
          className="form-select"
          aria-label="Default select example"
          onChange={(e) => handleGovernmentFilter(e.target.value)}
        >
          <option selected value={"Government"}>
            Government
          </option>
          <option value="Cairo">Cairo</option>
          <option value="Giza">Giza</option>
          <option value="Sharqia">Sharqia</option>
          <option value="Alexandria">Alexandria</option>
        </select>

        <select
          className="form-select"
          aria-label="Default select example"
          onChange={(e) => handleAreaFilter(e.target.value)}
        >
          <option selected value={"Area"}>
            Area
          </option>
          <option value="6th Of October">6th Of October</option>
          <option value="Sheikh Zayed">Sheikh Zayed</option>
          <option value="Zagazig">Zagazig</option>
          <option value="Maadi">Maadi</option>
          <option value="Miami">Miami</option>
        </select>
      </div>
    </>
  );
}

export default BloodDonationFilter;
