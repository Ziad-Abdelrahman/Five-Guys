import "./RadioButton.css";

interface RadioButtonProps {
  text: string;
  height?: string;
  handleFilterChange?: (filter: string) => void;
  checked?: boolean;
}
function RadioButton({
  text,
  height,
  handleFilterChange,
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
        onChange={() => handleFilterChange && handleFilterChange(text)}
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

export default RadioButton;
