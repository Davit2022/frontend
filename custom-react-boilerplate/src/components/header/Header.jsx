import React from "react";
import { Link } from "react-router-dom";
import Logo from "../common/Logo";
import image from "../../assets/image.png";
import Info from "../common/Info";
import Button from "../common/Button";
import "./Header.css";

function Header() {
  return (
    <div className="header">
      <div className="header-logo">
        <Logo imageSrc={image} quotes="You happy with us" />
      </div>
      <div className="header-info">
        <Info />
      </div>
      <div className="header-buttons">
        <Link to="/login">
          <Button
            title="Login"
            className="header-button"
          />
        </Link>
        <Link to="/cart">
          <Button title="Cart" className="header-button" />
        </Link>
      </div>
    </div>
  );
}

export default Header;
