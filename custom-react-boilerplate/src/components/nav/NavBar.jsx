import React from "react";
import { Link } from "react-router-dom";
import { ITEMS } from "../../constants/menuItems";
import "./NavBar.css";

function NavBar() {
  return (
    <div className="menu">
      <nav className="navBar">
        {ITEMS.map((item) => (
          <Link to={`${item.link}`} key={item.id}>
            {item.title}
          </Link>
        ))}
        <input type="text" placeholder="Search" />
      </nav>
    </div>
  );
}

export default NavBar;
