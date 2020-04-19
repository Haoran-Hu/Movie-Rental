import React from "react";

const SeachBox = ({ value, onChange }) => {
  return (
    <input
      type="text"
      nam="query"
      className="form-control my-3"
      placeholder="Seach..."
      value={value}
      onChange={e => onChange(e.currentTarget.value)}
    />
  );
};

export default SeachBox;
