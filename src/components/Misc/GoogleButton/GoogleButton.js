import React from "react";

const GoogleButton = ({ classes, text, callback }) => {
  return (
    <button
      className={`button cfb-login__button-google google-button ${classes}`}
      onClick={callback}
    >
      <i className="fab fa-google google-button__icon"></i>
      <span className="google-button__text">{text}</span>
    </button>
  );
};

export default GoogleButton;
