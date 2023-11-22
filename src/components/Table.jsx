
const Table = ({ labels, data }) => {
  return (
    <div className="contact-container">
      <div className="info-column">
        {labels.map((label, index) => (
          <div key={index} className="label">
            {label}
          </div>
        ))}
      </div>
      <div className="info-column">
        {data.map((info, index) => (
          <div key={index}>{info}</div>
        ))}
      </div>
    </div>
  );
};

export default Table;
