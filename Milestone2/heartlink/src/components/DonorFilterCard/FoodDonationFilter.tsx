import "./DonorFilter.css";
import RadioButton from "../RadioButton/RadioButton.tsx";

interface SchoolSuppliesFilterProps {
  filterChange?: (filter: string) => void;
}
function FoodDonationFilter(props: SchoolSuppliesFilterProps) {
  return (
    <>
      <div className="filter-radio-buttons">
        <RadioButton
          text={"Filter"}
          height="30px"
          handleFilterChange={props.filterChange}
        />
        <RadioButton
          text={"Vegetables"}
          height="30px"
          handleFilterChange={props.filterChange}
        />
        <RadioButton
          text={"Canned"}
          height="30px"
          handleFilterChange={props.filterChange}
        />
        <RadioButton
          text={"FreshMeals"}
          height="30px"
          handleFilterChange={props.filterChange}
        />
        <RadioButton
          text={"BakedGoods"}
          height="30px"
          handleFilterChange={props.filterChange}
        />
      </div>
    </>
  );
}
export default FoodDonationFilter;
