import "./RadioButton.css";

interface RadioButtonProps {
  text: string;
  height?: string;
  handleFilterChange?: (filter: string) => void;
  checked: boolean;
  setChecked: React.Dispatch<React.SetStateAction<string>>;
  margin?: string;
  required?: boolean;
}
function EditRadioButton({
  text,
  height,
  setChecked,
  checked,
  margin,
  required = false,
}: RadioButtonProps) {
  const customStyle = {
    height: height, // Apply the height to both the input and label if specified
    margin: margin,
  };
  return (
    <>
      <input
        type="radio"
        className="btn-check"
        name="options-outlined"
        id={text}
        autoComplete="off"
        onChange={() => setChecked(text)}
        checked={checked}
        required={required}
      />
      <label
        className="btn btn-outline-success"
        htmlFor={text}
        style={customStyle}
      >
        {text}
      </label>
    </>
  );
}

export default EditRadioButton;
