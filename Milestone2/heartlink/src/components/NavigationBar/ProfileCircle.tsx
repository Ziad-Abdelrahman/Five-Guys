import "./ProfileCircle.css";

interface ProfilecircleProps {
  initials: string;
}
function ProfileCircle({ initials }: ProfilecircleProps) {
  return (
    <>
      <div className="profileCircle">{initials}</div>
    </>
  );
}

export default ProfileCircle; // Ensure this matches the function name exactly
