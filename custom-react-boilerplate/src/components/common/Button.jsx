import React from "react";
import PropTypes from "prop-types";

function Button(props) {
  const {
    title, onClick, className, id, isSubmit,
  } = props;
  return (
    <div>
      <button id={id} className={className} onClick={onClick} type={isSubmit ? "submit" : "button"}>
        {title}
      </button>
    </div>
  );
}

Button.propTypes = {
  title: PropTypes.string.isRequired,
  onClick: PropTypes.func,
  className: PropTypes.string,
  id: PropTypes.string,
  isSubmit: PropTypes.bool,
};

Button.defaultProps = {
  onClick: () => {},
  className: "",
  id: "",
  isSubmit: false,
};

export default Button;
