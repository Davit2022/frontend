import React from "react";
import PropTypes from 'prop-types'

const Button = (props) => {
  const { title, onClick, className} = props;
  return (
    <div>
      <button className={className} onClick={onClick}>{title}</button>
    </div>
 
  )
}

Button.propTypes = {
  title:PropTypes.string.isRequired,
  onClick: PropTypes.func,
  className: PropTypes.string
}

Button.defaultProps = {
  onClick: () => { },
}

export default Button;
