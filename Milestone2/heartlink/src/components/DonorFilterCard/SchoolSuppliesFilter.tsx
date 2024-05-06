import "./DonorFilter.css";
import RadioButton from "../RadioButton/RadioButton.tsx";
import DropDown from "../DropDown/DropDown.tsx";

interface SchoolSuppliesFilterProps {
  filterChange?: (filter: string) => void;
  buttonName1: string;
  buttonName2: string;
  buttonName3: string;
  buttonAll?: string;
  hasMoreFilters?: boolean;
  handleMedicationFilter?: (filter: string) => void;
}
function SchoolSuppliesFilter(props: SchoolSuppliesFilterProps) {
  return (
    <>
      <div className="filter-radio-buttons">
        {props.buttonAll && (
          <RadioButton
            text={props.buttonAll}
            height="30px"
            handleFilterChange={props.filterChange}
          />
        )}
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
        {props.hasMoreFilters && (
          <div style={{ marginLeft: "80px" }}>
            <DropDown
              options={[
                "All",
                "Analgesics",
                "Antibiotics",
                "Anticoagulants",
                "Antidepressants",
                "Antidiabetics",
                "Antiemetics",
                "Antihistamines",
                "Bronchodilators",
                "Diuretics",
                "Eye drops",
                "Laxatives",
                "Muscle relaxants",
                "Topical medications",
                "Vitamins",
                "First Aid Kit",
              ]}
              selected={"Filter Med"}
              width={"150px"}
              onChange={props.handleMedicationFilter}
            />
          </div>
        )}
      </div>
    </>
  );
}

export default SchoolSuppliesFilter;
