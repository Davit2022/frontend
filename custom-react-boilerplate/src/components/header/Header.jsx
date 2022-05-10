import React from "react";
import { useNavigate } from "react-router-dom";
import Logo from "../common/Logo";
import image from "../../assets/image.png";
import Info from "../common/Info";
import Button from "../common/Button";
import "./Header.css";

function Header() {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/login");
  };

  return (
    <div className="header">
      <div className="header-logo">
        <Logo imageSrc={image} quotes="You happy with us" />
      </div>
      <div className="header-info">
        <Info />
      </div>
      <div className="header-buttons">
        <Button title="Login" className="header-button" onClick={handleClick}>
          <div>HEY</div>
        </Button>
        <Button title="Cart" className="header-button" onClick={handleClick} />
      </div>
    </div>
  );
}

export default Header;