import "./InputBox.css"; // Import your CSS file for styling

interface InputBoxProps {
  type: string;
  label: string;
  width: string;
  text: string;
  hasText: boolean;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  setChecked: React.Dispatch<React.SetStateAction<string>>;
}

function EditInputBox({
  type,
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
        type={type}
        className="form-control"
        id="floatingInput"
        value={text}
        onChange={handleChange}
      />
      <label>{label}</label>
    </div>
  ) : (
    <div className="form-floating mb-3" style={{ width: width }}>
      <input type={type} className="form-control" id="floatingInput" />
      <label>{label}</label>
    </div>
  );
}

export default EditInputBox;
