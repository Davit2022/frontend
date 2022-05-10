import React from "react";
import PropTypes from "prop-types";

function Button(props) {
  const {
    title, onClick, className, children,
  } = props;

  return (
    <button className={className} onClick={onClick} type="button">
      {title}
    </button>
  );
}

Button.propTypes = {
  title: PropTypes.string.isRequired,
  onClick: PropTypes.func,
  className: PropTypes.string,
  children: PropTypes.node,
};

Button.defaultProps = {
  onClick: () => {},
  className: "",
  children: null,
};

export default Button;
