import React from "react";
import PropTypes from "prop-types";

function Button(props) {
  const { title, onClick, className } = props;
  return (
    <div>
      <button className={className} onClick={onClick} type="button">
        {title}
      </button>
    </div>
  );
}

Button.propTypes = {
  title: PropTypes.string.isRequired,
  onClick: PropTypes.func,
  className: PropTypes.string,
};

Button.defaultProps = {
  onClick: () => {},
  className: "",
};

export default Button;
