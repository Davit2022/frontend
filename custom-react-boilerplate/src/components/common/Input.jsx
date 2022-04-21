import React from "react";
import PropTypes from "prop-types";

function Input(props) {
  const {
    className, name, type, placeholder, onChange, value, autoComplete,
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
    />
  );
}

Input.propTypes = {
  className: PropTypes.string,
  name: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  onChange: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
  autoComplete: PropTypes.string,
};

Input.defaultProps = {
  className: "",
  placeholder: "",
  autoComplete: "",
};

export default Input;
