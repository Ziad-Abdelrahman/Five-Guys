import "./Buttons.css";

interface ButtonProps {
  text: string;
}

function Button({ text }: ButtonProps) {
  const styles = {
    fontSize: "20px",
    fontWeight: "bold",
  };

  return (
    <button style={styles} className="nextButton">
      {text}
    </button>
  );
}
export default Button;
