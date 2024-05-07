import "./DropDown.css";
interface DropDownProps {
  options: string[];
  selected: string;
  width: string;
  onChange?: (selectedOption: string) => void;
  disabled?: boolean;
}

function EditDropDown({
  options,
  selected,
  width,
  onChange,
  disabled = false,
}: DropDownProps) {
  const renderedOptions = options.map((option) => {
    return (
      <option key={option} value={option} selected={option == selected}>
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
    >
      {renderedOptions}
    </select>
  );
}

export default EditDropDown;
