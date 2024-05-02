import "./InputBox.css"; // Import your CSS file for styling

interface InputBoxProps {
  type: string;
  label: string;
  width: string;
  disabled?: boolean;
}

function InputBox({ type, label, width, disabled = false }: InputBoxProps) {
  return (
    <div className="form-floating mb-3" style={{ width: width }}>
      <input
        type={type}
        className="form-control"
        id="floatingInput"
        placeholder="name@example.com"
        disabled={disabled}
      />
      <label>{label}</label>
    </div>
  );
}

export default InputBox;
