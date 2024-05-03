import "./Button.css";

interface ButtonProps {
  text: string;
}

function CardButtons({ text }: ButtonProps) {
  const styles = {
    fontSize: "15px",
    fontWeight: "bold",
  };

  return (
    <button style={styles} className="nextButton">
      {text}
    </button>
  );
}
export default CardButtons;