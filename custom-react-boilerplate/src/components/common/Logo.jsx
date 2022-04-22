import React from "react";
import PropTypes from "prop-types";

function Logo(props) {
  const { imageSrc, quotes } = props;

  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <img
        src={imageSrc}
        style={{
          width: "230px",
          height: "130px",
          color: "inherit",
          text_decoration: "inherit",
          font_family: "RobotoThin",
          margin_right: "200px",
        }}
        alt="logo"
      />

      <div
        style={{
          color: "rgb(192 158 22)",
          display: "flex",
          flexDirection: "row-reverse",
          flexWrap: "nowrap",
          alignContent: "flex-end",
          justifyContent: "space-between",
          font_size: "5px",
          font_family: "RobotoThin",
          font_weight: "bolder",
        }}
      >
        {quotes}
      </div>
    </div>
  );
}
Logo.propTypes = {
  imageSrc: PropTypes.string.isRequired,
  quotes: PropTypes.string,
};

Logo.defaultProps = {
  quotes: "",
};

export default Logo;
