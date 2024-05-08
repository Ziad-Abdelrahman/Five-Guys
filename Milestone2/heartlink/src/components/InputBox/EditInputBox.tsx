import "./InputBox.css"; // Import your CSS file for styling

interface InputBoxProps {
  type: string;
  label: string;
  width: string;
  text: string;
  hasText: boolean;
  setChecked: React.Dispatch<React.SetStateAction<string>>;
}

function EditInputBox({
  type,
  label,
  width,
  text,
  hasText,
  setChecked,
}: InputBoxProps) {
  return hasText ? (
    <div className="form-floating mb-3" style={{ width: width }}>
      <input
        type={type}
        className="form-control"
        id="floatingInput"
        value={text}
        onChange={() => setChecked("")}
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
