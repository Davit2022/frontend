import React from "react";
import PropTypes from "prop-types";

function Button(props) {
  const {
    title, onClick, className, id,
  } = props;
  return (
    <div>
      <button id={id} className={className} onClick={onClick} type="button">
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
};

Button.defaultProps = {
  onClick: () => {},
  className: "",
  id: "",
};

export default Button;
