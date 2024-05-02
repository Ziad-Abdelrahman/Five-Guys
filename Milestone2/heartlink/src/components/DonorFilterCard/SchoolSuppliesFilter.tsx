import "./DonorFilter.css";
import RadioButton from "../RadioButton/RadioButton.tsx";

interface SchoolSuppliesFilterProps {
  filterChange: (filter: string) => void;
}
function SchoolSuppliesFilter(props: SchoolSuppliesFilterProps) {
  return (
    <>
      <div className="filter-radio-buttons">
        <RadioButton
          text={"All"}
          height="30px"
          handleFilterChange={props.filterChange}
        />
        <RadioButton
          text={"Books"}
          height="30px"
          handleFilterChange={props.filterChange}
        />
        <RadioButton
          text={"Stationary"}
          height="30px"
          handleFilterChange={props.filterChange}
        />
      </div>
    </>
  );
}
export default SchoolSuppliesFilter;
