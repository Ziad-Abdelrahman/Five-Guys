import "./Buttons.css";

interface ButtonProps {
  text: string;
  fontSize?: string;
  width?: string;
  height?: string;
}

function Button({ text, fontSize, width, height }: ButtonProps) {
  const styles = { fontSize: fontSize, width: width, height: height };
  return <button style={styles}>{text}</button>;
}
export default Button;
