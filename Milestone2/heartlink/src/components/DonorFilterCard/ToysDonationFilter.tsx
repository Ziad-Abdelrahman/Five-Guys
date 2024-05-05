import "./DonorFilter.css";
import filtericon from "../../assets/filter-icon.png";
interface ToysDonationFilterProps {
  handleAgeFilter?: (age: string) => void;
  handleGender?: (gender: string) => void;
  handleCategory?: (category: string) => void;
}

function ToysDonationFilter(props: ToysDonationFilterProps) {
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
          <option value="Age" selected>
            Age
          </option>
          <option value="0-2">0-2</option>
          <option value="2-6">2-6</option>
          <option value="6-12">6-12</option>
        </select>

        <select
          className="form-select"
          aria-label="Default select example"
          onChange={(e) => {
            props.handleGender(e.target.value);
          }}
        >
          <option value="Gender" selected>
            Gender
          </option>
          <option value="Male">Male</option>
          <option value="Female">Female</option>
        </select>

        <select
          className="form-select"
          aria-label="Default select example"
          onChange={(e) => {
            props.handleCategory(e.target.value);
          }}
        >
          <option value="Category" selected>
            Category
          </option>
          <option value="Board Games">Board Games</option>
          <option value="Stuffed Toys">Stuffed Toys</option>
          <option value="Dolls">Dolls</option>
          <option value="Sports">Sports</option>
          <option value="Cars">Cars</option>
          <option value="Outdoor">Outdoor</option>
        </select>
      </div>
    </>
  );
}

export default ToysDonationFilter;
