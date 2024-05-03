import "./DonorFilter.css";
import filtericon from "../../assets/filter-icon.png";

function ToysDonationFilter() {
  return (
    <>
      <div className="three-categories-filter">
        <div className="clothes-filter-icon">
          <img src={filtericon} alt="Filter Icon" className="filter-icon" />
          <strong>Filters</strong>
        </div>

        <select className="form-select" aria-label="Default select example">
          <option selected>Age</option>
          <option value="1">0-2</option>
          <option value="2">2-6</option>
          <option value="3">6-12</option>
        </select>

        <select className="form-select" aria-label="Default select example">
          <option selected>Gender</option>
          <option value="1">Male</option>
          <option value="2">Female</option>
        </select>

        <select className="form-select" aria-label="Default select example">
          <option selected>Category</option>
          <option value="1">Board Games</option>
          <option value="2">Stuffed Toys</option>
          <option value="3">Dolls</option>
          <option value="4">Sports</option>
          <option value="4">Cars</option>
          <option value="4">Outdoor</option>
        </select>
      </div>
    </>
  );
}

export default ToysDonationFilter;
