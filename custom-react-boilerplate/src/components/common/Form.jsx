import React from "react";
import PropTypes from "prop-types";

function Form(props) {
  const { onSubmit, children } = props;
  return (
    <form onSubmit={onSubmit}>
      {children}
    </form>
  );
}
Form.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  children: PropTypes.arrayOf(PropTypes.element).isRequired,
};

export default Form;
