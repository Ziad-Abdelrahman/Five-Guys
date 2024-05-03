import "./DonorFilter.css";
import filtericon from "../../assets/filter-icon.png";

function ClothesFilter() {
  return (
    <>
      <div className="three-categories-filter">
        <div className="clothes-filter-icon">
          <img src={filtericon} alt="Filter Icon" className="filter-icon" />
          <strong>Filters</strong>
        </div>

        <select className="form-select" aria-label="Default select example">
          <option selected>Age</option>
          <option value="1">Infants</option>
          <option value="2">Kids</option>
          <option value="3">Adults</option>
        </select>

        <select className="form-select" aria-label="Default select example">
          <option selected>Gender</option>
          <option value="1">Male</option>
          <option value="2">Female</option>
        </select>

        <select className="form-select" aria-label="Default select example">
          <option selected>Season</option>
          <option value="1">Summer</option>
          <option value="2">Winter</option>
          <option value="3">Autumn</option>
          <option value="4">Fall</option>
        </select>
      </div>
    </>
  );
}

export default ClothesFilter;
