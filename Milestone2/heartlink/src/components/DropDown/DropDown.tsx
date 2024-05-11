import "./DropDown.css";
interface DropDownProps {
  options: string[];
  selected: string;
  width: string;
  onChange?: (selectedOption: string) => void;
  disabled?: boolean;
  required?: boolean;
}

function DropDown({
  options,
  selected,
  width,
  onChange,
  disabled = false,
  required = false,
}: DropDownProps) {
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
      disabled={disabled}
      required={required}
    >
      <option selected disabled={true} value="">
        {selected}
      </option>
      {renderedOptions}
    </select>
  );
}

export default DropDown;
