import "./DonorFilter.css";
import filtericon from "../../assets/filter-icon.png";

interface OrganizationFilterProps {
  handleTyoeFilter: (hospital: string) => void;
  handleGovernmentFilter: (government: string) => void;
  handleAreaFilter: (area: string) => void;
}

function OrganizationFilter({
  handleTyoeFilter,
  handleGovernmentFilter,
  handleAreaFilter,
}: OrganizationFilterProps) {
  const renderedOptions = [
    "Animal welfare groups",
    "Arts associations",
    "Childcare organisations",
    "Community sheds",
    "Environmental groups",
    "Health Promotion Charities",
    "Hospitals and other healthcare providers",
    "Housing providers",
    "Medical research Institutions",
    "Private and public ancillary funds",
    "Public benevolent institutions",
    "Social clubs",
    "Sporting clubs and associations",
    "Schools and other educational providers",
    "Self-help groups",
  ];
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
          onChange={(e) => handleTyoeFilter(e.target.value)}
        >
          <option selected value={"Type"}>
            Hospital
          </option>
          {renderedOptions.map((option) => (
            <option value={option}>{option}</option>
          ))}
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

export default OrganizationFilter;
