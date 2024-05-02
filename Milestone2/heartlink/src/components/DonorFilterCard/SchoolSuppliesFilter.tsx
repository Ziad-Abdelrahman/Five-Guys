import "./DonorFilter.css";
import RadioButton from "../RadioButton/RadioButton.tsx";
function SchoolSuppliesFilter() {
  return (
    <>
      <div className="filter-radio-buttons">
        <RadioButton text={"All"} height="30px" />
        <RadioButton text={"Books"} height="30px" />
        <RadioButton text={"Stationary"} height="30px" />
      </div>
    </>
  );
}
export default SchoolSuppliesFilter;
