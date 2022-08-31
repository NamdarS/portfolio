export default function TextSection(props) {
  return (
    <div className="text-section">
      <div className="text-section-content">
        <div className="section-title">
          <p>{props.title}</p>
        </div>
        <div className="section-text">{props.text}</div>
      </div>
    </div>
  );
}
