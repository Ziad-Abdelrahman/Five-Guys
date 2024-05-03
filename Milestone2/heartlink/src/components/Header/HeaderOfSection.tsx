import "./header.css";

interface HeaderOfSectionProps {
  title: string;
}

function headerOfSection(props: HeaderOfSectionProps) {
  return (
    <div className="header-container">
      <h2>{props.title}</h2>
      <hr />
    </div>
  );
}

export default headerOfSection;
