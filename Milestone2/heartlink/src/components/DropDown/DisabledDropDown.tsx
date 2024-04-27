import "./DropDown.css";

interface DropDownProps {
  selected: string;
  width: string;
}

function DisabledDropDown({ selected, width }: DropDownProps) {
  return (
    <select
      className="form-select"
      aria-label="Default select example"
      style={{ width: width }}
      disabled
    >
      <option selected>{selected}</option>
    </select>
  );
}

export default DisabledDropDown;
