import "./Buttons.css"; // This imports the styles
interface DonateButtonProps {
  text?: string; // Optional prop to control the text of the button
}

function DonateButton(props: DonateButtonProps) {
  const styles = {
    fontSize: "16px",
    fontWeight: "bold",
  };

  return (
    <button className="donation-button" style={styles}>
      {props.text ? props.text : "Donate"}
    </button>
  );
}

export default DonateButton;
