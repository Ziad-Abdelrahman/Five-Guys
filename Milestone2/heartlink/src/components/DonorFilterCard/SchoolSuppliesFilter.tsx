import "./DonorFilter.css";
import RadioButton from "../RadioButton/RadioButton.tsx";

interface SchoolSuppliesFilterProps {
  filterChange?: (filter: string) => void;
  buttonName1: string;
  buttonName2: string;
  buttonName3: string;
}
function SchoolSuppliesFilter(props: SchoolSuppliesFilterProps) {
  return (
    <>
      <div className="filter-radio-buttons">
        <RadioButton
          text={props.buttonName1}
          height="30px"
          handleFilterChange={props.filterChange}
        />
        <RadioButton
          text={props.buttonName2}
          height="30px"
          handleFilterChange={props.filterChange}
        />
        <RadioButton
          text={props.buttonName3}
          height="30px"
          handleFilterChange={props.filterChange}
        />
      </div>
    </>
  );
}
export default SchoolSuppliesFilter;
