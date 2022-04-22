import React from "react";
import PropTypes from "prop-types";

function Card(props) {
  const {
    imageSrc, price, market, title, description, color,
  } = props;
  return (
    <div style={{
      width: "212px",
      height: "233px",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      margin: "5px",
      flexDirection: "column-reverse",
    }}
    >
      <div
        style={{
          margin: "2px",
          color: "rgb(98, 255, 0)",
          fontSize: "16px",
        }}
      >
        {description}
      </div>
      <div style={{
        display: "flex",
        flexDirection: "column",
        width: "190px",
        height: "214px",
        border: "2px solid",
        color,
        alignItems: "center",
        justifyContent: "start",
      }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            width: "190px",
            height: "30px",
            backgroundColor: color,
            fontFamily: "system-ui",
            color: "white",
            fontSize: "25px",
          }}
        >
          {market}
        </div>
        <img
          src={imageSrc}
          style={{
            width: "140px",
            height: "128px",
            color: "inherit",
            text_decoration: "inherit",
            font_family: "RobotoThin",
            margin_right: "200px",
          }}
          alt="Apples"
        />
        <div style={{
          display: "flex",
          width: "166px",
          alignItems: "flex-end",
          flexDirection: "row-reverse",
          marginTop: "19px",
        }}
        >
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              width: "60px",
              height: "60px",
              backgroundColor: "rgb(98 255 0)",
              // border: "2px solid #f44336 ",
              borderRadius: "100%",
              position: "absolute",
              color: "white",
              fontSize: "35px",
            }}
          >
            {price}
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              width: "170px",
              height: "25px",
              backgroundColor: color,
              color: "white",
              fontSize: "20px",
              marginRight: "25px",

            }}
          >
            {title}
          </div>
        </div>
      </div>
    </div>
  );
}
Card.propTypes = {
  imageSrc: PropTypes.string.isRequired,
  price: PropTypes.string,
  title: PropTypes.string,
  market: PropTypes.string,
  description: PropTypes.string,
  color: PropTypes.string,
};

Card.defaultProps = {
  price: "",
  title: "",
  market: "",
  description: "",
  color: "",
};

export default Card;
