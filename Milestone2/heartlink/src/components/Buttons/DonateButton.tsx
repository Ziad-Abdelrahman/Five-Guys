import "./Buttons.css"; // This imports the styles
interface DonateButtonProps {
  text?: string;
  color?: string;
  onClick?: () => void;
}

function DonateButton(props: DonateButtonProps) {
  const styles = {
    fontSize: "16px",
    fontWeight: "bold",
    color: props.color ? props.color : "white",
  };

  return (
    <button className="donation-button" style={styles} onClick={props.onClick}>
      {props.text ? props.text : "Donate"}
    </button>
  );
}

export default DonateButton;
