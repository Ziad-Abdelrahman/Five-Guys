import "./DonorFilter.css";
import filtericon from "../../assets/filter-icon.png";

interface ClothesFilterProps {
  handleAgeFilter: (age: string) => void;
  handleGenderFilter: (gender: string) => void;
  handleSeasonFilter: (season: string) => void;
}

function ClothesFilter(props: ClothesFilterProps) {
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
          onChange={(e) => {
            props.handleAgeFilter(e.target.value);
          }}
        >
          <option selected value="Age">
            Age
          </option>
          <option value="Infants">Infants</option>
          <option value="Kids">Kids</option>
          <option value="Adults">Adults</option>
        </select>

        <select
          className="form-select"
          aria-label="Default select example"
          onChange={(e) => {
            props.handleGenderFilter(e.target.value);
          }}
        >
          <option selected value="Gender">
            Gender
          </option>
          <option value="Male">Male</option>
          <option value="Female">Female</option>
        </select>

        <select
          className="form-select"
          aria-label="Default select example"
          onChange={(e) => {
            props.handleSeasonFilter(e.target.value);
          }}
        >
          <option selected value="Season">
            Season
          </option>
          <option value="Summer">Summer</option>
          <option value="Winter">Winter</option>
          <option value="Autumn">Autumn</option>
          <option value="Fall">Fall</option>
        </select>
      </div>
    </>
  );
}

export default ClothesFilter;
