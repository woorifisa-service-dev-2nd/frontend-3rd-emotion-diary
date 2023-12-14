import React from "react";
import "./DefaultLayouts.css";

const DefaultLayouts = ({ children }) => {
  return (
    <div className="main">
      {/* <div className="calendar">{calendar}</div>
      <div className="diary">{diary}</div> */}
      {children}
    </div>
  );
};

export default DefaultLayouts;
