import "./Buttons.css";

interface AcceptRejectButton {
  text: string;
  color?: string;
  height?: string;
  width?: string;
}
function AcceptRejectButton(props: AcceptRejectButton) {
  return (
    <button
      className="accept"
      style={{
        backgroundColor: props.color,
        height: props.height,
        width: props.width,
      }}
    >
      {props.text}
    </button>
  );
}

export default AcceptRejectButton;
