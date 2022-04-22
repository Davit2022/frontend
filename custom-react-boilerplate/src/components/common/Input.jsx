import React, { useState } from "react";
import PropTypes from "prop-types";

const [value, setValues] = useState("");

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
      value={() => { setValues(value); }}
      autoComplete={autoComplete}
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
};

Input.defaultProps = {
  className: "",
  placeholder: "",
  autoComplete: "",
  name: "",
};

export default Input;
