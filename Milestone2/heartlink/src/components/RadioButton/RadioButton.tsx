import "./RadioButton.css";

interface RadioButtonProps {
  text: string;
  height?: string;
  handleFilterChange?: (filter: string) => void;
  margin?: string;
}
function RadioButton({
  text,
  height,
  handleFilterChange,
  margin,
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
