import "./Buttons.css";

interface ButtonProps {
  text: string;
  fontSize?: string;
  width?: string;
  height?: string;
  handleClick?: () => void;
}

function Button({ text, fontSize, width, height, handleClick }: ButtonProps) {
  const styles = { fontSize: fontSize, width: width, height: height };
  return (
    <button style={styles} onClick={handleClick}>
      {text}
    </button>
  );
}
export default Button;
