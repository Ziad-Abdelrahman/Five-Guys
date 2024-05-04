import filtericon from "../../assets/filter-icon.png";
import "./DonorFilter.css";

interface TeacherFilterProps {
  handleSubjectFilter: (subject: string) => void;
  handleAreaFilter: (area: string) => void;
  handleGovernmentFilter: (government: string) => void;
}
function TeacherFilter(props: TeacherFilterProps) {
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
          onChange={(e) => props.handleSubjectFilter(e.target.value)}
        >
          <option selected value={"Subject"}>
            Subject
          </option>
          <option value="Relegion">Relegion</option>
          <option value="Math">Math</option>
          <option value="Physics">Physics</option>
          <option value="Biology">Biology</option>
          <option value="Arabic">Arabic</option>
          <option value="English">English</option>
        </select>

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

export default TeacherFilter;
