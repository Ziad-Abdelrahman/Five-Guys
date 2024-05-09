import "./InputBox.css"; // Import your CSS file for styling

interface InputBoxProps {
  type: string;
  label: string;
  width: string;
  value?: string; // Adding value prop for data binding
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void; // Adding onChange prop for event handling
  disabled?: boolean;
}

function InputBox({
  type,
  label,
  width,
  value,
  onChange,
  disabled = false,
}: InputBoxProps) {
  return (
    <div className="form-floating mb-3" style={{ width: width }}>
      <input
        type={type}
        className="form-control"
        id="floatingInput"
        value={value} // Bind input value to state
        onChange={onChange} // Handle changes to update state
        disabled={disabled}
      />
      <label htmlFor="floatingInput">{label}</label>
    </div>
  );
}

export default InputBox;
