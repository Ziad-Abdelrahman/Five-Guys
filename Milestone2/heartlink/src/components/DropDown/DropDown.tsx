import "./DropDown.css";
interface DropDownProps {
  options: string[];
  selected: string;
  width: string;
  onChange?: (selectedOption: string) => void;
}

function DropDown({ options, selected, width, onChange }: DropDownProps) {
  const renderedOptions = options.map((option) => {
    return (
      <option key={option} value={option}>
        {option}
      </option>
    );
  });

  return (
    <select
      className="form-select"
      aria-label="Default select example"
      style={{ width: width }}
      onChange={(e) => {
        onChange && onChange(e.target.value);
      }}
    >
      <option selected disabled={true}>
        {selected}
      </option>
      {renderedOptions}
    </select>
  );
}

export default DropDown;
