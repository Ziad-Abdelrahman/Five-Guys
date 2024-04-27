import "./Button.css";

interface NextProps {
  text: string;
}

function Button({ text }: NextProps) {
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
