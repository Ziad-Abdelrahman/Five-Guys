import "./InputBox.css"; // Import your CSS file for styling

interface InputBoxProps {
  label: string;
  width: string;
}

function NumberInputBox({ label, width }: InputBoxProps) {
  return (
    <div className="form-floating mb-3" style={{ width: width }}>
      <input
        type="number"
        className="form-control"
        id="floatingInput"
        placeholder="name@example.com"
        min="0"
      />
      <label>{label}</label>
    </div>
  );
}

export default NumberInputBox;
