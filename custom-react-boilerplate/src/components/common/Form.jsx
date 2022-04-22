import React from "react";
import PropTypes from "prop-types";

function Form(props) {
  const { action, onSubmit, children } = props;

  return (
    <form action={action} onSubmit={onSubmit}>
      {children}
    </form>
  );
}
Form.propTypes = {
  action: PropTypes.string,
  onSubmit: PropTypes.func.isRequired,
  children: PropTypes.arrayOf(PropTypes.element).isRequired,
};
Form.defaultProps = {
  action: "",

};
export default Form;
