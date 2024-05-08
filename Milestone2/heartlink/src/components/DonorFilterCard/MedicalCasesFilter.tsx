import filtericon from "../../assets/filter-icon.png";
import "./DonorFilter.css";
interface MedicalCasesFilterProps {
  handleOrganizationFilter: (organization: string) => void;
  handleSpecialityFilter: (subject: string) => void;
  handleAreaFilter: (area: string) => void;
  handleGovernmentFilter: (government: string) => void;
}
function MedicalCasesFilter(props: MedicalCasesFilterProps) {
  return (
    <>
      <div className="three-categories-filter">
        <div className="clothes-filter-icon">
          <img src={filtericon} alt="Filter Icon" className="filter-icon" />
          <strong>Filters</strong>
        </div>

        {/*Speciality filter*/}

        <select
          className="form-select"
          aria-label="Default select example"
          onChange={(e) => props.handleSpecialityFilter(e.target.value)}
        >
          <option selected value={"Speciality"}>
            Speciality
          </option>
          <option value="Pediatric">Pediatric</option>
          <option value="Psychiatry">Psychiatry</option>
          <option value="Neurology">Neurology</option>
          <option value="Cardiology">Cardiology</option>
          <option value="Immunology">Immunology</option>
          <option value="Hematology">Hematology</option>
        </select>

        {/*Organization Name filter*/}

        <select
          className="form-select"
          aria-label="Default select example"
          onChange={(e) => props.handleOrganizationFilter(e.target.value)}
        >
          <option selected value={"Hospital"}>
            Hospital
          </option>
          <option value="57357 Hospital">57357 Hospital</option>
          <option value="Red Crescent">Red Crescent</option>
          <option value="Magdy Yakoub">Magdy Yakoub </option>
        </select>

        {/*Government filter*/}

        <select
          className="form-select"
          aria-label="Default select example"
          onChange={(e) => props.handleGovernmentFilter(e.target.value)}
        >
          <option selected value={"Government"}>
            Government
          </option>
          <option value="Cairo">Cairo</option>
          <option value="Giza">Giza</option>
          <option value="Sharqia">Sharqia</option>
          <option value="Alexandria">Alexandria</option>
        </select>

        {/*Area filter*/}

        <select
          className="form-select"
          aria-label="Default select example"
          onChange={(e) => props.handleAreaFilter(e.target.value)}
        >
          <option selected value={"Area"}>
            Area
          </option>
          <option value="6th Of October">6th Of October</option>
          <option value="Sheikh Zayed">Sheikh Zayed</option>
          <option value="Zagazig">Zagazig</option>
          <option value="Maadi">Maadi</option>
          <option value="New Cairo">New Cairo</option>
          <option value="Nasr City">Nasr City</option>
          <option value="Miami">Miami</option>
        </select>
      </div>
    </>
  );
}

export default MedicalCasesFilter;
