import React from "react";

const ButtonWithIcon = ({
  iconClass,
  buttonText,
  onClick,
  type,
  disabled,
  ...props
}) => {
  return (
    <button
      className="button cfb-buttonWithIcon"
      onClick={onClick}
      type={type}
      disabled={disabled}
      {...props}
    >
      <span className="cfb-buttonWithIcon__text">{buttonText}</span>
      <i className={`${iconClass} cfb-buttonWithIcon__icon`} />
    </button>
  );
};

export default ButtonWithIcon;
