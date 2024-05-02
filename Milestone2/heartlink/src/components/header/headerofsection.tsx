import "./header.css";

interface headerofsectionProps {
  title: string;
  children?: React.ReactNode;
  smallDivStyle?: React.CSSProperties;
  style?: React.CSSProperties;
}

function headerofsection(props: headerofsectionProps) {
  return (
    <div className="header-container" style={props.style}>
      <div style={props.smallDivStyle}>
        <h2>{props.title}</h2>
        {props.children}
      </div>
      <hr />
    </div>
  );
}

export default headerofsection;
