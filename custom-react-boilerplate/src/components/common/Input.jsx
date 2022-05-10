import React from "react";
import PropTypes from "prop-types";

function Input(props) {
  const {
    className, name, type, placeholder, onChange, value, autoComplete, style,
  } = props;
  return (
    <input
      className={className}
      name={name}
      type={type}
      placeholder={placeholder}
      onChange={onChange}
      value={value}
      autoComplete={autoComplete}
      style={style}
    />
  );
}

Input.propTypes = {
  className: PropTypes.string,
  name: PropTypes.string,
  type: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  onChange: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
  autoComplete: PropTypes.string,
  style: PropTypes.string,
};

Input.defaultProps = {
  className: "",
  autoComplete: "",
  placeholder: "",
  style: "",
  name: "",
};

export default Input;
