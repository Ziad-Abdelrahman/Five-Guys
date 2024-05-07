import "./RadioButton.css";

interface RadioButtonProps {
  text: string;
  height?: string;
  handleFilterChange?: (filter: string) => void;
  checked: boolean;
  setChecked: React.Dispatch<React.SetStateAction<string>>;
}
function EditRadioButton({
  text,
  height,
  setChecked,
  checked,
}: RadioButtonProps) {
  const customStyle = {
    height: height, // Apply the height to both the input and label if specified
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
