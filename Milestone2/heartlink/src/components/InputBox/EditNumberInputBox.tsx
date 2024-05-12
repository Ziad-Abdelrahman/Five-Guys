import "./InputBox.css"; // Import your CSS file for styling

interface InputBoxProps {
  label: string;
  width: string;
  text: string;
  hasText: boolean;
  setChecked: React.Dispatch<React.SetStateAction<string>>;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

function EditNumberInputBox({
  label,
  width,
  text,
  hasText,
  setChecked,
  onChange,
}: InputBoxProps) {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setChecked(value);
    if (onChange) {
      onChange(e); // Call the onChange handler passed from parent component
    }
  };
  return hasText ? (
    <div className="form-floating mb-3" style={{ width: width }}>
      <input
        type="number"
        className="form-control"
        id="floatingInput"
        min="0"
        defaultValue={text}
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
        onChange={handleChange}
      />
      <label>{label}</label>
    </div>
  );
}

export default EditNumberInputBox;
