import React from "react";
import "./InputBox.css"; // Import your CSS file for styling

interface InputBoxProps {
  type: string;
  label: string;
  width: string;
  disabled?: boolean;
  value?: string; // Adding value prop for data binding
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

function InputBox({
  type,
  label,
  width,
  disabled = false,
  onChange,
  value,
}: InputBoxProps) {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (onChange) {
      onChange(e); // Call the onChange handler passed from parent component
    }
  };

  return (
    <div className="form-floating mb-3" style={{ width: width }}>
      <input
        type={type}
        className="form-control"
        id="floatingInput"
        disabled={disabled}
        onChange={handleChange}
        value={value}
      />
      <label htmlFor="floatingInput">{label}</label>
    </div>
  );
}

export default InputBox;
