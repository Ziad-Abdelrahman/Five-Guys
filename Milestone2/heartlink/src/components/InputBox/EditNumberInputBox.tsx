import "./InputBox.css"; // Import your CSS file for styling

interface InputBoxProps {
  label: string;
  width: string;
  text: string;
  hasText: boolean;
  setChecked: React.Dispatch<React.SetStateAction<string>>;
}

function EditNumberInputBox({
  label,
  width,
  text,
  hasText,
  setChecked,
}: InputBoxProps) {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setChecked(value);
  };
  return hasText ? (
    <div className="form-floating mb-3" style={{ width: width }}>
      <input
        type="number"
        className="form-control"
        id="floatingInput"
        min="0"
        value={text}
        onChange={handleChange}
      />
      <label>{label}</label>
    </div>
  ) : (
    <div className="form-floating mb-3" style={{ width: width }}>
      <input
        type="number"
        className="form-control"
        id="floatingInput"
        min="0"
      />
      <label>{label}</label>
    </div>
  );
}

export default EditNumberInputBox;
