import React from "react";

const InputWithIcon = ({
  iconClass = "fas fa-user",
  placeholder,
  value,
  onInputChange,
  inputType,
  name,
  onBlur,
  error,
  ...props
}) => {
  return (
    <div className="cfb-inputWithIcon-container">
      <div className="cfb-inputWithIcon">
        <input
          className="input cfb-inputWithIcon__input"
          placeholder={placeholder}
          name={name}
          value={value}
          onChange={onInputChange}
          type={inputType ? inputType : "text"}
          onBlur={onBlur}
          autoComplete="off"
          {...props}
        />
        <i className={`${iconClass} cfb-inputWithIcon__icon`} />
      </div>
      <span className="cfb-inputWithIcon__error"> {error ? error : ""}</span>
    </div>
  );
};

export default InputWithIcon;
