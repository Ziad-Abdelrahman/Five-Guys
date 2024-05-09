import "./InputBox.css"; // Import your CSS file for styling

interface InputBoxProps {
  label: string;
  width: string;
  handleChange?: (quantity: string) => void;
}

function NumberInputBox({ label, width, handleChange }: InputBoxProps) {
  return (
    <div className="form-floating mb-3" style={{ width: width }}>
      <input
        type="number"
        className="form-control"
        id="floatingInput"
        placeholder="name@example.com"
        min="0"
        onClick={(e) => {
          handleChange && handleChange(e.currentTarget.value);
        }}
      />
      <label>{label}</label>
    </div>
  );
}

export default NumberInputBox;
