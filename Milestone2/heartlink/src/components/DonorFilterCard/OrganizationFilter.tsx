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
    "Cancer Institute",
    "Food Charity",
    "Human Development",
    "Humanitarian Aid",
    "Heart Diseases Institute",
    "Global Humanitarian Network",
    "Breast Cancer Institute",
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
            Type
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
          <option value="10th Of Ramadan">10th Of Ramadan</option>
          <option value="El Saida Zeinab">El Saida Zeinab</option>
          <option value="Zagazig">Zagazig</option>
          <option value="El Haram">El Haram</option>
          <option value="Miami">Miami</option>
          <option value="Sheikh Zayed">Sheikh Zayed</option>
          <option value="Zamalek">Zamalek</option>
          <option value="Nasr City">Nasr City</option>
        </select>
      </div>
    </>
  );
}

export default OrganizationFilter;
