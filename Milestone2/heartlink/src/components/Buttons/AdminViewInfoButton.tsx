import "./Buttons.css";

interface AcceptRejectButton {
  id: string;
  text: string;
  color?: string;
  height?: string;
  width?: string;
  onClick?: (id: string) => void;
}
function AdminViewInfoButton(props: AcceptRejectButton) {
  return (
    <button
      className="accept"
      id={props.id}
      style={{
        backgroundColor: props.color,
        height: props.height,
        width: props.width,
      }}
      onClick={(e) => {
        props.onClick && props.onClick(e.currentTarget.id);
      }}
    >
      {props.text}
    </button>
  );
}

export default AdminViewInfoButton;
