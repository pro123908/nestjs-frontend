import React from "react";

const InputWithIcon = ({
  iconClass = "fas fa-user",
  placeholder,
  value,
  onInputChange,
  inputType,
}) => {
  return (
    <div className="cfb-inputWithIcon">
      <i className={`${iconClass} cfb-inputWithIcon__icon`} />
      <input
        className="input cfb-inputWithIcon__input"
        placeholder={placeholder}
        value={value}
        onChange={(e) => onInputChange(e.target.value)}
        type={inputType ? inputType : "text"}
      />
    </div>
  );
};

export default InputWithIcon;
