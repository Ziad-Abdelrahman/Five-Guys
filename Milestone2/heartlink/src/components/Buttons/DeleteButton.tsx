import "./Buttons.css";

interface DeleteButtonProps {
  onClick: () => void;
  text?: string;
  width?: string;
}

function DeleteButton({ width, onClick, text = "Delete" }: DeleteButtonProps) {
  return (
    <button
      className="delete-button"
      onClick={onClick}
      style={{ width: width }}
    >
      {text}
    </button>
  );
}

export default DeleteButton;
