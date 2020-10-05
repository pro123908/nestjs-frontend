import React from "react";

const Progress = ({ scroll }) => {
  return (
    <div
      className="progress"
      style={{
        background: `linear-gradient(to right, rgb(206 179 18) ${scroll}, transparent 0)`,
      }}
    ></div>
  );
};

export default Progress;
