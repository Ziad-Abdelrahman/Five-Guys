import "./RadioButton.css";

interface RadioButtonProps {
  text: string;
  height?: string;
  handleFilterChange?: (filter: string) => void;
  margin?: string;
  required?: boolean;
}
function RadioButton({
  text,
  height,
  handleFilterChange,
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
        onClick={(e) =>
          handleFilterChange && handleFilterChange(e.currentTarget.id)
        }
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

export default RadioButton;
