import { TbMessageCircleHeart } from "react-icons/tb";
import "./Buttons.css";

interface ThankYouButtonProps {
  email: string;
}

function ThankYouButton({ email }: ThankYouButtonProps) {
  const handleClick = (email: string) => {
    const subject = "Donation Appreciation";
    const body =
      "Thank you for donating your time and effort, wishing you the best in your life";
    window.location.href = `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  };

  return (
    <button
      id={email}
      style={{
        width: "150px",
        justifyContent: "space-evenly",
        marginBottom: "2px",
      }}
      onClick={(e) => {
        handleClick(e.currentTarget.id);
      }}
    >
      <span>Say thanks</span>
      <TbMessageCircleHeart
        style={{ color: "white", width: "25px", height: "auto" }}
      />
    </button>
  );
}
export default ThankYouButton;
