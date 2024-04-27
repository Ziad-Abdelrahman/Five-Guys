import "./RadioButton.css";

interface RadioButtonProps {
  text: string;
}
function RadioButton({ text }: RadioButtonProps) {
  return (
    <>
      <input
        type="radio"
        className="btn-check"
        name="options-outlined"
        id={text}
        autoComplete="off"
      />
      <label className="btn btn-outline-success" htmlFor={text}>
        {text}
      </label>
    </>
  );
}

export default RadioButton;
